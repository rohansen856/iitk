import { Inter as FontSans } from "next/font/google"
import { Montserrat } from "next/font/google"
import localFont from "next/font/local"

import "@/styles/globals.css"

import { siteConfig } from "@/config/site"
import { absoluteUrl, cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from "@/components/analytics"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
})

// Font files can be colocated inside of `pages`
const fontHeading = localFont({
    src: "../assets/fonts/CalSans-SemiBold.woff2",
    variable: "--font-heading",
})

const fontMontserratr = Montserrat({
    subsets: ["latin"],
    variable: "--font-montserrat",
    weight: "400"
})

const fontMontserratb = Montserrat({
    subsets: ["latin"],
    variable: "--font-montserratb",
    weight: "700"
})

interface RootLayoutProps {
    children: React.ReactNode
}

export const viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
        { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
}

export const metadata = {
    title: {
        default: siteConfig.name,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Server Components",
        "Radix UI",
    ],
    authors: [
        {
            name: "rcsen",
            url: "https://rcsen.com",
        },
    ],
    creator: "rcsen",
    metadataBase: new URL(siteConfig.url),
    openGraph: {
        type: "website",
        locale: "en_US",
        url: siteConfig.url,
        title: siteConfig.name,
        description: siteConfig.description,
        siteName: siteConfig.name,
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.name,
        description: siteConfig.description,
        images: [`${siteConfig.url}/og.jpg`],
        creator: "@rcsen",
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
    },
    manifest: `${siteConfig.url}/site.webmanifest`,
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en" suppressHydrationWarning className={`${fontMontserratb.variable} ${fontMontserratr.variable}`}>
            <head>
            </head>
            <body
                className={cn(
                    "min-h-screen bg-background font-sans antialiased",
                    fontSans.variable,
                    fontHeading.variable
                )}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                >
                    {children}
                    <Analytics />
                    <Toaster />
                    <TailwindIndicator />
                </ThemeProvider>
            </body>
        </html>
    )
}
