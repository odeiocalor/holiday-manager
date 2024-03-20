import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Resolves React and Tailwind CSS styling collisions

export const cn = (...inputs: ClassValue[]) => {
    return twMerge(clsx(inputs))
}

export const navItemIsActive = ({ pathname, href }: { pathname: string, href: string }) => {
    return pathname === href || href !== "/" ? pathname?.startsWith(href) : false
}

export const capitalize = (s: string) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}