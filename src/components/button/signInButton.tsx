"use client"

import { LogOut } from "lucide-react"
import { signIn } from "next-auth/react"

import { Button } from "@/components/button"

export default function SignInButton() {
    return (
        <Button variant='primary' width='fit' onClick={() => signIn()}>
            <LogOut className="w-4 h-4 mr-2" />
            Sign In
        </Button>
    )
}