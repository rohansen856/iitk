"use client"

import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { HomeDataProps } from "@/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
import axios from "axios"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { absoluteUrl, cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { UploadImageButton } from "@/components/uploadthing-button"

const skills = [
    {
        label: "C",
        value: "c",
    },
    {
        label: "C++",
        value: "cpp",
    },
    {
        label: "Java",
        value: "java",
    },
    {
        label: "Javascript",
        value: "javascript",
    },
    {
        label: "Typescript",
        value: "typescript",
    },
]

const profileFormSchema = z.object({
    name: z
        .string()
        .min(2, {
            message: "name must be at least 2 characters.",
        })
        .max(30, {
            message: "name must not be longer than 30 characters.",
        }),
    mainSkill: z.string({
        required_error: "Please select a primary skill to display.",
    }),
    secSkill: z.array(z.string()).default([]),
    bio: z.string().max(200).min(5),
    urls: z
        .array(
            z.object({
                value: z.string().url({ message: "Please enter a valid URL." }),
            })
        )
        .optional(),
})

type ProfileFormValues = z.infer<typeof profileFormSchema>

interface ProfileFormProps {
    id: string
    data: HomeDataProps
}

export function ProfileForm({ id, data }: ProfileFormProps) {
    const router = useRouter()

    const [user, setUser] = useState<Omit<HomeDataProps, "id">>({
        name: data.name || "your name",
        image: data.image,
        bio: data.bio,
        mainSkill: data.mainSkill,
        secSkills: data.secSkills,
    })

    const form = useForm<ProfileFormValues>({
        resolver: zodResolver(profileFormSchema),
        mode: "onChange",
        values: {
            name: user.name,
            bio: user.bio,
            mainSkill: user.mainSkill,
            secSkill: [],
            urls: [],
        },
    })

    async function onSubmit(data: ProfileFormValues) {
        const retData = await axios.patch(
            absoluteUrl(`/api/profile/home/${id}`),
            {
                data: { ...data, id },
            }
        )
        toast({
            title: "Success!!!",
            description: "Profile Successfully updated.",
        })
        router.refresh()
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Edit Profile</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="w-[350px] max-w-[95vh] space-y-3 px-2"
                    >
                        <div className="flex w-full">
                            <div className="relative m-auto flex h-48 w-48 cursor-pointer justify-center overflow-hidden rounded-full bg-secondary">
                                <Image src={"/sandip.jpeg"} alt="sdp" fill />
                                <UploadImageButton
                                    id={id}
                                    data={user}
                                    className="absolute z-20 place-self-end rounded-full"
                                />
                            </div>
                        </div>
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Username</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="your name"
                                            {...field}
                                            onChange={(e) =>
                                                setUser({
                                                    ...user,
                                                    name: e.target.value,
                                                })
                                            }
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        This is your public display name.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="mainSkill"
                            render={({ field }) => (
                                <FormItem className="flex flex-col">
                                    <FormLabel>Primary Skill</FormLabel>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <FormControl>
                                                <Button
                                                    variant="outline"
                                                    role="combobox"
                                                    className={cn(
                                                        "w-full justify-between",
                                                        !field.value &&
                                                            "text-muted-foreground"
                                                    )}
                                                >
                                                    {field.value
                                                        ? skills.find(
                                                              (skill) =>
                                                                  skill.value ===
                                                                  field.value
                                                          )?.label
                                                        : "Select your primary skill"}
                                                    <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                                </Button>
                                            </FormControl>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-[200px] p-0">
                                            <Command>
                                                <CommandInput placeholder="Search skill..." />
                                                <CommandEmpty>
                                                    No skill found.
                                                </CommandEmpty>
                                                <CommandGroup>
                                                    {skills.map((skill) => (
                                                        <CommandItem
                                                            value={skill.label}
                                                            key={skill.value}
                                                            onSelect={() => {
                                                                form.setValue(
                                                                    "mainSkill",
                                                                    skill.value
                                                                )
                                                                setUser({
                                                                    ...user,
                                                                    mainSkill:
                                                                        skill.value,
                                                                })
                                                            }}
                                                        >
                                                            <CheckIcon
                                                                className={cn(
                                                                    "mr-2 h-4 w-4",
                                                                    skill.value ===
                                                                        field.value
                                                                        ? "opacity-100"
                                                                        : "opacity-0"
                                                                )}
                                                            />
                                                            {skill.label}
                                                        </CommandItem>
                                                    ))}
                                                </CommandGroup>
                                            </Command>
                                        </PopoverContent>
                                    </Popover>
                                    <FormDescription>
                                        This is the primary skill that will be
                                        shown in the dashboard.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="bio"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Bio</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Tell us a little bit about yourself"
                                            className="resize-none"
                                            {...field}
                                            onChange={(e) =>
                                                setUser({
                                                    ...user,
                                                    bio: e.target.value,
                                                })
                                            }
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        You can <span>@mention</span> other
                                        users and organizations to link to them.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit">Update profile</Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}
