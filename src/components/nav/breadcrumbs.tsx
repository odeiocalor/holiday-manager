"use client"

import { usePathname, useParams } from "next/navigation"
import Link from "next/link"

import { cn, capitalize, getPathnameArrayWithParamsKeys } from "@/lib/utils"
import routes from "@/config/routes"

export default function Breadcrumbs() {
    const pathname = usePathname()
    const params = useParams()

    if (!pathname) return null

    // filter(Boolean) removes empty strings
    const breadcrumbs = pathname
        .split("/")
        .filter(Boolean)
        .map((breadcrumb, index, arr) => {
            const isLast = index === arr.length - 1

            // Checks if the element is in the params, if so returns the object key
            const arrayWithParamsKeys = getPathnameArrayWithParamsKeys(arr, params)

            const routeName = routes[`/${arrayWithParamsKeys.slice(0, index + 1).join("/")}`].name
            const capitalizeBreadcrumb = breadcrumb.split("-").map(capitalize).join(" ")

            return {
                name: routeName || capitalizeBreadcrumb,
                href: `/${arrayWithParamsKeys.slice(0, index + 1).join("/")}`,
                isLast,
            }
        })

    if (!breadcrumbs.length) return null

    return (
        <ol className="flex items-center space-x-1">
            {breadcrumbs.map((breadcrumb, index) => {
                const isLast = breadcrumb.isLast

                return (
                    <li key={breadcrumb.href} className={cn(
                        {
                            "text-neutral-600 dark:text-neutral-400": isLast,
                            "link hover:underline": !isLast,
                        }
                    )}>
                        {index > 0 && (
                            <span className="mx-1 md:mx-2">
                                /
                            </span>
                        )}
                        {isLast ?
                            breadcrumb.name
                            :
                            <Link href={breadcrumb.href} className={cn(
                                {
                                    "font-medium": !isLast
                                }
                            )}>
                                {breadcrumb.name}
                            </Link>
                        }
                    </li>
                )
            })}
        </ol>
    )
}
