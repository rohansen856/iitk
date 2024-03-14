"use client"

import { useEffect, useState } from "react"
import { usePathname, useRouter } from "next/navigation"

import { absoluteUrl, cn } from "@/lib/utils"

export function DashboardSidebar() {
    const [current, setCurrent] = useState<string>("")
    const router = useRouter()
    const pathName = usePathname()

    useEffect(() => {
        router.push(absoluteUrl(`/dashboard/${current}`))
    }, [current, router])

    return (
        <section className="2xl:[w-350px] mx-2 hidden min-h-full w-0 flex-col overflow-x-hidden rounded-xl border border-secondary px-1 lg:flex lg:w-[300px]">
            <div className=" my-4 flex h-10 w-full items-center justify-center text-xl">
                Portfolio Sections
            </div>
            <div
                className={cn(
                    "my-1 flex h-10 w-full cursor-pointer items-center justify-center bg-secondary",
                    pathName === "/dashboard" ? "bg-blue-700" : ""
                )}
                onClick={() => setCurrent("")}
            >
                Dashboard
            </div>
            <div
                className={cn(
                    "my-1 flex h-10 w-full cursor-pointer items-center justify-center bg-secondary",
                    pathName === "/dashboard/home" ? "bg-blue-700" : ""
                )}
                onClick={() => setCurrent("Home")}
            >
                Home Section
            </div>
            <div
                className={cn(
                    "my-1 flex h-10 w-full cursor-pointer items-center justify-center bg-secondary",
                    pathName === "/dashboard/timeline" ? "bg-blue-700" : ""
                )}
                onClick={() => setCurrent("Timeline")}
            >
                Timeline Section
            </div>
            <div
                className={cn(
                    "my-1 flex h-10 w-full cursor-pointer items-center justify-center bg-secondary",
                    pathName === "/dashboard/skills" ? "bg-blue-700" : ""
                )}
                onClick={() => setCurrent("Skills")}
            >
                Skills Section
            </div>
            <div
                className={cn(
                    "my-1 flex h-10 w-full cursor-pointer items-center justify-center bg-secondary",
                    pathName === "/dashboard/contact" ? "bg-blue-700" : ""
                )}
                onClick={() => setCurrent("Contact")}
            >
                Contact Section
            </div>
            <div
                className="my-1 mt-16 flex h-10 w-full cursor-pointer items-center justify-center bg-secondary"
                onClick={() => setCurrent("")}
            >
                Deploy
            </div>
        </section>
    )
}
