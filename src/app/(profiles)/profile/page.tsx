import { Home } from "@/components/profile/home-1"
import { Skills } from "@/components/profile/skills-1"
import { Timeline } from "@/components/profile/timeline-1"

export default async function ProfilePage() {
    return (
        <div className="h-auto w-full overflow-x-hidden">
            <Home
                name="sandip"
                job="CPP Developer"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quis necessitatibus aut nihil a eum blanditiis accusamus dolorum harum dolorem?"
                image="/sandip.jpeg"
            />
            <Timeline />
            <Skills
                skills={["typescript", "javascript", "java", "react", "cpp"]}
            />
        </div>
    )
}
