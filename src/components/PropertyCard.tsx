"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
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
    const properties = [
        {
            id: 1,
            name: "Cozy Mansion",
            price: "22L-44L",
            city: "Kanpur",
            seller: "RCSen",
            size: 1080,
            description: "The perfect retirement Home!",
            longDesc:
                "The atmosphere is lively, fostering social interaction and personal growth. Facilities are accessible, promoting convenience and ease of living.",
            pano: "/pano (1).jpg",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114312.51528009173!2d80.25598103996941!3d26.44715007162656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c4770b127c46f%3A0x1778302a9fbe7b41!2sKanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1710504808525!5m2!1sen!2sin",
        },
        {
            id: 2,
            name: "Luxury Villa",
            price: "80L-1.2Cr",
            city: "Mumbai",
            seller: "LuxEstate",
            size: 2500,
            description: "Exquisite living at its finest!",
            longDesc:
                "Indulge in luxury with breathtaking views, top-notch amenities, and unparalleled comfort. Experience opulence like never before.",
            pano: "/pano (2).jpg",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.54004883842!2d77.04417347155065!3d28.52725273882469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1710504987437!5m2!1sen!2sin",
        },
        {
            id: 3,
            name: "Quaint Cottage",
            price: "15L-30L",
            city: "Shimla",
            seller: "NatureHaven",
            size: 800,
            description: "Escape to serenity amidst nature!",
            longDesc:
                "Embrace the tranquility of nature with this charming cottage. Surrounded by lush greenery and majestic mountains, it's an idyllic retreat for those seeking peace and relaxation.",

            pano: "/pano (3).jpg",
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3812153.9041600493!2d71.07362921622213!3d18.820144128111238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2zTXVtYmFpIOCkruClgeCkguCkrOCkiA!5e0!3m2!1sen!2sin!4v1710505128602!5m2!1sen!2sin",
        },
    ]

    let prop = properties[0]
    if (id === "098") {
        prop = properties[1]
    } else if (id === "110") {
        prop = properties[2]
    }

    const [loggedin, setloggedin] = useState(false)


    useEffect(() => {
        // const viewer = new Viewer({
        //     container: pan.current,
        //     panorama: 'pano (1).jpg',
        // });
        const animation = anime({
            targets: [h1.current],
            opacity: [0, 1],
            translateY: [100, 0],
            duration: 600,
            delay: anime.stagger(100),
            easing: "easeOutQuad",
        })

        setloggedin(window.localStorage.getItem("auth") === "ok")
    })
    return (
        <>
            <div
                className="flex max-h-[80vh] flex-col w-full items-center mt-8"
                ref={h1}
            >
                <Card className="mx-[10%] bg-purple-500/10 ">
                    <CardHeader>
                        <CardTitle>{prop.name}</CardTitle>
                        <CardDescription>{prop.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-20 my-5 items-center">
                        <div className="flex flex-col lg:flex-row gap-20 my-5 items-center">
                            <PropImage nums={[]} />
                            <div className="flex flex-col gap-4 outline-1 outline-dashed rounded-md p-5">
                                <div className="flex flex-col lg:items-start relative">
                                    <span className="text font-mon-b">
                                        Pricing
                                    </span>
                                    <span className="text-2xl font-mon-b">
                                        ${prop.price}
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
                                        <span className="text-xl">
                                            {prop.city}
                                        </span>
                                        <span>IIT road</span>
                                    </div>
                                    <div className="flex h-full flex-col lg:items-start pr-2 border-white border-r">
                                        <span className="text font-mon-b">
                                            Area
                                        </span>
                                        <span className="text-xl">
                                            {prop.size}sq.ft
                                        </span>
                                        <span>3 BHK</span>
                                    </div>
                                    <div className="flex h-full flex-col lg:items-start border-r">
                                        <span className="text font-mon-b">
                                            listed
                                        </span>
                                        <span className="text-xl">
                                            2 dec 2023
                                        </span>
                                        <span>by {prop.seller}</span>
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
                                    <span>{prop.longDesc}</span>
                                </div>
                            </div>
                        </div>
                        <div>
                        <iframe width="600" height="450" allowFullScreen="true" allow="accelerometer; magnetometer; gyroscope" className="object-contain border hover:border-blue-700 rounded-lg" src="https://panoraven.com/fr/embed/paY2wIlpsQ"></iframe>
                            {/* <div ref={pan} className="w-full h-[450px] object-contain border hover:border-blue-700 rounded-lg"></div> */}
                            {/* <img
                                src={prop.pano}
                                alt=""
                                className="w-full h-[450px] object-contain border hover:border-blue-700 rounded-lg"
                            /> */}
                        </div>
                        <div className="google-map-code">
                            <iframe
                                src={prop.map}
                                width="600"
                                height="450"
                                frameBorder="0"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                aria-hidden="false"
                                tabIndex={0}
                            />
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button variant="outline">Cancel</Button>
                        <Link href={"mailto:rohansen856@gmail.com"}>
                            <Button>Contact</Button>
                        </Link>
                    </CardFooter>
                </Card>
            </div>
        </>
    )
}
