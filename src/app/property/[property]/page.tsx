
import PropertyCard from "@/components/PropertyCard"
import anime from "animejs"
import { useEffect, useRef } from "react"

export default async function IndexPage() {
    // const h1 = useRef(null);

    // useEffect(()=> {
    //     const animation = anime({
    //         targets: [h1.current],
    //         opacity: [0, 1],
    //         translateY: [100, 0],
    //         duration: 600,
    //         delay: anime.stagger(100),
    //         easing: "easeOutQuad",
    //       });
    //   })
    return (
        <>
        <PropertyCard />
        </>
    )
}
