import DashboardLayoutComponent from "@/components/layout/dashboardLayout"
import { Container } from "@/components/structure"
import PageHeaderTitle from "@/components/header/pageHeaderTitle"

import { cn } from "@/lib/utils"

export default function DashboardLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <DashboardLayoutComponent>
            <main className={cn("h-full md:max-h-full p-4 md:p-6 lg:p-10 flex flex-col gap-5")}>
                <PageHeaderTitle />
                {children}
            </main>
        </DashboardLayoutComponent>
    )
}