import { cn } from "@/lib/utils"

interface DropdownProps {
    positionX?: "left" | "right"
    positionY?: "top" | "bottom"
    children: React.ReactNode
    className?: string
}

export default function Dropdown({ positionX, positionY, children, className }: DropdownProps) {
    return (
        <div className={cn(
            "absolute p-2 rounded-md shadow-lg",
            "bg-neutral-200 dark:bg-neutral-700",
            "hidden group-hover:block",
            { "top-full mt-1 before:absolute before:left-0 before:-top-4 before:h-4 before:w-full": positionY === "bottom" },
            { "bottom-full mb-1 after:absolute after:left-0 after:-bottom-4 after:h-4 after:w-full": positionY === "top" },
            { "left-0": positionX === "left" },
            { "right-0": positionX === "right" },
            className
        )}>
            {children}
        </div>
    )
}
