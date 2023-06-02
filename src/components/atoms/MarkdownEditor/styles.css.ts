import { globalStyle, style } from "@vanilla-extract/css"

import { vars } from "@/theme/vars.css"

export const container = style({
    display: "flex",
    margin: "1rem",
    borderRadius: "0.5rem",
    background: vars.colors.background,
    fontSize: "16px",

    "@media": {
        "screen and (max-width: 768px)": {
            fontSize: "14px",
        },
    },
})

export const content = style({
    flex: "1 1 auto",
})

globalStyle(`${content} .cm-editor`, {
    padding: "0.5rem",
    backgroundColor: "transparent",
    borderRadius: "0.5rem",
    outline: "2px solid transparent",
    transition: "outline-color 100ms ease-out",
})

globalStyle(`${content} .cm-editor.cm-focused`, {
    outlineColor: vars.colors.overlay,
})

globalStyle(`${content} .cm-editor .cm-scroller`, {
    fontFamily: `${vars.font.family.fontFamilyBody}`,
})
