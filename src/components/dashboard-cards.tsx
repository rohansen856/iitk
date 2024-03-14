import Link from "next/link"

import { absoluteUrl, cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"

async function fetchData(page: string, id: string) {
    return await fetch(absoluteUrl(`/${page.toLowerCase()}/${id}`), {
        method: "GET",
    })
}

interface DashboardCardprops {
    page: string
    id: string | undefined
}

export async function DashboardCard({ page, id }: DashboardCardprops) {
    let active = false
    const data = await fetchData(page, id as string)
    if (data.ok) active = true

    return (
        <div className="h-[150px] w-[350px] rounded-md border border-primary bg-secondary hover:scale-105">
            <div className="h-full w-full p-4">
                <h1 className="mx-2 text-2xl">{page}</h1>

                {active ? (
                    <div className="mt-6 flex w-full justify-around bg-muted py-2">
                        <Button className="mx-2 flex-1 text-lg">Visit</Button>
                        <Button className="mx-2 flex-1 text-lg">Modify</Button>
                    </div>
                ) : (
                    <div className="mt-2 flex w-full flex-col items-center bg-muted py-2">
                        <h3 className="text-md text-red-800">Not Built Yet</h3>
                        <Link
                            className={cn(
                                buttonVariants({ variant: "destructive" }),
                                "w-full rounded-md text-lg"
                            )}
                            href={absoluteUrl(
                                `/dashboard/${page.toLowerCase()}`
                            )}
                        >
                            Build
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}
