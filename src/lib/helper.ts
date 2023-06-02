import { match } from "ts-pattern"

export const noop = () => {}

export const identity = <T>(x: T) => x

export const asConst = <const T>(t: T) => t

export const isMobile = () => window.location.href.includes("/mobile/")

export const waitDOMContentLoaded = () => {
    return new Promise((resolve) => {
        match(document.readyState)
            .with("interactive", resolve)
            .with("complete", resolve)
            .otherwise(() => {
                window.addEventListener("DOMContentLoaded", resolve)
            })
    })
}

export const wait = (ms: number) => {
    // eslint-disable-next-line no-promise-executor-return
    return new Promise((resolve) => setTimeout(resolve, ms))
}
