import { z } from "zod"

export const ChatMessageSchema = z.object({
    role: z.string(),
    content: z.string(),
})

export const ChatCompletionChunkSchema = z.object({
    id: z.string(),
    object: z.literal("chat.completion.chunk"),
    created: z.number(),
    model: z.string(),
    choices: z.array(
        z.object({
            delta: z.object({
                role: z.optional(z.string()),
                content: z.optional(z.string()),
            }),
            index: z.number(),
            finish_reason: z.null().or(z.string()),
        }),
    ),
})

export type ChatCompletionChunk = z.infer<typeof ChatCompletionChunkSchema>

export type EventSourceData = ChatCompletionChunk | "[DONE]"

export type Role = "user" | "assistant" | "system"

export type Model = "gpt-4" | "gpt-4-32k" | "gpt-3.5-turbo"

export type ChatMessage = z.infer<typeof ChatMessageSchema>

export type ChatCompletionOptions = {
    model: Model
    max_tokens: number
    temperature: number
    presence_penalty: number
    top_p: number
    frequency_penalty: number
}

export const chatCompletionErrorSchema = z.object({
    error: z.object({
        message: z.string(),
        type: z.string(),
        param: z.string(),
        code: z.string(),
    }),
})

export type ChatCompletionError = z.infer<typeof chatCompletionErrorSchema>

export const isChatCompletionError = (value: unknown): value is ChatCompletionError => {
    return chatCompletionErrorSchema.safeParse(value).success
}
