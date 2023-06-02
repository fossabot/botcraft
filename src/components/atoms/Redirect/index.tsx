import { replaceUnsafe, useLocation } from "@swan-io/chicane"
import * as React from "react"

const Redirect = ({ to }: { to: string }) => {
    const location = useLocation().toString()

    React.useLayoutEffect(() => {
        if (to !== location) {
            replaceUnsafe(to)
        }
    }, [location, to])

    return null
}

export default Redirect
