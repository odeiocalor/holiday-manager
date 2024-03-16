import { Home, Notebook, BookUser, BookHeart, BookPlus, Handshake, Calendar, LucideIcon } from 'lucide-react'

export type NavLink = {
    name: string
    label: string
    href: string
    icon: LucideIcon
}

export const navLinks = [
    {
        name: 'home',
        label: 'Home',
        href: '/',
        icon: Home
    },
    {
        name: 'my-plans',
        label: 'My Plans',
        href: '/my-plans',
        icon: BookUser
    },
    {
        name: 'participating',
        label: 'Participating',
        href: '/participating',
        icon: BookHeart
    },
    {
        name: 'calendar',
        label: 'Calendar',
        href: '/calendar',
        icon: Calendar
    }
] as NavLink[]