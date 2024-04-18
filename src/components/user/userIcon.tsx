import Image from "next/image";
import { User, ChevronDown } from 'lucide-react'

import UserDropdown from "@/components/user/userDropdown";

import { auth } from "@/auth"
import { cn } from "@/lib/utils"

export async function UserIcon() {
    const session = await auth()

    if (!session) return null

    const userIconSizePx = 44
    // Tailwind doesn't support dynamic values so the function returns a string
    const userIconBaseStyles = () => `rounded-full overflow-hidden h-[${userIconSizePx}px] w-[${userIconSizePx}px]`

    return (
        <div className={cn(
            "relative group flex items-center justify-center gap-2"
        )}>
            {session.user?.image ?
                <Image
                    src={session.user?.image}
                    width={userIconSizePx}
                    height={userIconSizePx}
                    alt="Avatar"
                    className={userIconBaseStyles()}
                />
                :
                <div className={cn(
                    userIconBaseStyles(),
                    "flex items-center justify-center",
                    "bg-neutral-600 dark:bg-neutral-600"
                )}>
                    <User className="size-2/3" />
                </div>
            }
            <span className={cn(
                "text-neutral-600 dark:text-neutral-400",
            )}>
                <ChevronDown size={15} />
            </span>
            <UserDropdown />
        </div>
    )
}