import DashboardMobileHeader from "@/components/header/dashboardMobileHeader"
import { DashboardMobileNav } from "@/components/nav/dashboardMobileNav"
import { DashboardNav } from "@/components/nav/dashboardNav"
import DashboardHeader from "@/components/header/dashboardHeader"

import { cn } from "@/lib/utils"

export default function DashboardLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div className={cn(
            "min-h-full min-w-full flex flex-col md:flex-row",
        )}>
            {/* Only displayed until medium screen */}
            <DashboardMobileHeader />
            {/* Only displayed after medium screen */}
            <DashboardNav />
            <div className={cn("flex-1")}>
                {/* Only displayed after medium screen */}
                <DashboardHeader />
                {children}
            </div>
            {/* Only displayed until medium screen */}
            <DashboardMobileNav />
        </div>
    )
}