"use client"

import { LogOut } from "lucide-react"

import { Button } from "@/components/button"

export default function SignOutButton({ signOut }: { signOut: () => void }) {
    return (
        <Button variant='default' className="w-full" onClick={() => signOut()}>
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
        </Button>
    )
}