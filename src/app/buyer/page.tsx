import React from "react"

import { Button } from "@/components/ui/button"

export function Loadmore() {
    return true
}

const page = () => {
    return (
        <div className="my-5 flex h-full w-full flex-row justify-center gap-5 px-36">
            <div className="h-[100svh] w-[25svh] rounded-tl-lg bg-purple-400 text-center ">
                Filters
            </div>
            <div className="flex h-full w-[65svh] flex-col items-center gap-5 bg-purple-400 text-center">
                <span>property listing</span>
                <div className="flex h-[30svh] max-w-[90%] items-center gap-2 rounded-lg bg-purple-500 p-4">
                    <img
                        src="/house.svg"
                        alt=""
                        className="h-full w-[20svw] "
                    />
                    <div className="flex h-full w-full flex-col gap-8">
                        <div className="flex flex-col">
                            <span className="text-2xl">$22L-44L</span>
                            <span className="text-xs">view EMI options</span>
                        </div>
                        <div className="flex flex-col items-end">
                            <span className="text-xl">1080sq.ft</span>
                            <span>3 BHK</span>
                            <span>3.0k per sq.ft</span>
                        </div>
                    </div>
                </div>
                <div className="flex h-[30svh] max-w-[90%] items-center gap-2 rounded-lg bg-purple-500 p-4">
                    <img
                        src="/house.svg"
                        alt=""
                        className="h-full w-[20svw] "
                    />
                    <div className="flex h-full w-full flex-col gap-8">
                        <div className="flex flex-col">
                            <span className="text-2xl">$22L-44L</span>
                            <span className="text-xs">view EMI options</span>
                        </div>
                        <div className="flex flex-col items-end">
                            <span className="text-xl">1080sq.ft</span>
                            <span>3 BHK</span>
                            <span>3.0k per sq.ft</span>
                        </div>
                    </div>
                </div>
                <div className="flex h-[30svh] max-w-[90%] items-center gap-2 rounded-lg bg-purple-500 p-4">
                    <img
                        src="/house.svg"
                        alt=""
                        className="h-full w-[20svw] "
                    />
                    <div className="flex h-full w-full flex-col gap-8">
                        <div className="flex flex-col">
                            <span className="text-2xl">$22L-44L</span>
                            <span className="text-xs">view EMI options</span>
                        </div>
                        <div className="flex flex-col items-end">
                            <span className="text-xl">1080sq.ft</span>
                            <span>3 BHK</span>
                            <span>3.0k per sq.ft</span>
                        </div>
                    </div>
                </div>

                <div className="flex h-[30svh] max-w-[90%] items-center gap-2 rounded-lg bg-purple-500 p-4">
                    <img
                        src="/house.svg"
                        alt=""
                        className="h-full w-[20svw] "
                    />
                    <div className="flex h-full w-full flex-col gap-8">
                        <div className="flex flex-col">
                            <span className="text-2xl">$22L-44L</span>
                            <span className="text-xs">view EMI options</span>
                        </div>
                        <div className="flex flex-col items-end">
                            <span className="text-xl">1080sq.ft</span>
                            <span>3 BHK</span>
                            <span>3.0k per sq.ft</span>
                        </div>
                    </div>
                </div>
                <Button>Load More</Button>
            </div>
            <div className="h-[40svh] w-[25svh] rounded-tr-lg bg-purple-400 text-center">
                More Info
            </div>
        </div>
    )
}

export default page
