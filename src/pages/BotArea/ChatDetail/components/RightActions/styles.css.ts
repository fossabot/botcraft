import { style } from "@vanilla-extract/css"

export const container = style({
    "@media": {
        print: {
            display: "none",
        },
    },
})
