import { redirect } from "next/navigation"
import { HomeDataProps } from "@/types"
import axios from "axios"

import { auth } from "@/lib/auth"
import { absoluteUrl } from "@/lib/utils"
import { Timeline } from "@/components/profile/timeline-1"

import { TimelineForm } from "./timeline-form"

async function homeData(id: string): HomeDataProps {
    const { data } = await axios.get(absoluteUrl(`/api/profile/home/${id}`))
    return data
}

export default async function SettingsTimelinePage() {
    const session = await auth()
    if (!session?.user || !session.user.id)
        return redirect(absoluteUrl("/login"))

    const data = await homeData(session.user.id)

    return (
        <div className="flex w-full flex-col items-center justify-center">
            <div>
                <TimelineForm id={session.user.id} data={data} />
            </div>
            <div className="m-2 w-full border border-secondary">
                <Timeline />
            </div>
        </div>
    )
}
