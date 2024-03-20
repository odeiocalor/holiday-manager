import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const dropdownVariants = cva(
    "absolute p-4 rounded-md shadow-lg bg-neutral-300 dark:bg-neutral-700 hidden group-hover:block",
    {
        variants: {
            positionX: {
                left: "left-0",
                right: "right-0",
            },
            positionY: {
                bottom: "top-full mt-1 before:absolute before:left-0 before:-top-4 before:h-4 before:w-full",
                top: "bottom-full mb-1 after:absolute after:left-0 after:-bottom-4 after:h-4 after:w-full",
            },
        },
        defaultVariants: {
            positionX: "right",
            positionY: "bottom",
        },
    }

)

interface DropdownProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof dropdownVariants> { }

export default function Dropdown({ positionX, positionY, children, className }: DropdownProps) {
    return (
        <div className={cn(
            dropdownVariants({ positionX, positionY, className }),
        )}>
            {children}
        </div>
    )
}
