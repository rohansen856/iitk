import { DashboardCard } from "@/components/dashboard-cards"

interface DashboardInfoProps {
    id: string
}

export async function DashboardInfo({ id }: DashboardInfoProps) {
    return (
        <div className="mt-5 flex h-auto w-full flex-wrap justify-center gap-4">
            <DashboardCard page="Profile" id={id} />
            <DashboardCard page="Home" id={id} />
            <DashboardCard page="Timeline" id={id} />
            <DashboardCard page="Contact" id={id} />
        </div>
    )
}
