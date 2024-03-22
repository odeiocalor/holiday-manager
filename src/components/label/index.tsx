import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const labelVariants = cva(
    "block text-sm font-medium",
)

export interface LabelProps
    extends React.LabelHTMLAttributes<HTMLLabelElement>,
    VariantProps<typeof labelVariants> { }

export default function Label({ className, ...props }: LabelProps) {
    return (
        <label
            className={cn(
                labelVariants({ className })
            )}
            {...props}
        />
    )
}