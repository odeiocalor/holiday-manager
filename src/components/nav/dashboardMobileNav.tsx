'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

import { navLinks, type NavLink } from "@/components/nav/config"
import { buttonIconVariants } from '@/components/button/buttonIcon'

import { cn, navItemIsActive } from "@/lib/utils"

export function DashboardMobileNav() {
    const pathname = usePathname()

    return (
        <nav className={cn(
            "fixed bottom-0 left-0 h-14 w-full items-center justify-around p-2",
            "bg-neutral-50 dark:bg-neutral-950",
            "flex md:hidden",
        )}>
            {navLinks.map((link) => {
                const isActive = navItemIsActive({ pathname, href: link.href })

                return (
                    <DashboardMobileNavItem key={link.name} link={link} isActive={isActive} />
                )
            })}
        </nav>
    )
}

type DashboardMobileNavItemProps = {
    link: NavLink
    isActive: boolean
}

export function DashboardMobileNavItem({ link, isActive }: DashboardMobileNavItemProps) {
    const { name, href, icon: Icon } = link

    return (
        <Link
            key={name}
            href={href}
            className={buttonIconVariants({ variant: isActive ? "active" : undefined })}
            title={name}
            aria-label={name}
        >
            <Icon />
        </Link>
    )
}