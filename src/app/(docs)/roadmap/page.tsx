import { RoadmapList } from "@/components/roadmap-item"

const items = [
    {
        feature: "Design UI",
        status: "Completed on 1st Jan 2023",
        difficulty: "Easy",
    },
    {
        feature: "Design UI",
        status: "Completed on 1st Jan 2023",
        difficulty: "Easy",
    },
    {
        feature: "Design UI",
        status: "Completed on 1st Jan 2023",
        difficulty: "Easy",
    },
    {
        feature: "Design UI",
        status: "Completed on 1st Jan 2023",
        difficulty: "Easy",
    },
    {
        feature: "Design UI",
        status: "Completed on 1st Jan 2023",
        difficulty: "Easy",
    },
]

export default async function Component() {
    return (
        <div className="flex min-h-screen w-full flex-col p-4 md:p-6 lg:p-8">
            <h1 className="mb-4 text-3xl font-bold">Roadmap</h1>
            {items ? (
                <ul className="relative grid gap-4">
                    <div className="absolute left-6 mt-8 h-[calc(100%+2rem)] w-1 bg-blue-700"></div>
                    {items.map((i) => (
                        <RoadmapList
                            key={i.feature}
                            feature={i.feature}
                            status={i.status}
                            difficulty={i.difficulty}
                        />
                    ))}
                </ul>
            ) : (
                ""
            )}
            <div className="mt-4 flex items-center justify-between rounded-lg bg-white p-4 shadow-md dark:bg-zinc-800">
                <div className="flex items-center gap-4">
                    <span className="h-5 w-5 rounded-full bg-blue-700"></span>
                    <svg
                        className=" h-6 w-6 text-red-500 dark:text-red-400"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="12" cy="12" r="10" />
                        <path d="m15 9-6 6" />
                        <path d="m9 9 6 6" />
                    </svg>
                    <div>
                        <h2 className="text-xl font-medium">Deploy</h2>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">
                            To be completed on 30th Jan 2023
                        </p>
                    </div>
                </div>
                <span className="rounded-lg bg-zinc-100 px-2 py-1 text-sm font-medium dark:bg-zinc-800">
                    Hard
                </span>
            </div>
        </div>
    )
}
