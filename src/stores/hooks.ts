import { atom, useAtom } from "jotai"
import { useMemo } from "react"

import type { UUIDStamp } from "@/lib/uuid"

import { chatsAtom, emptyChatAtom, messagesAtom } from "./bot/atoms"

export const useChat = (id: UUIDStamp) => {
    return useAtom(useMemo(() => atom((get) => get(chatsAtom)[id] ?? get(emptyChatAtom)), [id]))
}

export const useMessage = (id: UUIDStamp) => {
    return useAtom(useMemo(() => atom((get) => get(messagesAtom)[id]), [id]))
}
