interface RoadmapListProps {
    feature: string
    status: string
    difficulty: string
}

export function RoadmapList({ feature, status, difficulty }: RoadmapListProps) {
    return (
        <li className="flex items-center justify-between rounded-lg bg-white p-4 shadow-md dark:bg-zinc-800">
            <div className="flex items-center gap-4">
                <span className="h-5 w-5 rounded-full bg-blue-700"></span>
                <svg
                    className=" h-6 w-6 text-green-500 dark:text-green-400"
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
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <div>
                    <h2 className="text-xl font-medium">Design UI</h2>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                        Completed on 1st Jan 2023
                    </p>
                </div>
            </div>
            <span className="rounded-lg bg-zinc-100 px-2 py-1 text-sm font-medium dark:bg-zinc-800">
                Easy
            </span>
        </li>
    )
}
