"use client"

import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import anime from "animejs"
import { Club, School2 } from "lucide-react"

import PropImage from "./PropImage"
import { Button } from "./ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card"

// interface property{
//     "id":string
// }

export default function PropertyCard() {
    const h1 = useRef(null)
    const id = usePathname().split("/").pop()

    const prop = {
        id: id,
        name: "Cozy Mansion",
        description: "The perfect retirement Home!",
    }

    useEffect(() => {
        const animation = anime({
            targets: [h1.current],
            opacity: [0, 1],
            translateY: [100, 0],
            duration: 600,
            delay: anime.stagger(100),
            easing: "easeOutQuad",
        })
    })
    return (
        <>
            <div
                className="flex max-h-[80vh] flex-col w-full items-center"
                ref={h1}
            >
                <Card className="mx-[10%] bg-purple-500/10 ">
                    <CardHeader>
                        <CardTitle>{prop.name}</CardTitle>
                        <CardDescription>{prop.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col lg:flex-row gap-20 my-5 items-center">
                        <PropImage />
                        <div className="flex flex-col gap-4 outline-1 outline-dashed rounded-md p-5">
                            <div className="flex flex-col lg:items-start relative">
                                <span className="text font-mon-b">Pricing</span>
                                <span className="text-2xl font-mon-b">
                                    $22L-44L
                                </span>
                                <span className="text-xs">
                                    view EMI options
                                </span>
                                <div className="flex absolute right-0 flex-col top-6">
                                    <span className="text-green-400 text-xs">
                                        +12%
                                    </span>
                                    <span className="text-xs">
                                        In last 90 days
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-row gap-5">
                                <div className="flex h-full flex-col lg:items-start pr-2 border-white border-r">
                                    <span className="text font-mon-b">
                                        Location
                                    </span>
                                    <span className="text-xl">Kanpur</span>
                                    <span>IIT road</span>
                                </div>
                                <div className="flex h-full flex-col lg:items-start pr-2 border-white border-r">
                                    <span className="text font-mon-b">
                                        Area
                                    </span>
                                    <span className="text-xl">1080sq.ft</span>
                                    <span>3 BHK</span>
                                </div>
                                <div className="flex h-full flex-col lg:items-start border-r">
                                    <span className="text font-mon-b">
                                        listed
                                    </span>
                                    <span className="text-xl">2 dec 2023</span>
                                    <span>by SomeGuy</span>
                                </div>
                            </div>
                            <div className="flex flex-col lg:items-start">
                                <span className="text font-mon-b">
                                    Amenities
                                </span>
                                <div className="flex gap-4">
                                    {/* <Hospital className="mt-2" /> */}
                                    <School2 className="mt-2" />
                                    <Club className="mt-2" />
                                </div>
                                {/* <span className="text-xl">Hospitals, Schools within 2 kms.</span> */}
                                {/* <span>24/7 water supply, power backup</span> */}
                                {/* <span>The atmosphere is lively, fostering social interaction and personal growth. Facilities are accessible, promoting convenience and ease of living.</span> */}
                            </div>
                            <div className="flex flex-col lg:items-start">
                                <span className="text font-mon-b">
                                    Description
                                </span>
                                {/* <span className="text-xl">Hospitals, Schools within 2 kms.</span> */}
                                {/* <span>24/7 water supply, power backup</span> */}
                                <span>
                                    The atmosphere is lively, fostering social
                                    interaction and personal growth. Facilities
                                    are accessible, promoting convenience and
                                    ease of living.
                                </span>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button variant="outline">Cancel</Button>
                        <Button>Contact</Button>
                    </CardFooter>
                </Card>
            </div>
        </>
    )
}
