import { ActionIcon, Group, Modal } from "@mantine/core"
import { useAtom } from "jotai"
import { Settings } from "lucide-react"
import { memo } from "react"

import Icon from "@/components/atoms/Icon"
import { apiKeyAtom, appLayoutAtom } from "@/stores"

import * as css from "./styles.css"

const RightActions = memo(() => {
    const [apiKey, setApiKey] = useAtom(apiKeyAtom)

    const [appLayout, setAppLayout] = useAtom(appLayoutAtom)

    return (
        <Group className={css.container}>
            <ActionIcon
                variant="default"
                aria-label="settings"
                onClick={() => {
                    setAppLayout((draft) => {
                        draft.isConfigModalOpen = !draft.isConfigModalOpen
                    })
                }}
            >
                <Icon as={Settings} />
            </ActionIcon>
            <Modal
                centered
                title="Preferences"
                overlayProps={{
                    opacity: 0.55,
                    blur: 4,
                }}
                opened={appLayout.isConfigModalOpen}
                onClose={() => {
                    setAppLayout((draft) => {
                        draft.isConfigModalOpen = false
                    })
                }}
            >
                <label className="block">
                    <span className="text-gray-700">OpenAI API Key</span>
                    <input
                        type="text"
                        className="mt-1 block w-full"
                        placeholder=""
                        autoComplete="off"
                        autoCorrect="off"
                        required
                        value={apiKey}
                        onChange={(event) => {
                            const { value } = event.target
                            setApiKey(value)
                        }}
                    />
                </label>
            </Modal>
        </Group>
    )
})

export default RightActions
