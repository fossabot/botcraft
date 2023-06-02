import { Box, createPolymorphicComponent } from "@mantine/core"
import clsx from "clsx"
import { forwardRef, Fragment, memo, useRef } from "react"

import type { ListItemProtocol } from "@/protocols"

import * as css from "./styles.css"

type ListProps = {
    gap?: number
    data?: ListItemProtocol[]
    selectedID?: string | undefined
    renderItem?: (item: ListItemProtocol, selected: boolean, index: number) => React.ReactNode
    // onSelectPrev?: () => void
    // onSelectNext?: () => void
}

const defaultData: ListItemProtocol[] = []

export type ListItemProps = {
    children: React.ReactNode
    className?: string
}

export const ListItem = createPolymorphicComponent<"div", ListItemProps>(
    memo(
        forwardRef<HTMLDivElement, ListItemProps>(({ children, className, ...rest }: ListItemProps, ref) => {
            return (
                <Box component="div" ref={ref} className={clsx(css.item, className)} {...rest}>
                    <div className={css.itemText}>{children}</div>
                </Box>
            )
        }),
    ),
)

const List = memo(
    forwardRef<HTMLDivElement, ListProps>(
        ({ data = defaultData, gap = 0, renderItem, selectedID, ...rest }: ListProps, ref) => {
            const scrollContainer = useRef<HTMLDivElement>(null)

            return (
                <div ref={ref} className={css.container} {...rest}>
                    <div className={css.content} ref={scrollContainer}>
                        <div
                            className={css.itemList}
                            style={{
                                gap,
                            }}
                        >
                            {data.map((item, index) => {
                                return (
                                    <Fragment key={item.id}>
                                        {renderItem?.(item, item.id === selectedID, index)}
                                    </Fragment>
                                )
                            })}
                        </div>
                    </div>
                </div>
            )
        },
    ),
)

export default List
