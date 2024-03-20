import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

export const containerVariants = cva(
    "w-full",
    {
        variants: {
            padding: {
                "p-sm": "p-4",
                "p-md": "p-5",
                "p-lg": "p-6",
                "p-xl": "p-7",
                "p-2xl": "p-8",
            },
            variant: {
                primary: "bg-neutral-100 dark:bg-neutral-900 rounded-2xl",
                secondary: "bg-neutral-200 dark:bg-neutral-800 rounded-2xl",
                tertiary: "bg-neutral-300 dark:bg-neutral-700 rounded-2xl",
            }
        },
        defaultVariants: {
            padding: "p-md",
        },
    }
)

interface ContainerProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> { }

export function Container({
    padding,
    variant,
    className,
    children,
}: ContainerProps) {
    return (
        <div
            className={cn(
                containerVariants({ padding, variant }),
                className
            )}>
            {children}
        </div>
    )
}

export const separatorVariants = cva(
    "bg-neutral-500",
    {
        variants: {
            orientation: {
                horizontal: "h-px w-full",
                vertical: "h-full w-px",
            },
        },
        defaultVariants: {
            orientation: "horizontal",
        },
    }
)

interface SeparatorProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof separatorVariants> { }


export function Separator({
    orientation,
    className,
    ...props
}: SeparatorProps) {
    return <div className={cn(separatorVariants({ orientation }), className)} {...props} />
}