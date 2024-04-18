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

export const getPathnameArrayWithParamsKeys = (pathname: string | string[], params: Record<string, string | string[]>): string[] => {
    if (typeof pathname === 'string') {
        return pathname.split('/').map((path) => {
            const param = Object.keys(params).find((key) => params[key] === path)

            return param ? `[${param}]` : path
        })
    }

    return pathname.map((path) => {
        const param = Object.keys(params).find((key) => params[key] === path)

        return param ? `[${param}]` : path
    })
}
