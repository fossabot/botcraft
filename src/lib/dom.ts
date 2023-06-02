import { bind } from "bind-event-listener"

export const autoBlur = (element: HTMLElement | Document) => {
    return bind(element, {
        type: "keydown",
        listener: (evt) => {
            if (evt.key === "Escape") {
                const { activeElement } = document
                if (activeElement instanceof HTMLElement) {
                    activeElement.blur()
                }
            }
        },
    })
}
