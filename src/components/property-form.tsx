"use client"

import { useEffect, useState } from "react"
import axios from "axios"

import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { toast } from "./ui/use-toast"

export function PropertyForm() {
    const [city, setCity] = useState("")
    const [image, setImage] = useState("")
    const [panorama, setPanorama] = useState("")
    const [address, setAddress] = useState("")
    const [bhk, setBhk] = useState(2)
    const [price, setPrice] = useState(0)
    const [size, setSize] = useState(0)
    const [rating, setRating] = useState(4)
    const [userId, setUserId] = useState<string | null>()

    useEffect(() => {
        setUserId(localStorage.getItem("id"))
    }, [])

    async function postProperty() {
        try {
            const res = await axios.post("/api/property", {
                data: {
                    city,
                    image,
                    panorama,
                    address,
                    bhk,
                    rating,
                    price,
                    size,
                    userId,
                },
            })
            if (res.status === 200)
                return toast({
                    title: "Creation Successful.",
                    description: "The propeerty was added successfully.",
                    variant: "default",
                })
        } catch (e) {
            if (!userId || userId.toString().length <= 2) {
                return toast({
                    title: "Please login.",
                    description: "Please login or signup to continue",
                    variant: "destructive",
                })
            } else {
                return toast({
                    title: "Failed to create.",
                    description:
                        "There was an error adding your propery. Please try again later.",
                    variant: "destructive",
                })
            }
        }
    }

    return (
        <div className="flex w-full max-w-full flex-col items-center justify-center bg-purple-400 rounded-lg border p-3">
            <h2 className="text-lg font-bold">List New Property </h2>
            <div className="m-4 w-full space-y-2">
                <Label htmlFor="city">City</Label>
                <Input
                    id="city"
                    className="w-full"
                    placeholder="Enter City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
            </div>
            <div className="m-4 w-full space-y-2">
                <Label htmlFor="image">Image</Label>
                <div className="flex flex-row">
                <input
                    id="image"
                    className="w-full rounded-l-lg h-10 bg-black placeholder:px-3 placeholder:text-sm "
                    placeholder="Add Images"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />
                <button className="rounded-r-lg w-20 bg-black">Upload</button>
                </div>
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
            <div className="m-4 w-full space-y-2">
                <Label htmlFor="price">price</Label>
                <Input
                    id="price"
                    className="w-full"
                    placeholder="enter price"
                    value={price}
                    onChange={(e) => setPrice(Number.parseInt(e.target.value))}
                />
            </div>
            <div className="m-4 w-full space-y-2">
                <Label htmlFor="size">size</Label>
                <Input
                    id="size"
                    className="w-full"
                    placeholder="enter size"
                    value={size}
                    onChange={(e) => setSize(Number.parseInt(e.target.value))}
                />
            </div>
            <Button className="mt-2 w-full" onClick={postProperty}>
                Submit
            </Button>
        </div>
    )
}
