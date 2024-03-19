"use client"

import { usePathname } from "next/navigation"

import { Text } from "@/components/text"

import routes from "@/config/routes"
import { cn } from "@/lib/utils"

function HeaderTitleSkeleton() {
    return (
        <span className={cn("w-8 h-5 bg-neutral-200 rounded-full animate-pulse")}>

        </span>
    )
}

export default function HeaderTitle() {
    const pathname = usePathname()

    if (!pathname) {
        return <HeaderTitleSkeleton />
    }

    return (
        <Text variant="titleOne">
            <h2>
                {routes[pathname]?.name}
            </h2>
        </Text>
    )
}