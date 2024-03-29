"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import anime from "animejs"
import { headers } from "next/headers"
import { useRef } from "react";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useEffect } from "react"

export function Loadmore() {
    return true
}

const Page = () => {
    const router = useRouter()
    let url:string|URL = "";
    const h1 = useRef(null)
    useEffect(() => {
        url = window.location.href;
        url = new URL(url);
        url = url.searchParams.get("city");
        h1.current.value = url;
    })
    // const headersList = headers();
    // const activePath = headersList.get("x-invoke-path");
    // console.log(activePath)
    return (
        <div className="my-5 flex h-full w-full flex-col justify-center gap-5 px-12 lg:flex-row lg:px-36">
            <div className="h-[400px] w-full rounded-t-lg bg-purple-800/20 py-2 text-center lg:h-[50svh] lg:w-[45svw] lg:rounded-tr-none max-w-[400px]">
                Filters
                <div className="w-full flex flex-col pt-8 px-2">
                    <Input placeholder="enter city name" className="my-2" value={url}ref={h1} />
                    <Input
                        placeholder="enter minimum size in sq. ft."
                        className="my-2"
                    />
                    <Input
                        placeholder="enter maximum size in sq. ft."
                        className="my-2"
                    />
                    <Select>
                        <SelectTrigger className="w-full my-2">
                            <SelectValue placeholder="Select BHK" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Select BHK</SelectLabel>
                                <SelectItem value="apple">1 BHK</SelectItem>
                                <SelectItem value="banana">2 BHK</SelectItem>
                                <SelectItem value="blueberry">3 BHK</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <Button
                        onClick={() => {
                            router.push("/property/980")
                        }}
                        className="mt-12"
                    >
                        Filter
                    </Button>
                </div>
            </div>
            <div className="flex h-full w-full flex-col items-center gap-5 bg-purple-800/20 py-2 text-center max-w-[700px]">
                <span>property listing</span>
                <Link
                    href={"/property/987"}
                    className="flex h-full max-w-[95%] flex-col items-start gap-2 rounded-lg bg-purple-600/40 p-4 lg:flex-row "
                >
                    <img src="/house1.svg" alt="" className="h-full w-[50svw]" />
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
                </Link>
                <Link
                    href={"/property/098"}
                    className="flex h-full max-w-[95%] flex-col items-start gap-2 rounded-lg bg-purple-600/40 p-4 lg:flex-row "
                >
                    <img src="/house2.svg" alt="" className="h-full w-[50svw]" />
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
                </Link>
                <Link
                    href={"/property/110"}
                    className="flex h-full max-w-[95%] flex-col items-start gap-2 rounded-lg bg-purple-600/40 p-4 lg:flex-row "
                >
                    <img src="/house3.svg" alt="" className="h-full w-[50svw]" />
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
                </Link>
                <Link
                    href={"/property/745"}
                    className="flex h-full max-w-[95%] flex-col items-start gap-2 rounded-lg bg-purple-600/40 p-4 lg:flex-row "
                >
                    <img src="/house4.svg" alt="" className="h-full w-[50svw]" />
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
                </Link>
                <Button>Load More</Button>
            </div>
        </div>
    )
}

export default Page
