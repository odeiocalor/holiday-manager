'use client'

import Link from 'next/link'

import { buttonIconVariants } from '@/components/button/buttonIcon'
import { type NavLink } from '@/components/nav/config'

import { cn } from '@/lib/utils'

type DashboardMobileNavItemProps = {
    link: NavLink
    isActive: boolean
}

export default function DashboardMobileNavItem({ link, isActive }: DashboardMobileNavItemProps) {
    const { name, href, icon: Icon } = link

    return (
        <Link
            key={name}
            href={href}
            className={buttonIconVariants()}
            title={name}
            aria-label={name}
        >
            <Icon color={isActive ? "var(--color-primary-hex)" : "currentColor"} />
        </Link>
    )
}