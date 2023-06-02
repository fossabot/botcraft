import "@total-typescript/ts-reset"
import "@/styles/base.css"
import "@/styles/global.scss"
import "@/styles/overrides.scss"

import { Option as O } from "@swan-io/boxed"
import { enableMapSet, setAutoFreeze, setUseStrictShallowCopy } from "immer"
import { createElement } from "react"
import { createRoot } from "react-dom/client"
import { navigatorDetector } from "typesafe-i18n/detectors"

import { detectLocale } from "./i18n/i18n-util"
import { loadLocaleAsync } from "./i18n/i18n-util.async"
import App from "./pages/App"
import { loadConfigToAtom, loadDBToAtom } from "./stores"

enableMapSet()
setAutoFreeze(true)
setUseStrictShallowCopy(false)

const main = async () => {
    const locale = detectLocale(navigatorDetector)

    await loadLocaleAsync(locale)

    await loadConfigToAtom()

    await loadDBToAtom()

    O.fromNullable(document.querySelector("#root"))
        .map(createRoot)
        .map((root) => root.render(createElement(App)))
        .toResult(new Error("Could not find element with selector: #root"))
        .tapError(console.error)

    document.addEventListener("keydown", (evt) => {
        if (evt.key === "Escape") {
            const { activeElement } = document
            if (activeElement instanceof HTMLElement) {
                activeElement.blur()
            }
        }
    })
}

void main()
