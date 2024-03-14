import { redirect } from "next/navigation"
import { HomeDataProps } from "@/types"
import axios from "axios"

import { auth } from "@/lib/auth"
import { absoluteUrl } from "@/lib/utils"
import { Home } from "@/components/profile/home-1"

import { ProfileForm } from "./profile-form"

async function homeData(id: string): HomeDataProps {
    const { data } = await axios.get(absoluteUrl(`/api/profile/home/${id}`))
    return data
}

export default async function SettingsProfilePage() {
    const session = await auth()
    if (!session?.user || !session.user.id)
        return redirect(absoluteUrl("/login"))

    const data = await homeData(session.user.id)

    return (
        <div className="flex w-full flex-col items-center justify-center">
            <div>
                <ProfileForm id={session.user.id} data={data} />
            </div>
            <div className="m-2 w-full border border-secondary">
                <Home
                    description={
                        data.bio ||
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ullam vero tempore aspernatur assumenda, laboriosam alias ad quisquam veniam quibusdam."
                    }
                    image={data.image || "/sandip.jpeg"}
                    job={data.mainSkill || "none"}
                    name={data.name || "*your name*"}
                />
            </div>
        </div>
    )
}
