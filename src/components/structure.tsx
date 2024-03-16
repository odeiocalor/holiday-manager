import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

export const MaxWidthWrapper = ({
    className,
    children,
}: {
    className?: string
    children?: ReactNode
}) => {
    return (
        <div
            className={cn(
                "mx-auto w-full",
                "px-3 md:px-5",
                "py-3 md:py-5",
                className
            )}>
            {children}
        </div>
    )
}

export default MaxWidthWrapper