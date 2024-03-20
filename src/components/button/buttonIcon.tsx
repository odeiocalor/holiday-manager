import { ButtonHTMLAttributes } from 'react'
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from '@/lib/utils'

const buttonIconVariants = cva(
    "inline-flex items-center justify-center rounded-full hover:bg-neutral-500 transition-all duration-300 ease-in-out",
    {
        variants: {
            size: {
                sm: "w-8 h-8",
                md: "w-10 h-10",
                lg: "w-12 h-12",
            },
            variant: {
                active: "text-primary",
                skeleton: "bg-neutral-400 dark:bg-neutral-600",
            }
        },
        defaultVariants: {
            size: "md",
        },
    }
)


export interface ButtonIconProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonIconVariants> {
    children?: React.ReactNode
    label?: string
    className?: string
}

function ButtonIcon({ variant, size, title, children, className, ...rest }: ButtonIconProps) {
    return (
        <button
            className={cn(
                buttonIconVariants({
                    variant,
                    size,
                    className
                })
            )}
            title={title}
            aria-label={title}
            {...rest}
        >
            {children}
        </button>
    )
}

export { ButtonIcon, buttonIconVariants }