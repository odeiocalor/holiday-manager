"use client"

import { usePathname, useParams } from "next/navigation"

import { Text } from "@/components/text"

import routes from "@/config/routes"
import { cn, getPathnameArrayWithParamsKeys } from "@/lib/utils"

export function PageHeaderTitleSkeleton() {
    return (
        <span className={cn("w-8 h-9 bg-neutral-200 rounded-full animate-pulse")}></span>
    )
}

export function PageHeaderTitle() {
    const pathname = usePathname()
    const params = useParams()

    const arrayWithParamsKeys = getPathnameArrayWithParamsKeys(pathname, params)

    return (
        <Text variant="titleOne">
            <h2>
                {routes[arrayWithParamsKeys.join("/")]?.name}
            </h2>
        </Text>
    )
}