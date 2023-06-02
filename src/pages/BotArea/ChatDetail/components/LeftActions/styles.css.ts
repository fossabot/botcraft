import { style } from "@vanilla-extract/css"

import { vars } from "@/theme/vars.css"

export const container = style({
    "@media": {
        print: {
            display: "none",
        },
    },
})

export const dropdown = style({
    padding: "0.5rem 0",
    margin: "0 1rem",
    height: "100%",
    width: "calc(375px - 2rem)",
    maxHeight: "calc(100vh - 200px)",
    background: "#fff",
    borderRadius: "0.5rem",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",

    ":focus-visible": {
        outline: "none",
    },

    "@media": {
        "screen and (max-width: 768px)": {
            width: vars.floatingContentWidth,
        },
    },
})
