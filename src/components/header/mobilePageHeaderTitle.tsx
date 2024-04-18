"use client"

import { useState, useEffect, Suspense } from "react"

import { Container } from "@/components/structure"
import { PageHeaderTitle, PageHeaderTitleSkeleton } from "@/components/header/pageHeaderTitle"

import { cn } from "@/lib/utils"

export default function MobilePageHeaderTitle() {
    const [pagePosition, setPagePosition] = useState(typeof window !== "undefined" ? window.scrollY : 0)
    const [showPageHeaderTitle, setShowPageHeaderTitle] = useState(true)

    useEffect(() => {
        const handleScroll = () => {
            let scrollPosition = window.scrollY

            setShowPageHeaderTitle(pagePosition > scrollPosition || pagePosition === scrollPosition);
            setPagePosition(scrollPosition)
        };
        window.addEventListener("scroll", handleScroll);
        return (() => {
            window.removeEventListener("scroll", handleScroll);
        })
    })

    return (
        <Container padding="p-md" className={cn(
            "block md:hidden fixed left-0 top-[4.6rem] right-0 z-10 py-3",
            "bg-neutral-100 dark:bg-neutral-900",
            "transition-transform duration-300 ease-in-out",
            {
                "-translate-y-full": !showPageHeaderTitle
            }
        )}>
            <Suspense fallback={<PageHeaderTitleSkeleton />}>
                <PageHeaderTitle />
            </Suspense>
        </Container>
    )
}