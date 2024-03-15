import Link from "next/link"

import { marketingConfig } from "@/config/marketing"
import { auth } from "@/lib/auth"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import Buildings from "@/components/Buildings"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"

interface MarketingLayoutProps {
    children: React.ReactNode
}

export default async function MarketingLayout({
    children,
}: MarketingLayoutProps) {
    const session = await auth()

    return (
        <div className="flex min-h-screen flex-col max-w-[100vw] overflow-x-hidden">
            <div className="absolute w-screen h-screen">
                <div className="relative h-full w-full bg-slate-950">
                    {/* eslint-disable-next-line tailwindcss/no-contradicting-classname */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:35px_35px]"></div>
                </div>
            </div>
            <Buildings />
            <header className="container z-40 bg-background">
                <div className="flex h-20 items-center justify-between py-6">
                    <MainNav items={marketingConfig.mainNav} />
                    <nav>
                        <Link
                            href={!session?.user ? "/login" : "/dashboard"}
                            className={cn(
                                buttonVariants({
                                    variant: "outline",
                                }),
                                "px-16 bg-transparent rounded-full text-purple-400/80 hover:bg-purple-400/80 hover:text-white transition-colors"
                            )}
                        >
                            Login
                        </Link>
                    </nav>
                </div>
            </header>
            <main className="flex-1">{children}</main>
        </div>
    )
}
