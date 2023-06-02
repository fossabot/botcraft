/* eslint-disable functional/no-throw-statements */
import { parse, stringify } from "telejson"

import type { ChatCompletionChunk, ChatMessage, EventSourceData } from "../api/types"
import { ChatCompletionChunkSchema, ChatMessageSchema } from "../api/types"

export const isChunk = (value: unknown): value is ChatCompletionChunk => {
    return ChatCompletionChunkSchema.safeParse(value).success
}

export const isChatMessage = (value: unknown): value is ChatMessage => {
    return ChatMessageSchema.safeParse(value).success
}

const parseChunk = (chunk: string): EventSourceData => {
    try {
        const jsonString = chunk
            .split("\n")
            .map((line) => line.replace(/^data: /u, ""))
            .join("")

        if (jsonString === "[DONE]") {
            throw new Error(jsonString)
        }

        const parsed: unknown = parse(jsonString)

        if (isChunk(parsed)) {
            return parsed
        }

        throw new Error(`Unknown chunk format: ${jsonString}`)
    } catch (error) {
        throw new Error(stringify(error))
    }
}

export const parseEventSource = (data: string) => {
    return data.split("\n\n").filter(Boolean).map(parseChunk)
}
