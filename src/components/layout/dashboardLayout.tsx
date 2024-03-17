import DashboardMobileHeader from "@/components/header/dashboardMobileHeader"
import DashboardMobileNav from "@/components/nav/dashboardMobileNav"

import { cn } from "@/lib/utils"

export default function DashboardLayout({
    children,
    ...props
}: {
    children: React.ReactNode
}) {
    return (
        <div className={cn(
            "min-h-full min-w-full flex flex-col",
        )}>
            {/* Only displayed until medium screen */}
            <DashboardMobileHeader />
            {children}
            {/* Only displayed until medium screen */}
            <DashboardMobileNav />
        </div>
    )
}