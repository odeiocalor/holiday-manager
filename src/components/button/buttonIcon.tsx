import { ButtonHTMLAttributes } from 'react'
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from '@/lib/utils'

const buttonIconVariants = cva(
    "inline-flex items-center justify-center rounded-full hover:bg-neutral-300 dark:hover:bg-neutral-700",
    {
        variants: {
            size: {
                sm: "w-8 h-8",
                md: "w-10 h-10",
                lg: "w-12 h-12",
            },
        },
        defaultVariants: {
            size: "md",
        },
    }
)


interface ButtonIconProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonIconVariants> {
    children?: React.ReactNode
    label?: string
    className?: string
}

function ButtonIcon({ children, label, size, className, ...rest }: ButtonIconProps) {
    return (
        <button
            className={cn(
                buttonIconVariants({
                    size,
                }),
                className
            )}
            title={label}
            aria-label={label}
            {...rest}
        >
            {children}
        </button>
    )
}

export { ButtonIcon, buttonIconVariants }