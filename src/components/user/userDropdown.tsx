import Dropdown from "@/components/dropdown"
import { ThemeController } from "@/components/themeController"
import { Separator } from "@/components/structure"
import { Button } from "@/components/button"

import { auth } from "@/auth"
import { cn } from "@/lib/utils"

export default async function UserDropdown() {
    const session = await auth()

    return (
        <Dropdown positionX='right' positionY='bottom' className={cn(
            "w-52"
        )}>
            <span className="text-accent">{session?.user?.name || "Nome de Usuário"}</span>
            <Separator orientation='horizontal' className="my-2" />
            <ThemeController />
        </Dropdown>
    )
}