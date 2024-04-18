import Link from "next/link"

import { Logo } from "@/components/logo"
import { Container } from "@/components/structure"
import { UserIcon } from "@/components/user/userIcon"
import SignInButton from "@/components/button/signInButton"
import MobilePageHeaderTitle from "@/components/header/mobilePageHeaderTitle"

import { auth } from "@/auth"
import { cn } from "@/lib/utils"

export default async function DashboardMobileHeader() {
    const session = await auth()

    return (
        <>
            <Container variant="default-page" className={cn(
                "block md:hidden fixed top-0 left-0 right-0 z-30 py-3",
                "bg-neutral-50 dark:bg-neutral-950",
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
                    {!session && <SignInButton />}
                </header>
            </Container>
            <MobilePageHeaderTitle />
        </>
    )
}