import { style } from "@vanilla-extract/css"

export const container = style({
    display: "flex",
    flexDirection: "column",
})

export const sectionTitle = style({
    margin: "0",
    color: "#999",
    fontWeight: "400",
    fontSize: "12x",
    textTransform: "capitalize",
})
