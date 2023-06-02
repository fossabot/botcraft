import { pick } from "rambda"

import { VITE_OPENAI_API_ENDPOINT } from "../env"
import type { ChatCompletionOptions, ChatMessage } from "./types"

export const getChatCompletionStream = async (
    apiKey: string,
    messages: ChatMessage[],
    options: ChatCompletionOptions,
    customHeaders?: Record<string, string>,
    signal: AbortSignal | null = null,
) => {
    const headers: HeadersInit = {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        ...customHeaders,
    }

    const response = await fetch(VITE_OPENAI_API_ENDPOINT, {
        signal,
        method: "POST",
        headers,
        body: JSON.stringify({
            messages: messages.map(pick(["role", "content"])),
            ...options,
            max_tokens: undefined,
            stream: true,
        }),
    })

    if (response.status === 403) {
        throw new Error("Invalid API key")
    }

    if (response.status === 429) {
        throw new Error("Rate limit exceeded")
    }

    if (!response.body) {
        throw new Error("Response body is empty")
    }

    return response.body
}
