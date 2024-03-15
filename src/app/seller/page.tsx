"use client"

import React, { useEffect } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { PropertyForm } from "@/components/property-form"

export function Loadmore() {
    return true
}

const Page = () => {
    const [email, setemail] = React.useState("rohansen856@gmail.com")
    const [name, setname] = React.useState("Rohan Sen")
    const [phnum, setphnum] = React.useState("")
    const router = useRouter()

    function success() {
        return toast({
            title: "Updated Successfully",
            description: "Your contact info was saved successfully",
        })
    }
    async function setDetails() {
        return
        const userId = window.localStorage.getItem("id")
        const { data } = await axios.get(`/api/user/${userId}`)
        setemail(data.email)
        setname(data.name)
        setphnum(data.phnum)
        return data
    }

    useEffect(() => {
        const res = setDetails()
        console.log(res)
    }, [])

    return (
        <div className="my-5 flex h-full w-full flex-col-reverse justify-center gap-10 px-5 lg:flex-row lg:px-36 ">
            {/* <div className="flex h-full w-full flex-col items-center gap-5 rounded-lg bg-purple-400 text-center">
                <span>Your Properties</span>
                <div className="flex h-full max-w-[95%] flex-col items-start gap-2 rounded-lg bg-purple-500 p-4 lg:flex-row ">
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
                <div className="flex h-full max-w-[95%] flex-col items-start gap-2 rounded-lg bg-purple-500 p-4 lg:flex-row ">
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
                <div className="flex h-full max-w-[95%] flex-col items-start gap-2 rounded-lg bg-purple-500 p-4 lg:flex-row ">
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
                <div className="flex h-full max-w-[95%] flex-col items-start gap-2 rounded-lg bg-purple-500 p-4 lg:flex-row ">
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
            </div> */}
            <div className="flex h-full w-full flex-col gap-4">
                <PropertyForm />
            </div>
        </div>
    )
}

export default Page
