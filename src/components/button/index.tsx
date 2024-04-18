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
            width: {
                full: "w-full",
                auto: "w-auto",
                fit: "w-fit",
            },
            variant: {
                default: "bg-neutral-300 dark:bg-neutral-600 text-neutral-950 dark:text-neutral-50 hover:bg-neutral-400 dark:hover:bg-neutral-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-neutral-300 disabled:hover:dark:bg-neutral-600 disabled:hover:text-neutral-950 disabled:hover:dark:text-neutral-50",
                primary: "bg-primary text-neutral-50 hover:bg-secondary disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-primary",
                outline: "bg-transparent border border-primary text-primary hover:bg-primary hover:text-neutral-50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-primary",
                destructive: "bg-red-500 text-neutral-50 hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-red-500",
                ghost: "bg-transparent text-neutral-950 dark:text-neutral-50 hover:bg-neutral-300 hover:dark:bg-neutral-600 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:dark:bg-transparent disabled:hover:text-neutral-950 disabled:hover:dark:text-neutral-50",
                link: "bg-transparent text-primary underline-offset-4 hover:underline disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:no-underline",
            }
        },
        defaultVariants: {
            size: "md",
            variant: "default",
            width: "auto",
        },
    }
)

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>

function Button({
    variant,
    size,
    width,
    className,
    ...props
}: ButtonProps) {
    return (
        <button
            className={cn(buttonVariants({ variant, size, width, className }))}
            {...props}
        />
    )
}

export { Button, buttonVariants }