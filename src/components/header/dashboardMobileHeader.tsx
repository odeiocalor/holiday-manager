import Link from "next/link"

import { Logo } from "@/components/logo"
import { MaxWidthWrapper } from "@/components/structure"
import { UserIcon } from "@/components/user/userIcon"

import { cn } from "@/lib/utils"

export default async function DashboardMobileHeader() {
    return (
        <MaxWidthWrapper className={cn(
            "block md:hidden",
        )}>
            <header className={cn(
                "flex items-center justify-between"
            )}>
                <Link href="/" className="text-3xl font-bold">
                    <Logo />
                </Link>
                <UserIcon />
            </header>
        </MaxWidthWrapper>
    )
}