import DashboardLayoutComponent from "@/components/layout/dashboardLayout"
import { Container } from "@/components/structure"
import PageHeaderTitle from "@/components/header/pageHeaderTitle"

export default function DashboardLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <DashboardLayoutComponent>
            <Container padding="p-xl" className="h-full md:max-h-full flex flex-col gap-5">
                <PageHeaderTitle />
                {children}
            </Container>
        </DashboardLayoutComponent>
    )
}