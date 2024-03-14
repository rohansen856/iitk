import Image from "next/image"

import { Button } from "@/components/ui/button"

export function DashboardBar() {
    return (
        <div className="flex max-w-full items-center justify-between rounded-full border border-primary bg-zinc-800 p-2">
            <div className="flex space-x-2 border-r border-zinc-600 pr-1">
                <Button
                    className="rounded-full text-zinc-100 hover:bg-gray-600 hover:text-zinc-100"
                    size="icon"
                    variant="ghost"
                >
                    <svg
                        className=" h-6 w-6 stroke-1"
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
                        <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
                    </svg>
                    <span className="sr-only">Create a comment</span>
                </Button>
                <div className="relative">
                    <Button
                        className="relative rounded-full text-zinc-100 hover:bg-gray-600 hover:text-zinc-100"
                        size="icon"
                        variant="ghost"
                    >
                        <svg
                            className=" h-6 w-6 stroke-1"
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
                            <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
                            <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
                        </svg>
                        <span className="sr-only">Open inbox</span>
                        <span className="absolute right-2 top-2 block h-2 w-2 rounded-full bg-blue-500" />
                    </Button>
                </div>
                <Button
                    className="rounded-full text-zinc-100 hover:bg-gray-600 hover:text-zinc-100"
                    size="icon"
                    variant="ghost"
                >
                    <svg
                        className=" h-6 w-6 stroke-1"
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
                        <polygon points="12 2 2 7 12 12 22 7 12 2" />
                        <polyline points="2 17 12 22 22 17" />
                        <polyline points="2 12 12 17 22 12" />
                    </svg>
                    <span className="sr-only">Edit</span>
                </Button>
            </div>
            <div className="flex space-x-2 border-r border-zinc-600 px-3">
                <Image
                    alt=""
                    className="rounded-full border-2 border-red-500 bg-gray-500"
                    height="32"
                    src="/placeholder.svg"
                    style={{
                        aspectRatio: "32/32",
                        objectFit: "cover",
                    }}
                    width="32"
                />
                <Image
                    alt=""
                    className="rounded-full border-2 border-green-500 bg-gray-500"
                    height="32"
                    src="/placeholder.svg"
                    style={{
                        aspectRatio: "32/32",
                        objectFit: "cover",
                    }}
                    width="32"
                />
                <div className="relative">
                    <Image
                        alt=""
                        className="rounded-full border-2 border-[#666666] bg-opacity-60 bg-gradient-to-b from-gray-700 to-gray-700"
                        height="32"
                        src="/placeholder.svg"
                        style={{
                            aspectRatio: "32/32",
                            objectFit: "cover",
                        }}
                        width="32"
                    />
                    <span className="absolute left-0 top-0 flex h-full w-full items-center justify-center text-xs font-bold text-white">
                        9+
                    </span>
                </div>
            </div>
            <div className="flex items-center justify-center space-x-2 pl-1">
                <Button
                    className="rounded-full text-zinc-100 hover:bg-gray-600 hover:text-zinc-100"
                    size="icon"
                    variant="ghost"
                >
                    <svg
                        className=" h-6 w-6 stroke-1"
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
                        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                        <polyline points="16 6 12 2 8 6" />
                        <line x1="12" x2="12" y1="2" y2="15" />
                    </svg>
                    <span className="sr-only">Open share UI</span>
                </Button>
                <Button
                    className="rounded-full text-zinc-100 hover:bg-gray-600 hover:text-zinc-100"
                    size="icon"
                    variant="ghost"
                >
                    <svg
                        className=" h-6 w-6 stroke-1"
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
                        <line x1="4" x2="20" y1="12" y2="12" />
                        <line x1="4" x2="20" y1="6" y2="6" />
                        <line x1="4" x2="20" y1="18" y2="18" />
                    </svg>
                    <span className="sr-only">Open menu</span>
                </Button>
            </div>
        </div>
    )
}
