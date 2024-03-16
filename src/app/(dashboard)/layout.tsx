import DashboardLayoutComponent from "@/components/layout/dashboardLayout"

import { cn } from "@/lib/utils"

export default function DashboardLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <DashboardLayoutComponent>
            dashboard layout page
            {children}
        </DashboardLayoutComponent>
    )
}