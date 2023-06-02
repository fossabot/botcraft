import clsx from "clsx"
import { useAtom } from "jotai"

import { apiKeyAtom } from "@/stores"

import { Layout } from "../Layout"
import * as css from "./styles.css"

type SettingsProps = {
    botName: string
}

const Settings = ({ botName }: SettingsProps) => {
    const [apiKey, setApiKey] = useAtom(apiKeyAtom)

    return (
        <Layout header="Bot Settings">
            <div className={clsx("prose-sm", css.content)}>
                <h3>API Key</h3>
                <input
                    type="text"
                    value={apiKey}
                    onChange={(evt) => {
                        setApiKey(evt.target.value)
                    }}
                />
            </div>
        </Layout>
    )
}

export default Settings
