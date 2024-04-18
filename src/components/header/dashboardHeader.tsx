import { Suspense } from "react"

import { Container } from "@/components/structure"
import { UserIcon } from "@/components/user/userIcon"
import SignInButton from "@/components/button/signInButton"
import { PageHeaderTitle, PageHeaderTitleSkeleton } from "@/components/header/pageHeaderTitle"

import { auth } from "@/auth"
import { cn } from "@/lib/utils"

export default async function DashboardHeader() {
    const session = await auth()

    return (
        <Container variant="default-page" className={cn(
            "md:py-0 lg:py-0",
            "h-[5rem]",
            "hidden md:flex align-middle",
            "bg-neutral-100 dark:bg-neutral-900",
        )}>
            <header className={cn(
                "w-full flex items-center justify-between"
            )}>
                <Suspense fallback={<PageHeaderTitleSkeleton />}>
                    <PageHeaderTitle />
                </Suspense>
                <div className={cn("ml-auto")}>
                    <UserIcon />
                    {!session && <SignInButton />}
                </div>
            </header>
        </Container>
    )
}