import { ActionIcon, Group } from "@mantine/core"
import { Link } from "@swan-io/chicane"
import { List, Plus } from "lucide-react"
import { memo } from "react"

import Icon from "@/components/atoms/Icon"

import * as css from "./styles.css"

type LeftActionsProps = {
    onAddChatClick?: () => void
}

const LeftActions = memo(({ onAddChatClick }: LeftActionsProps) => {
    return (
        <Group className={css.container}>
            <ActionIcon variant="default" aria-label="dropdown">
                <Link to="/chats">
                    <Icon as={List} />
                </Link>
            </ActionIcon>
            <ActionIcon variant="default" aria-label="settings" onClick={onAddChatClick}>
                <Icon as={Plus} />
            </ActionIcon>
        </Group>
    )
})

export default LeftActions
