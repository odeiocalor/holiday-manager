import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

export const containerVariants = cva(
    "w-full",
    {
        variants: {
            padding: {
                "p-none": "p-0 md:p-0 lg:p-0",
                "p-sm": "p-2 md:p-3 lg:p-4",
                "p-md": "p-4 md:p-5 lg:p-6",
                "p-lg": "p-6 md:p-7 lg:p-8",
                "p-xl": "p-8 md:p-9 lg:p-10",
                "p-2xl": "p-10 md:p-11 lg:p-12",
            },
            bgColor: {
                primary: "bg-neutral-50 dark:bg-neutral-950 rounded-2xl",
                secondary: "bg-neutral-100 dark:bg-neutral-900 rounded-2xl",
                tertiary: "bg-neutral-200 dark:bg-neutral-800 rounded-2xl",
            },
            rowAtViewport: {
                sm: "flex flex-col sm:flex-row",
                md: "flex flex-col md:flex-row",
                lg: "flex flex-col lg:flex-row",
            },
            variant: {
                "default-page": "p-4 md:p-6 lg:p-10 md:pt-5 lg:pt-5",
                "form-column": "flex flex-col gap-y-6",
                "two-column-form-row": "flex flex-col lg:flex-row gap-x-14 gap-y-6",
                "two-input-row": "flex flex-col gap-6 sm:flex-row lg:flex-col xl:flex-row",
            }
        }
    }
)

interface ContainerProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> { }

export function Container({
    padding,
    bgColor,
    variant,
    className,
    children,
}: ContainerProps) {
    return (
        <div
            className={cn(
                containerVariants({ padding, bgColor, variant, className }),
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
    return <div className={cn(separatorVariants({ orientation, className }))} {...props} />
}