"use client"

import React, { useEffect } from "react"
import axios from "axios"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"

export function Loadmore() {
    return true
}

const Page = () => {
    const [email, setemail] = React.useState("rohansen856@gmail.com")
    const [name, setname] = React.useState("Rohan Sen")
    const [phnum, setphnum] = React.useState("")

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
        <div className="my-5 flex h-full w-full flex-row justify-center gap-5 px-36">
            <div className="flex h-full w-[65svh] flex-col items-center gap-5 bg-purple-400 text-center">
                <span className="text-lg md:text-xl lg:text-2xl 2xl:text-4xl">
                    Your Properties
                </span>
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
            <div className="h-[400px] w-[350px] rounded-tr-lg bg-purple-400 text-center border rounded-lg flex flex-col gap-4 p-4">
                <span className="text-lg lg:text-2xl">Seller Details</span>
                <div className="flex flex-col items-start">
                    <span>Email</span>
                    <Input value={email} disabled className="mb-6" />
                    <span>Name</span>
                    <Input value={name} disabled className="mb-6" />
                    <span>Contact</span>
                    <Input
                        value={phnum}
                        onChange={(e) => setphnum(e.target.value)}
                        type="number"
                        className="mb-6 bg-secondary"
                    />
                    <Button className="w-full mt-4 mb-10" onClick={success}>
                        Update
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Page
