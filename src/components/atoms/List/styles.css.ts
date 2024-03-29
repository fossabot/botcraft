import { globalStyle, style } from "@vanilla-extract/css"

import { vars } from "@/theme/vars.css"

export const container = style({
    flex: "1 1 auto",
})

export const content = style({
    padding: "0 0.5rem",
})

export const itemList = style({
    display: "flex",
    flexFlow: "column nowrap",
    width: "100%",
})

export const item = style({
    padding: "0 0.5rem",
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "38px",
    borderRadius: "0.25rem",
    background: "#fff",
    cursor: "pointer",
})

globalStyle(`${itemList} [data-selected='true']`, {
    color: "#fff",
    background: vars.colors.primary,
})

export const itemText = style({
    width: "100%",
    color: "inherit",
    fontWeight: "400",
    fontSize: "14px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
})
