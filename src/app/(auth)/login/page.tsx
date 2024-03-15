import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"

import { login, signup } from "./actions"

export default function PropertyForm() {
    return (
        <form className="flex h-screen flex-col w-full m-auto justify-center items-center">
            <div className="absolute w-full h-full -z-10">
                <div className="relative h-full w-full bg-slate-950">
                    {/* eslint-disable-next-line tailwindcss/no-contradicting-classname */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:35px_35px]"></div>
                </div>
            </div>
            <Card className="mx-[10%] bg-purple-500/10">
                <CardHeader>
                    <CardTitle>Login</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-row lg:flex-row gap-20 my-5 items-center">
                    <div className="grid w-[25vw] items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                required
                                placeholder="Email"
                            />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                required
                                placeholder="Password"
                            />
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between flex-col gap-16 ">
                    <div className="w-full">
                        <Button formAction={login} className="w-full">
                            Login
                        </Button>
                        <div className="w-full flex flex-row gap-5">
                            <div className="h-0.5  bg-slate-600 my-3 w-[60%]"></div>
                            <span className="justify-center">or</span>
                            <div className="h-0.5 bg-slate-600 my-3 w-[60%]"></div>
                        </div>
                        <Button formAction={signup} className="w-full">
                            Sign Up
                        </Button>
                    </div>
                    <Button formAction={signup} className="w-full gap-2">
                        {" "}
                        <img
                            src="/googleloginimg.png"
                            alt=""
                            className="h-full"
                        />{" "}
                        Sign in with google
                    </Button>
                </CardFooter>
            </Card>
        </form>
    )
}
