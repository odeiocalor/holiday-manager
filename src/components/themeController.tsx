'use client'

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Sun, Moon, UserCog } from "lucide-react"

import { ButtonIcon, buttonIconVariants } from "@/components/button/buttonIcon"

import { cn } from "@/lib/utils"

export function ThemeControllerSkeleton() {
    return (
        <div className={cn(
            'flex flex-row justify-around animate-pulse'
        )}>
            <div className={cn(
                buttonIconVariants({
                    variant: 'skeleton',
                })
            )} />
            <div className={cn(
                buttonIconVariants({
                    variant: 'skeleton',
                })
            )} />
            <div className={cn(
                buttonIconVariants({
                    variant: 'skeleton',
                })
            )} />
        </div>
    )
}
export function ThemeController() {
    const { theme, setTheme } = useTheme()
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
        return () => setIsMounted(false)
    }, [])

    if (!isMounted) {
        return <ThemeControllerSkeleton />
    }

    return (
        <div className={cn(
            'flex flex-row justify-around'
        )}>
            <ButtonIcon variant={theme === 'light' ? 'active' : undefined} title="Light Mode" onClick={() => setTheme('light')}>
                <Sun />
            </ButtonIcon>
            <ButtonIcon variant={theme === 'dark' ? 'active' : undefined} title="Dark Mode" onClick={() => setTheme('dark')}>
                <Moon />
            </ButtonIcon>
            <ButtonIcon variant={theme === 'system' ? 'active' : undefined} title="System preference" onClick={() => setTheme('system')}>
                <UserCog />
            </ButtonIcon>
        </div>
    )
}
