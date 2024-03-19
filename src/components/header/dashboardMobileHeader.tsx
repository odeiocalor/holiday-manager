import Link from "next/link"

import { Logo } from "@/components/logo"
import { MaxWidthWrapper } from "@/components/structure"
import { UserIcon } from "@/components/user/userIcon"

import { cn } from "@/lib/utils"

export default async function DashboardMobileHeader() {
    return (
        <MaxWidthWrapper className={cn(
            "block md:hidden fixed top-0 left-0 right-0 z-10",
            "bg-neutral-100 dark:bg-neutral-900",
        )}>
            <header className={cn(
                "flex items-center justify-between"
            )}>
                <Link href="/">
                    <h1>
                        <span className="sr-only">Holiday Manager</span>
                        <Logo />
                    </h1>
                </Link>
                <UserIcon />
            </header>
        </MaxWidthWrapper>
    )
}