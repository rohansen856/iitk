import React from "react"

import { Button } from "@/components/ui/button"

export function Loadmore() {
    return true
}

const page = () => {
    return (
        <div className="my-5 flex h-full w-full flex-col lg:flex-row justify-center gap-5 px-12 lg:px-36 ">
            <div className="h-[300px] w-full lg:h-[100svh] lg:w-[45svw] rounded-t-lg lg:rounded-tr-none bg-purple-800/40 text-center py-3">
                Filters
            </div>
            <div className="flex h-full w-full flex-col items-center gap-5 bg-purple-800/40 text-center">
                <span>Property listings</span>
                <div className="flex flex-col lg:flex-row h-full max-w-[95%] items-start gap-2 rounded-lg bg-purple-500/50 p-4 ">
                    <img
                        src="/house.svg"
                        alt=""
                        className="h-full w-[50svw]"
                    />
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
                <div className="flex flex-col lg:flex-row h-full max-w-[95%] items-start gap-2 rounded-lg bg-purple-500/50 p-4 ">
                    <img
                        src="/house.svg"
                        alt=""
                        className="h-full w-[50svw]"
                    />
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
                </div><div className="flex flex-col lg:flex-row h-full max-w-[95%] items-start gap-2 rounded-lg bg-purple-500/50 p-4 ">
                    <img
                        src="/house.svg"
                        alt=""
                        className="h-full w-[50svw]"
                    />
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
                </div><div className="flex flex-col lg:flex-row h-full max-w-[95%] items-start gap-2 rounded-lg bg-purple-500/50 p-4 ">
                    <img
                        src="/house.svg"
                        alt=""
                        className="h-full w-[50svw]"
                    />
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
            <div className="h-[40svh] w-[60svh] hidden lg:block rounded-tr-lg bg-purple-800/40 text-center">
                More Info
            </div>
        </div>
    )
}

export default page
