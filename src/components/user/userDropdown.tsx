import Dropdown from "@/components/dropdown"
import { ThemeController } from "@/components/themeController"
import { Separator } from "@/components/structure"
import SignOutButton from "@/components/button/signOutButton"

import { auth, signOut } from "@/auth"
import { cn } from "@/lib/utils"

export default async function UserDropdown() {
    const session = await auth()

    return (
        <Dropdown positionX='right' positionY='bottom' className={cn(
            "w-52"
        )}>
            <span className="text-accent">{session?.user?.name || "Nome de Usuário"}</span>
            <Separator orientation='horizontal' className="my-2" />
            <SignOutButton signOut={async () => {
                "use server"
                await signOut({ redirectTo: "/api/auth/signin" })
            }} />
            <Separator orientation='horizontal' className="my-2" />
            <ThemeController />
        </Dropdown>
    )
}