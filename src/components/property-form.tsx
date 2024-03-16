"use client"

import { useEffect, useState } from "react"
import axios from "axios"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { Button } from "./ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card"
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
                    id: Math.floor(Math.random() * 1000).toString(),
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
        <div className="flex max-h-[80vh] flex-col w-full items-center mt-8">
            <Card className="mx-[10%] bg-purple-500/10 ">
                <CardHeader>
                    <CardTitle>List a new property</CardTitle>
                    <CardDescription>
                        Complete the form to list your property on the website
                    </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col lg:flex-row gap-20 my-5 items-center">
                    <div className="grid w-full lg:w-[25vw] items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="City">City</Label>
                            <Input
                                id="City"
                                placeholder="City of your project"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="size">Size in Sq.ft</Label>
                            <Input
                                id="size"
                                placeholder="size of your project"
                                value={size}
                                onChange={(e) =>
                                    setSize(Number.parseInt(e.target.value))
                                }
                            />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="picture">Picture</Label>
                            <Input id="picture" type="file" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="Bhk">Bhk</Label>
                            <Select
                                onValueChange={(e) =>
                                    setBhk(Number.parseInt(e))
                                }
                            >
                                <SelectTrigger id="Bhk">
                                    <SelectValue placeholder="Select Number of bhk"></SelectValue>
                                </SelectTrigger>
                                <SelectContent position="popper">
                                    <SelectItem value="1bhk">1 Bhk</SelectItem>
                                    <SelectItem value="2bhk">2 Bhk</SelectItem>
                                    <SelectItem value="3bhk">3 Bhk</SelectItem>
                                    <SelectItem value="4+bhk">
                                        4+ Bhk
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="grid w-full lg:w-[25vw] items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="Rating">Rating</Label>
                            <Input
                                id="Rating"
                                placeholder="Rating in Dollars"
                                value={rating}
                                onChange={(e) =>
                                    setRating(Number.parseInt(e.target.value))
                                }
                            />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="Price">Price in $</Label>
                            <Input
                                id="Price"
                                placeholder="Price in Dollars"
                                value={price}
                                onChange={(e) =>
                                    setPrice(Number.parseInt(e.target.value))
                                }
                            />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="address">Address</Label>
                            <Input
                                id="address"
                                placeholder="Address of your property"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="panorama">Panorama</Label>
                            <Input
                                id="panorama"
                                placeholder="Panorama of your property"
                                value={panorama}
                                onChange={(e) => setPanorama(e.target.value)}
                            />
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="outline">Cancel</Button>
                    <Button onClick={postProperty}>Post</Button>
                </CardFooter>
            </Card>
        </div>
    )
}
