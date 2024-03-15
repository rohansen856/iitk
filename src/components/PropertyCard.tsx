'use client';

import anime from "animejs"
import { useEffect, useRef } from "react"
import { usePathname } from 'next/navigation'
import { Button } from "./ui/button";
import { Card, CardContent,CardDescription,CardHeader,CardTitle,CardFooter } from "./ui/card";
import PropImage from "./PropImage";


// interface property{
//     "id":string
// }

export default function PropertyCard() {
    const h1 = useRef(null);
    const id = usePathname().split("/").pop();

    const prop = {
        "id":id,
        "name":"Cozy Mansion",
        "description":"The perfect retirement Home!"
    }

    useEffect(()=> {
        const animation = anime({
            targets: [h1.current],
            opacity: [0, 1],
            translateY: [100, 0],
            duration: 600,
            delay: anime.stagger(100),
            easing: "easeOutQuad",
          });
      })
    return (
        <>
            <div className="flex h-[80vh] flex-col w-full items-center justify-center" ref={h1}>
            <Card className="w-3/5  bg-purple-500/10">
                <CardHeader>
                <CardTitle>{prop.name}</CardTitle>
                <CardDescription>{prop.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex gap-20 my-5">
                    <PropImage />
                    <div className="flex flex-col w-[40%] gap-4">
                        <div className="flex flex-col lg:items-start">
                            <span className="text font-mon-b">Pricing</span>
                            <span className="text-2xl font-mon-b">$22L-44L</span>
                            <span className="text-xs">view EMI options</span>
                        </div>
                        <div className="flex flex-col lg:items-start">
                            <span className="text font-mon-b">Location</span>
                            <span className="text-xl">Kanpur</span>
                            <span>IIT road</span>
                        </div>
                        <div className="flex flex-col lg:items-start">
                            <span className="text font-mon-b">Area</span>
                            <span className="text-xl">1080sq.ft</span>
                            <span>3 BHK</span>
                        </div>
                        <div className="flex flex-col lg:items-start">
                            <span className="text font-mon-b">Amenities</span>
                            <span className="text-xl">Hospitals, Schools within 2 kms</span>
                            <span>The surroundings are generally peaceful the </span>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button>Deploy</Button>
                </CardFooter>
            </Card>
            </div>
        </>
    )
}
