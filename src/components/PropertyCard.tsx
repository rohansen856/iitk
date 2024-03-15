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
        "name":"Property Card",
        "description":"This is a property card"

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
            <Card className="w-3/5 h-4/5 bg-purple-500/10">
                <CardHeader>
                <CardTitle>{id.name}</CardTitle>
                <CardDescription>Deploy your new project in one-click.</CardDescription>
                </CardHeader>
                <CardContent className="flex">
                    <PropImage />
                    {id}
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
