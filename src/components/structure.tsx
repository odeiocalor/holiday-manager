import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

export function MaxWidthWrapper({
    className,
    children,
}: {
    className?: string
    children?: React.ReactNode
}) {
    return (
        <div
            className={cn(
                "mx-auto w-full",
                "px-5 md:px-5",
                "py-3 md:py-5",
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