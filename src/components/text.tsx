import { cva, type VariantProps } from "class-variance-authority"

import { cn } from '@/lib/utils'

const textVariants = cva(
    "text-base font-normal",
    {
        variants: {
            size: {
                xs: "text-xs",
                sm: "text-sm",
                md: "text-md",
                lg: "text-lg",
                xl: "text-xl",
            },
            textColor: {
                black: "text-black",
                white: "text-white",
                primary: "text-neutral-800 dark:text-neutral-200",
                secondary: "text-neutral-600 dark:text-neutral-400",
                tertiary: "text-neutral-400 dark:text-neutral-600",
            },
            variant: {
                titleOne: "font-bold text-neutral-900 dark:text-neutral-100 text-3xl",
                titleTwo: "font-bold text-neutral-900 dark:text-neutral-100 text-2xl",
                titleThree: "font-bold text-neutral-900 dark:text-neutral-100 text-xl",
                titleAccentOne: "font-bold text-neutral-500 dark:text-neutral-400 text-3xl",
                titleAccentTwo: "font-bold text-neutral-500 dark:text-neutral-400 text-2xl",
                titleAccentThree: "font-bold text-neutral-500 dark:text-neutral-400 text-xl",
                bodyOne: "text-neutral-900 dark:text-neutral-100",
                bodyAccentOne: "text-neutral-500 dark:text-neutral-400",
            }
        },
        defaultVariants: {
            variant: "bodyOne",
        },
    }
)

export interface TextProps
    extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> { }

function Text({ size, textColor, variant, children, className, ...props }: TextProps) {
    return (
        <div
            className={cn(textVariants({ size, textColor, variant, className }))}
            {...props}
        >
            {children}
        </div>
    )
}

export { Text, textVariants }