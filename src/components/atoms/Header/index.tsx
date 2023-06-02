import { memo } from "react"

import * as css from "./styles.css"

type HeaderProps = {
    left?: React.ReactNode
    right?: React.ReactNode
    children?: React.ReactNode
}

const Header = memo(({ children, left, right, ...rest }: HeaderProps) => {
    return (
        <header className={css.container} {...rest}>
            <aside className={css.left}>{left}</aside>
            <div className={css.center}>{children}</div>
            <aside className={css.right}>{right}</aside>
        </header>
    )
})

export default Header
