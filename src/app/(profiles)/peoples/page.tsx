import { ProfileCard } from "@/components/profile-card"

export default async function Peoples() {
    return (
        <div className="3xl:grid-cols-5 grid grid-cols-1 place-items-center items-center justify-center gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            <ProfileCard name="Sayan Chakroborty" lang="java" />
            <ProfileCard name="Rohan Sen" lang="typescript" />
            <ProfileCard name="Sandip Mandal" lang="cpp" />
            <ProfileCard name="Ritankar Saha" lang="c" />
            <ProfileCard name="Shreyansh Yadav" lang="c" />
            <ProfileCard name="Vaibhav Sahu" lang="cpp" />
            <ProfileCard name="Om Thorat" lang="typescript" />
        </div>
    )
}
