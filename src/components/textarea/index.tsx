import { forwardRef } from "react"

import genericInputStyles from "@/components/genericInputStyles";
import { cn } from "@/lib/utils";

interface TextareaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> { }

export default forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea({
    className,
    ...props
}: TextareaProps, ref) {
    return (
        <textarea
            ref={ref}
            className={cn(
                genericInputStyles,
                "resize-none",
                className
            )}
            {...props}
        />
    )
})