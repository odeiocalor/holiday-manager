import Image from "next/image";
import { User, ChevronDown } from 'lucide-react'

import { auth } from "@/auth"

import { cn } from "@/lib/utils"

export async function UserIcon() {
    const session = await auth()


    if (!session) return null

    return (
        <div className={cn(
            "flex items-center justify-center gap-2 cursor-pointer hover:opacity-80",
            "text-neutral-600 dark:text-neutral-400",
        )}>
            <div className={cn(
                "relative h-11 w-11 rounded-full overflow-hidden flex items-center justify-center",
                "bg-neutral-600 dark:bg-neutral-600",
            )}>
                {session.user?.image ?
                    <Image
                        src={session.user.image}
                        alt={session.user.name || ''}
                        fill={true}
                    />
                    :
                    <User className="size-2/3" />
                }
            </div>
            {/* TODO - UserDropdown */}
            {/* <ChevronDown size={15} /> */}
        </div>
    )
}