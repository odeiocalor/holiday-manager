import { forwardRef } from "react"

import genericInputStyles from "@/components/genericInputStyles"
import { cn } from "@/lib/utils"

interface InputProps
    extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> { }

export default forwardRef<HTMLInputElement, InputProps>(function Input({
    className,
    ...props
}: InputProps, ref) {
    return (
        <input
            ref={ref}
            className={cn(
                genericInputStyles,
                "h-10 file:border-0 file:bg-transparent min-w-0",
                className
            )}
            {...props}
        />
    )
})


