"use client"

import { useEffect, useState } from "react"
import axios from "axios"

import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"

export function PropertyForm() {
    const [city, setCity] = useState("")
    const [image, setImage] = useState("")
    const [panorama, setPanorama] = useState("")
    const [address, setAddress] = useState("")
    const [bhk, setBhk] = useState(2)
    const [rating, setRating] = useState(4)
    const [userId, setUserId] = useState("")

    let obj = { city, image, panorama, address, bhk, rating }

    async function postProperty() {
        console.log({ city, image, panorama, address, bhk, rating, userId })
        await axios.post("/api/property", {
            data: { city, image, panorama, address, bhk, rating, userId },
        })
    }

    return (
        <div className="m-6 flex w-[500px] max-w-full flex-col items-center rounded-lg border p-3">
            <h2 className="text-lg font-bold">ADD NEW PROPERTY </h2>
            <div className="m-4 w-full space-y-2">
                <Label htmlFor="city">City</Label>
                <Input
                    id="city"
                    className="w-full"
                    placeholder="enter city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
            </div>
            <div className="m-4 w-full space-y-2">
                <Label htmlFor="image">image</Label>
                <Input
                    id="image"
                    className="w-full"
                    placeholder="enter image"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />
            </div>
            <div className="m-4 w-full space-y-2">
                <Label htmlFor="panorama">panorama</Label>
                <Input
                    id="panorama"
                    className="w-full"
                    placeholder="enter panorama"
                    value={panorama}
                    onChange={(e) => setPanorama(e.target.value)}
                />
            </div>
            <div className="m-4 w-full space-y-2">
                <Label htmlFor="address">address</Label>
                <Input
                    id="address"
                    className="w-full"
                    placeholder="enter address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
            </div>
            <div className="m-4 w-full space-y-2">
                <Label htmlFor="bhk">bhk</Label>
                <Input
                    id="bhk"
                    className="w-full"
                    placeholder="enter bhk"
                    value={bhk}
                    onChange={(e) => setBhk(Number.parseInt(e.target.value))}
                />
            </div>
            <div className="m-4 w-full space-y-2">
                <Label htmlFor="rating">rating</Label>
                <Input
                    id="rating"
                    className="w-full"
                    placeholder="enter rating"
                    value={rating}
                    onChange={(e) => setRating(Number.parseInt(e.target.value))}
                />
            </div>
            <Button className="mt-2 w-full" onClick={postProperty}>
                Submit
            </Button>
        </div>
    )
}
