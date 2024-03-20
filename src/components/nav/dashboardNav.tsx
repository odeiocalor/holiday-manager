'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

import { navLinks, type NavLink } from "@/components/nav/config"
import { Logo } from "@/components/logo"

import { cn, navItemIsActive } from "@/lib/utils"

export function DashboardNav() {
    const pathname = usePathname()

    return (
        <nav className={cn(
            "flex-col gap-10 items-center py-8",
            "bg-neutral-50 dark:bg-neutral-950",
            "hidden md:flex",
        )}>
            <Link href="/">
                <h1>
                    <span className="sr-only">Holiday Manager</span>
                    <Logo />
                </h1>
            </Link>
            <div className={cn(
                "h-full"
            )}>
                {navLinks.map((link) => {
                    const isActive = navItemIsActive({ pathname, href: link.href })

                    return (
                        <DashboardNavItem
                            key={link.name}
                            link={link}
                            isActive={isActive}
                        />
                    )
                })}
            </div>
        </nav>
    )
}

type DashboardNavItemProps = {
    link: NavLink
    isActive: boolean
}

function DashboardNavItem({ link, isActive }: DashboardNavItemProps) {
    const { name, label, href, icon: Icon } = link
    return (
        <Link
            key={name}
            href={href}
            className={cn(
                "relative flex flex-row py-5 px-8 gap-3 items-center bg-gradient-to-l",
                {
                    "hover:from-tertiary/15": !isActive,
                },
                {
                    "from-tertiary/20 text-primary after:absolute after:top-0 after:right-0 after:w-1 after:h-full after:bg-primary ": isActive,
                }
            )}
            title={label}
            aria-label={label}
        >
            <Icon />
            <span>{label}</span>
        </Link>
    )
}