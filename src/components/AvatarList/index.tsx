import { Indicator } from "@mantine/core"
import { Link } from "@swan-io/chicane"
import { Plus } from "lucide-react"

import chatgpt from "@/assets/chatgpt.png?w=176&h=176&fill=contain&format=webp&quality=100"
import { vars } from "@/theme/vars.css"

import Avatar from "../atoms/Avatar"
import Icon from "../atoms/Icon"
import * as css from "./styles.css"

type AvatarListProps = {
    selected?: string
}

export const AvatarList = ({ selected }: AvatarListProps) => {
    return (
        <div className={css.container}>
            <Link to="/bots/ChatGPT">
                <Avatar bg={chatgpt} />
            </Link>
            <Indicator inline label="WIP" size={14}>
                <div className={css.plus}>
                    <Icon as={Plus} size={24} color={vars.colors.overlay} />
                </div>
            </Indicator>
        </div>
    )
}
