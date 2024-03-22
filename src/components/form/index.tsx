import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const formVariants = cva(
    "w-full flex flex-col gap-x-10 gap-y-6",
    {
        variants: {
            variant: {
                default: "lg:flex-row",
                "dashboard-form-page": "lg:flex-row"
            },
        },
    }
)

interface FormProps
    extends React.FormHTMLAttributes<HTMLFormElement>,
    VariantProps<typeof formVariants> { }

export function Form({ variant, className, children, ...props }: FormProps) {
    return (
        <form className={cn(
            "",
            formVariants({ variant }),
            className
        )}
            {...props}
        >
            {children}
        </form>
    )
}

export function FormItem({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return <div className={cn("flex flex-col gap-2 w-full", className)} {...props}>{children}</div>
}

export function FormItemDescription({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return <p className={cn("text-sm text-neutral-500", className)} {...props}>{children}</p>
}

const formItemMessageVariants = cva(
    "text-sm",
    {
        variants: {
            type: {
                default: "text-neutral-500",
                error: "text-red-500",
                success: "text-green-500",
                warning: "text-yellow-500",
            }
        },
        defaultVariants: {
            type: "default",
        },
    }
)

interface FormItemMessageProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof formItemMessageVariants> { }

export function FormItemMessage({ type, className, children, ...props }: FormItemMessageProps) {
    return <p className={cn(formItemMessageVariants({ type, className }))} {...props}>{children}</p>
}