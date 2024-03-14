import React from "react"

const page = () => {
    return (
        <div className="my-5 flex h-full w-full flex-row justify-center gap-5 px-36">
            <div className="h-[100svh] w-[25svh] rounded-tl-lg bg-purple-400 text-center ">
                Filters
            </div>
            <div className="flex h-[100svh] w-[65svh] flex-col items-center gap-5 bg-purple-400 text-center">
                <span>property listing</span>
                <div className="flex h-[35svh] w-[35svw] items-center rounded-lg bg-purple-500 p-4">
                    <img
                        src="/house.svg"
                        alt=""
                        className="h-full w-[25svw] "
                    />
                    <div className="mx-2 flex h-full flex-col items-start">
                        <span className="text-xl">$22L-44L</span>
                        <span className="text- ">view EMI options</span>
                        <span>1080sq.ft</span>
                        <span>3 BHK</span>
                        <span>3.0k per sq.ft</span>
                        <img
                            src="/nextbutton.svg"
                            alt=""
                            className="h-[3svh] w-[3svw]"
                        />
                    </div>
                </div>
            </div>
            <div className="h-[40svh] w-[25svh] rounded-tr-lg bg-purple-400 text-center">
                More Info
            </div>
        </div>
    )
}

export default page
