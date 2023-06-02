import type { AutoAnimationPlugin } from "@formkit/auto-animate"
import autoAnimate from "@formkit/auto-animate"
import { useMountEffect } from "@react-hookz/web"
import { memo, useRef } from "react"

import { defaultAnimation } from "@/lib/autoAnimate"

type AutoAnimateProps = {
    children: React.ReactNode
    animation?: AutoAnimationPlugin
}

const AutoAnimate = memo(({ animation = defaultAnimation, children }: AutoAnimateProps) => {
    const ref = useRef<HTMLDivElement>(null)

    useMountEffect(() => {
        const el = ref.current

        if (!el) {
            return
        }

        const controller = autoAnimate(el, animation)

        return () => {
            controller.destroy?.()
        }
    })

    return <div ref={ref}>{children}</div>
})

export default AutoAnimate
