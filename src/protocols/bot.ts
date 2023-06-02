import type { IconProtocol, IDProtocol, NameableProtocol, TitleProtocol } from "./base"

export type BotProtocol = IDProtocol &
    TitleProtocol &
    IconProtocol &
    NameableProtocol & {
        prompt: string
        introMessage: string
        options: Record<string, unknown>
    }
