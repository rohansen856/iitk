import Link from "next/link"

import { marketingConfig } from "@/config/marketing"
import { auth } from "@/lib/auth"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
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
        <div className="flex min-h-screen flex-col">
            <header className="container z-40 bg-background">
                <div className="flex h-20 items-center justify-between py-6">
                    <MainNav items={marketingConfig.mainNav} />
                    <nav>
                        <Link
                            href={!session?.user ? "/login" : "/dashboard"}
                            className={cn(
                                buttonVariants({
                                    variant: "secondary",
                                    size: "sm",
                                }),
                                "px-4"
                            )}
                        >
                            Login
                        </Link>
                    </nav>
                </div>
            </header>
            <main className="flex-1">{children}</main>
            <SiteFooter className="bg-background" />
        </div>
    )
}
