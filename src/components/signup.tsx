"use client"

import * as React from "react"
import { redirect, useRouter, useSearchParams } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { signIn } from "next-auth/react"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { absoluteUrl, cn } from "@/lib/utils"
import { insertUserSchema } from "@/lib/validation"
import { Button, buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"
import { Icons } from "@/components/icons"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

type FormData = z.infer<typeof insertUserSchema>

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
    const [id, setid] = React.useState(
        Math.floor(Math.random() * 1000).toString()
    )
    const [email, setemail] = React.useState("")
    const [name, setname] = React.useState("")
    const [type, settype] = React.useState<"buyer" | "seller">("buyer")
    const [image, setimage] = React.useState("/download.png")
    const [isLoading, setIsLoading] = React.useState<boolean>(false)
    const [isGitHubLoading, setIsGitHubLoading] = React.useState<boolean>(false)
    const searchParams = useSearchParams()
    const router = useRouter()

    async function signup() {
        setIsLoading(true)

        if (!email.endsWith("@gmail.com")) {
            return toast({
                title: "Invalid email address.",
                description: "Please enter a valid email address.",
                variant: "destructive",
            })
        }

        const signInResult = await axios.post("/api/user", {
            data: { id, email, name, type, image },
        })

        setIsLoading(false)

        if (signInResult.status !== 200) {
            return toast({
                title: "Something went wrong.",
                description: "Your sign in request failed. Please try again.",
                variant: "destructive",
            })
        }
        window.localStorage.setItem("id", id)
        return router.push(`/buyer`)
    }

    return (
        <div className={cn("grid gap-6", className)} {...props}>
            <div className="relative">
                <div className="w-ful">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                        placeholder="enter your email id"
                    />
                </div>
                <div className="w-ful">
                    <Label htmlFor="password">password</Label>
                    <Input placeholder="enter password" />
                </div>
                <div className="w-ful">
                    <Label htmlFor="name">name</Label>
                    <Input
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                        placeholder="enter your name id"
                    />
                </div>
                <div className="w-ful">
                    <Label htmlFor="type">type</Label>
                    <Input
                        value={type}
                        onChange={(e) =>
                            settype(e.target.value as "buyer" | "seller")
                        }
                        placeholder="buyer or seller"
                    />
                </div>
                <Button className="mt-6 w-full" onClick={signup}>
                    {isLoading ? "Loading..." : "Sign Up"}
                </Button>
            </div>
        </div>
    )
}
