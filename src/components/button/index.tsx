import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-300 ease-in-out",
    {
        variants: {
            size: {
                sm: "p-2.5",
                md: "p-3",
                lg: "p-4",
            },
            variant: {
                default: "bg-neutral-300 dark:bg-neutral-600 text-neutral-950 dark:text-neutral-50 hover:bg-neutral-400 dark:hover:bg-neutral-500",
                primary: "bg-primary text-neutral-50 hover:bg-secondary",
                outline: "bg-transparent border border-primary text-primary hover:bg-primary hover:text-neutral-50",
                destructive: "bg-red-500 text-neutral-50 hover:bg-red-600",
                ghost: "bg-transparent text-neutral-950 dark:text-neutral-50 hover:bg-neutral-300 hover:dark:bg-neutral-600",
                link: "bg-transparent text-primary underline-offset-4 hover:underline",
            }
        },
        defaultVariants: {
            size: "md",
            variant: "default",
        },
    }
)

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>

function Button({
    variant,
    size,
    className,
    ...props
}: ButtonProps) {
    return (
        <button
            className={cn(buttonVariants({ variant, size }), className)}
            {...props}
        />
    )
}

export { Button, buttonVariants }