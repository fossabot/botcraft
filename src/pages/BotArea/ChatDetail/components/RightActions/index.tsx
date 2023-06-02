import { ActionIcon, Group } from "@mantine/core"
import { Settings } from "lucide-react"
import { memo } from "react"

import Icon from "@/components/atoms/Icon"

import * as css from "./styles.css"

const RightActions = memo(() => {
    return (
        <Group className={css.container}>
            <ActionIcon variant="default" aria-label="settings">
                <Icon as={Settings} />
            </ActionIcon>
        </Group>
    )
})

export default RightActions
