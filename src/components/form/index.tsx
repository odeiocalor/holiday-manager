import { forwardRef } from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> { }

export const Form = forwardRef<HTMLFormElement, FormProps>(function FormInner({ className, children, ...props }, ref) {
    return (
        <form ref={ref}
            className={cn(
                "w-full flex flex-col gap-x-10 gap-y-6",
                className
            )}
            {...props}
        >
            {children}
        </form>
    )
})

export function FormItem({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return <div className={cn("flex flex-col gap-2 w-full", className)} {...props}>{children}</div>
}

export function FormItemDescription({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return <p className={cn("text-xs text-neutral-500", className)} {...props}>{children}</p>
}

const formItemMessageVariants = cva(
    "text-xs",
    {
        variants: {
            variant: {
                default: "text-neutral-500",
                error: "text-red-500",
                success: "text-green-500",
                warning: "text-yellow-500",
            }
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

interface FormItemMessageProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof formItemMessageVariants> { }

export function FormItemMessage({ variant, className, children, ...props }: FormItemMessageProps) {
    return <p className={cn(formItemMessageVariants({ variant, className }))} {...props}>{children}</p>
}

export function FormActions({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return <div className={cn("flex justify-end mt-auto", className)} {...props}>{children}</div>
}