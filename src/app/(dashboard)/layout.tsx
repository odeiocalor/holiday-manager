import DashboardLayoutComponent from "@/components/layout/dashboardLayout"
import { Container } from "@/components/structure"

import { cn } from "@/lib/utils"

export default function DashboardLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <DashboardLayoutComponent>
            <Container>
                {children}
            </Container>
        </DashboardLayoutComponent>
    )
}