import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import ThemeProvider from "@/lib/providers/themeProvider"

import { cn } from "@/lib/utils";

const fontSans = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
})

export const metadata: Metadata = {
    title: "Holiday Manager",
    description: "Manage yours or a group holiday plan. Create a plan, add activities, invite your family and friends and make your holidays more organized.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR" suppressHydrationWarning>
            <body className={cn(
                "min-h-screen min-w-full flex font-sans antialiased",
                "bg-neutral-50 dark:bg-neutral-800",
                "text-black dark:text-white",
                fontSans.variable
            )}>
                <ThemeProvider>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
