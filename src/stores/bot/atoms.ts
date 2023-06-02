import { Array as A, Dict, Option as O } from "@swan-io/boxed"
import { set } from "idb-keyval"
import { atom, getDefaultStore } from "jotai"
import { atomWithImmer } from "jotai-immer"
import { omit, pick, sortBy } from "rambda"
import { from, map, mergeMap, timeout } from "rxjs"
import { stringify } from "telejson"
import invariant from "tiny-invariant"

import { getChatCompletionStream } from "@/api/client"
import { parseEventSource } from "@/api/helper"
import type { ChatCompletionOptions } from "@/api/types"
import { configManager } from "@/config"
import { readerToObservable } from "@/lib/stream"
import type { Remap } from "@/lib/utilityTypes"
import { UUIDStamp } from "@/lib/uuid"

import { EMPTY_CHAT_ITEM } from "./constants"
import type { ChatItem, MessageItem } from "./types"

const store = getDefaultStore()

export const apiKeyAtom = atom("", (_, set, payload: string) => {
    const val = payload.trim()
    set(apiKeyAtom, val)
    void configManager.setConfig("apiKey", val)
})

export const emptyChatAtom = atom(() => EMPTY_CHAT_ITEM)

export const chatsAtom = atomWithImmer<Record<UUIDStamp, ChatItem>>({})

store.sub(chatsAtom, () => {
    void set("chats", store.get(chatsAtom))
})

export const messagesAtom = atomWithImmer<Record<UUIDStamp, MessageItem>>({})

store.sub(messagesAtom, () => {
    void set("messages", store.get(messagesAtom))
})

export const chatMetaAtom = atom((get) => {
    return Dict.values(get(chatsAtom)).map((item) => {
        const title = item.title === "" ? "Untitled" : item.title

        return {
            title,
            ...pick(["id", "updatedAt"], item),
        }
    })
})

export const messageMetaAtom = atom((get) => {
    return Dict.values(get(messagesAtom)).map(pick(["id", "Role", "updatedAt"]))
})

export const recentChatsAtom = atom((get) => {
    return sortBy((chat) => -chat.updatedAt, get(chatMetaAtom))
})

export const addChatAtom = atom(null, (_, set, payload: ChatItem) => {
    set(chatsAtom, (draft) => {
        draft[payload.id] = payload
    })
})

export const removeChatAtom = atom(null, (_, set, id: UUIDStamp) => {
    set(chatsAtom, (draft) => {
        Reflect.deleteProperty(draft, id)
    })
})

export const updateChatAtom = atom(null, (_, set, id: UUIDStamp, mutator: (draft: ChatItem) => void) => {
    set(chatsAtom, (draft) => {
        const chat = draft[id]
        invariant(chat, "Chat not found")
        void mutator(chat)
    })
})

export const addMessageAtom = atom(null, (_, set, payload: MessageItem) => {
    set(messagesAtom, (draft) => {
        draft[payload.id] = payload
    })
})

export const removeMessageAtom = atom(null, (_, set, id: UUIDStamp) => {
    set(messagesAtom, (draft) => {
        Reflect.deleteProperty(draft, id)
    })
})

export type ChatCompletionTaskMeta = {
    id: UUIDStamp
    chatID: UUIDStamp
    generatingMessageID: UUIDStamp
}

export type ChatCompletionTask =
    | Remap<
          {
              type: "pending"
              abort: () => void
          } & ChatCompletionTaskMeta
      >
    | Remap<
          {
              type: "done"
              content: string
          } & ChatCompletionTaskMeta
      >
    | Remap<
          {
              type: "error"
              error: Error
          } & ChatCompletionTaskMeta
      >

export const chatCompletionTaskAtom = atom(O.None<ChatCompletionTask>())

export const requestChatCompletionAtom = atom(null, async (get, set, id: UUIDStamp, options: ChatCompletionOptions) => {
    const chat = get(chatsAtom)[id]

    if (!chat) {
        return
    }

    const messages: Omit<MessageItem, "id">[] = A.filterMap(chat.messages, (id) => {
        return O.fromNullable(get(messagesAtom)[id]).map(omit(["id"]))
    })

    const abortController = new AbortController()

    const taskMeta: ChatCompletionTaskMeta = {
        id: UUIDStamp(),
        chatID: id,
        generatingMessageID: UUIDStamp(),
    }

    const message: MessageItem = {
        id: taskMeta.generatingMessageID,
        content: "",
        role: "assistant",
        updatedAt: Date.now(),
    }

    set(messagesAtom, (draft) => {
        draft[taskMeta.generatingMessageID] = message
    })

    set(chatsAtom, (draft) => {
        draft[id]?.messages.push(taskMeta.generatingMessageID)
    })

    set(
        chatCompletionTaskAtom,
        O.Some<ChatCompletionTask>({
            ...taskMeta,
            type: "pending",
            abort: () => {
                abortController.abort()
            },
        }),
    )

    const apiKey = await configManager.getConfig("apiKey")

    if (!apiKey.isSome()) {
        set(
            chatCompletionTaskAtom,
            O.Some<ChatCompletionTask>({ ...taskMeta, type: "error", error: new Error("API key is not set") }),
        )
        return
    }

    const stream = await getChatCompletionStream(apiKey.get(), messages, options, {}, abortController.signal)

    if (stream.isError()) {
        set(
            chatCompletionTaskAtom,
            O.Some<ChatCompletionTask>({ ...taskMeta, type: "error", error: stream.getError() }),
        )
        return
    }

    const resp = stream.get()

    const reader = resp.getReader()

    const observable = readerToObservable(reader)

    const textDecoder = new TextDecoder()

    observable
        .pipe(
            timeout(8000),
            map((value) => textDecoder.decode(value)),
            map(parseEventSource),
            mergeMap((events) => from(events)),
        )
        .subscribe({
            next(event) {
                const content = event.match({
                    Ok: (event) => {
                        if (event === "[DONE]") {
                            return ""
                        }

                        return event.choices[0]?.delta?.content ?? ""
                    },
                    Error: (error) => {
                        console.error(error)
                        return ""
                    },
                })

                set(messagesAtom, (draft) => {
                    const message = draft[taskMeta.generatingMessageID]
                    invariant(message, "chat should exist")
                    message.content += content
                    message.updatedAt = Date.now()
                })
                set(chatsAtom, (draft) => {
                    const chat = draft[id]
                    invariant(chat, "chat should exist")
                    chat.updatedAt = Date.now()
                })
            },
            error(error: unknown) {
                abortController.abort()
                set(
                    chatCompletionTaskAtom,
                    O.Some<ChatCompletionTask>({ ...taskMeta, type: "error", error: new Error(stringify(error)) }),
                )
            },
            complete() {
                set(chatCompletionTaskAtom, O.Some<ChatCompletionTask>({ ...taskMeta, type: "done", content: "" }))
            },
        })
})
