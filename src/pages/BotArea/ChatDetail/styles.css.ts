import { style } from "@vanilla-extract/css"

import { vars } from "@/theme/vars.css"

export const content = style({
    flex: "1 1 auto",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    overflowY: "auto",
    // overflowAnchor: "none",
    backgroundColor: "white",
})

export const bottom = style({
    position: "sticky",
    bottom: "0",
    left: "0",
    right: "0",
    background: "white",
    borderTop: `1px solid ${vars.colors.overlay}`,
})
