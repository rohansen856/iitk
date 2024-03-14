import Link from "next/link"

import { marketingConfig } from "@/config/marketing"
import { auth } from "@/lib/auth"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import Buildings from "@/components/Buildings"

interface MarketingLayoutProps {
    children: React.ReactNode
}

export default async function MarketingLayout({
    children,
}: MarketingLayoutProps) {
    
    const session = await auth()

    return (
        <div className="flex min-h-screen flex-col max-w-screen overflow-x-hidden">
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
