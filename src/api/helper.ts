import { Result } from "@swan-io/boxed"
import { parse, stringify } from "telejson"

import type { ChatCompletionChunk, ChatMessage, EventSourceData } from "../api/types"
import { ChatCompletionChunkSchema, ChatCompletionError, ChatMessageSchema } from "../api/types"

export const isChunk = (value: unknown): value is ChatCompletionChunk => {
    return ChatCompletionChunkSchema.safeParse(value).success
}

export const isChatMessage = (value: unknown): value is ChatMessage => {
    return ChatMessageSchema.safeParse(value).success
}

const parseChunk = (chunk: string): Result<EventSourceData, Error> => {
    try {
        const jsonString = chunk
            .split("\n")
            .map((line) => line.replace(/^data: /u, ""))
            .join("")

        if (jsonString === "[DONE]") {
            return Result.Ok<EventSourceData>(jsonString)
        }

        const parsed: unknown = parse(jsonString)

        if (isChunk(parsed)) {
            return Result.Ok<EventSourceData>(parsed)
        }

        if (ChatCompletionError.is(parsed)) {
            return Result.Error(ChatCompletionError.from(parsed))
        }

        return Result.Error(new Error(`Unknown chunk: ${jsonString}`))
    } catch (error) {
        return Result.Error(new Error(stringify(error)))
    }
}

export const parseEventSource = (data: string) => {
    return data.split("\n\n").filter(Boolean).map(parseChunk)
}
