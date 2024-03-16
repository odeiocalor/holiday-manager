'use client'

import { usePathname } from 'next/navigation'

import { navLinks } from "@/components/nav/config"
import DashboardMobileNavItem from "@/components/nav/dashboardMobileNavItem"

import { cn } from "@/lib/utils"

export default function DashboardMobileNav() {
    const pathname = usePathname()

    return (
        <nav className={cn(
            "mt-auto h-14 items-center justify-around p-2",
            "bg-neutral-200 dark:bg-neutral-900",
            "flex md:hidden",
        )}>
            {navLinks.map((link) => {
                const isActive = pathname === link.href

                return (
                    <DashboardMobileNavItem key={link.name} link={link} isActive={isActive} />
                )
            })}
        </nav>
    )
}