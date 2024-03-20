import { Container } from "@/components/structure"
import { UserIcon } from "@/components/user/userIcon"
import HeaderTitle from "@/components/header/headerTitle"

import { cn } from "@/lib/utils"

export default function DashboardHeader() {
    return (
        <Container className={cn(
            "hidden md:block bg-neutral-100 dark:bg-neutral-900",
        )}>
            <header className={cn(
                "flex items-center justify-between"
            )}>
                <HeaderTitle />
                <UserIcon />
            </header>
        </Container>
    )
}