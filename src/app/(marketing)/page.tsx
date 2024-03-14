import Image from "next/image"
import Link from "next/link"

import { absoluteUrl, cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { SideNav } from "@/components/side-nav"
import { TypeWriter } from "@/components/type-writer"

export default async function IndexPage() {
    return (
        <>
            <div className="fixed z-[-20] flex h-[80vh] w-full">
                <SideNav />
                <div className="relative flex h-full w-full">
                    <Image
                        src="/mask.png"
                        alt="hecker"
                        className="m-auto opacity-10"
                        width={450}
                        height={450}
                        priority
                    />
                </div>
            </div>
            <section className="flex min-h-screen w-full flex-col items-center overflow-hidden pl-0 pt-24 md:pl-[150px] md:pt-20">
                <div className="flex flex-col items-center space-y-6">
                    <h1 className="animate-gradient bg-clip-text text-center font-heading text-4xl text-transparent sm:text-5xl md:text-6xl xl:text-7xl">
                        The &nbsp;Heckers&nbsp;of&nbsp;IIITDMJ
                    </h1>
                    <h2 className="h-16 max-w-[42rem] bg-clip-text text-2xl leading-normal text-muted-foreground sm:text-3xl sm:leading-8 md:text-3xl lg:text-3xl">
                        <TypeWriter />
                    </h2>
                </div>
                <Link
                    href={absoluteUrl("/peoples")}
                    className={cn(
                        buttonVariants({ size: "lg" }),
                        "mt-32 rounded bg-primary text-xl"
                    )}
                >
                    Profile
                </Link>
            </section>
        </>
    )
}
