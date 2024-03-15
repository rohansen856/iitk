"use client";

import SearchDropdown from "@/components/Search"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import anime from "animejs"
import { useEffect, useRef } from "react"

const options = [
    { value: "1", label: "Mumbai" },
    { value: "2", label: "Madrid" },
    { value: "3", label: "Melbourne" },
    { value: "4", label: "Moscow" },
    { value: "5", label: "Manila" },
    { value: "6", label: "Kolkata" },
    { value: "7", label: "Karachi" },
    { value: "8", label: "Kanpur" },
    { value: "9", label: "Kyoto" },
    { value: "10", label: "Kansas City" },
]

export default async function IndexPage() {
    const inp = useRef(null);
    const desc = useRef(null);
    const h1 = useRef(null);
    useEffect(()=> {
        const animation = anime({
            targets: [h1.current,desc.current,inp.current],
            opacity: [0, 1],
            translateY: [100, 0],
            duration: 600,
            delay: anime.stagger(100),
            easing: "easeOutQuad",
          });
      })
    return (
        <>
            <div className="flex h-[80vh] flex-col w-full items-center">
                <h1 className="mt-[25svh] max-md:mt-[10svh] text-7xl font-mon-b z-0" ref={h1}>Homely</h1>
                <span className="font-mon-r text-xl z-10 mb-8 mt-2 text-purple-300" ref={desc}>find your next and forever home.</span>       
                <div className="w-2/5 relative flex items-center justify-center z-20" ref={inp}>
                <SearchDropdown options={options} />
                </div>        
            </div>
        </>
    )
}
