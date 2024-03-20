import { Container } from "@/components/structure"
import { UserIcon } from "@/components/user/userIcon"
import Breadcrumbs from "@/components/nav/breadcrumbs"

import { cn } from "@/lib/utils"

export default function DashboardHeader() {
    return (
        <Container padding="p-xl" className={cn(
            "lg:py-4",
            "hidden md:block",
            "bg-neutral-100 dark:bg-neutral-900",
        )}>
            <header className={cn(
                "flex items-center justify-between"
            )}>
                <Breadcrumbs />
                <div className={cn("ml-auto")}>
                    <UserIcon />
                </div>
            </header>
        </Container>
    )
}