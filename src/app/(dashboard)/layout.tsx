import DashboardLayoutComponent from "@/components/layout/dashboardLayout"
import Breadcrumbs from "@/components/nav/breadcrumbs"
import { containerVariants } from "@/components/structure"

import { cn } from "@/lib/utils"

export default function DashboardLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <DashboardLayoutComponent>
            <main className={cn(
                "h-full md:max-h-full flex flex-col gap-5 md:gap-10",
                containerVariants({ variant: "default-page" }),
            )}>
                <Breadcrumbs />
                {children}
            </main>
        </DashboardLayoutComponent>
    )
}