import type { IDProtocol, TitleProtocol } from "./base"

export type ListItemProtocol = IDProtocol & TitleProtocol

export type ListProtocol<T extends IDProtocol = ListItemProtocol> = {
    items: T[]
}

export type PinListProtocol = ListProtocol & {
    pinned: string[]
}
