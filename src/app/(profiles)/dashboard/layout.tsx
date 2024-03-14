import { redirect } from "next/navigation"

import { marketingConfig } from "@/config/marketing"
import { auth, signOut } from "@/lib/auth"
import { absoluteUrl } from "@/lib/utils"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { UserAccountNav } from "@/components/user-account-nav"

interface MarketingLayoutProps {
    children: React.ReactNode
}

export default async function MarketingLayout({
    children,
}: MarketingLayoutProps) {
    const session = await auth()
    if (!session?.user || !session.user.email)
        return redirect(absoluteUrl("/login"))

    return (
        <div className="flex min-h-screen flex-col">
            <header className="container z-40 bg-background">
                <div className="flex h-20 items-center justify-between py-6">
                    <MainNav items={marketingConfig.mainNav} />

                    <UserAccountNav
                        user={{
                            name: session.user.name as string,
                            email: session.user.email as string,
                            image: session.user.image as string,
                        }}
                        logout={async () => {
                            "use server"
                            signOut({ redirectTo: absoluteUrl("/") })
                        }}
                    />
                </div>
            </header>
            <main className="flex-1">{children}</main>
            <SiteFooter className="bg-background" />
        </div>
    )
}
