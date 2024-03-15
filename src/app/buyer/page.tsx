import React from "react"

import { Button } from "@/components/ui/button"

export function Loadmore() {
    return true
}

const page = () => {
    return (
        <div className="my-5 flex h-full w-full flex-col justify-center gap-5 px-12 lg:flex-row lg:px-36">
            <div className="h-[300px] w-full rounded-t-lg bg-purple-800/40 text-center lg:h-[100svh] lg:w-[45svw] lg:rounded-tr-none py-2 ">
                Filters
            </div>
            <div className="flex h-full w-full flex-col items-center gap-5 bg-purple-800/40 text-center py-2">
                <span>property listing</span>
                <div className="flex h-full max-w-[95%] flex-col items-start gap-2 rounded-lg bg-purple-600/60 p-4 lg:flex-row ">
                    <img src="/house.svg" alt="" className="h-full w-[50svw]" />
                    <div className="flex h-full w-full flex-col gap-8">
                        <div className="flex flex-col lg:items-end">
                            <span className="text-2xl">$22L-44L</span>
                            <span className="text-xs">view EMI options</span>
                        </div>
                        <div className="flex flex-col lg:items-end">
                            <span className="text-xl">1080sq.ft</span>
                            <span>3 BHK</span>
                            <span>3.0k per sq.ft</span>
                        </div>
                    </div>
                </div>
                <div className="flex h-full max-w-[95%] flex-col items-start gap-2 rounded-lg bg-purple-600/60 p-4 lg:flex-row ">
                    <img src="/house.svg" alt="" className="h-full w-[50svw]" />
                    <div className="flex h-full w-full flex-col gap-8">
                        <div className="flex flex-col lg:items-end">
                            <span className="text-2xl">$22L-44L</span>
                            <span className="text-xs">view EMI options</span>
                        </div>
                        <div className="flex flex-col lg:items-end">
                            <span className="text-xl">1080sq.ft</span>
                            <span>3 BHK</span>
                            <span>3.0k per sq.ft</span>
                        </div>
                    </div>
                </div>
                <div className="flex h-full max-w-[95%] flex-col items-start gap-2 rounded-lg bg-purple-600/60 p-4 lg:flex-row ">
                    <img src="/house.svg" alt="" className="h-full w-[50svw]" />
                    <div className="flex h-full w-full flex-col gap-8">
                        <div className="flex flex-col lg:items-end">
                            <span className="text-2xl">$22L-44L</span>
                            <span className="text-xs">view EMI options</span>
                        </div>
                        <div className="flex flex-col lg:items-end">
                            <span className="text-xl">1080sq.ft</span>
                            <span>3 BHK</span>
                            <span>3.0k per sq.ft</span>
                        </div>
                    </div>
                </div>
                <div className="flex h-full max-w-[95%] flex-col items-start gap-2 rounded-lg bg-purple-600/60 p-4 lg:flex-row ">
                    <img src="/house.svg" alt="" className="h-full w-[50svw]" />
                    <div className="flex h-full w-full flex-col gap-8">
                        <div className="flex flex-col lg:items-end">
                            <span className="text-2xl">$22L-44L</span>
                            <span className="text-xs">view EMI options</span>
                        </div>
                        <div className="flex flex-col lg:items-end">
                            <span className="text-xl">1080sq.ft</span>
                            <span>3 BHK</span>
                            <span>3.0k per sq.ft</span>
                        </div>
                    </div>
                </div>
                <Button>Load More</Button>
            </div>
            <div className="hidden h-[40svh] w-[60svh] rounded-tr-lg bg-purple-800/40 text-center lg:block">
                More Info
            </div>
        </div>
    )
}

export default page
