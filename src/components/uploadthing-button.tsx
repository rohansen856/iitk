"use client"

import { useRouter } from "next/navigation"
import { HomeDataProps } from "@/types"
import axios from "axios"

import { UploadButton } from "@/lib/uploadthing"
import { absoluteUrl } from "@/lib/utils"
import { toast } from "@/components/ui/use-toast"

export function UploadImageButton({
    id,
    data,
    className,
}: {
    id: string
    data: HomeDataProps
    className: string
}) {
    const router = useRouter()
    async function uploadImg(data: HomeDataProps, image: string, id: string) {
        const res = await axios.patch(absoluteUrl(`/api/profile/home/${id}`), {
            data: { ...data, image, id },
        })
        res.status < 300 && router.refresh()
    }
    return (
        <UploadButton
            className={className}
            endpoint="imageUploader"
            onClientUploadComplete={async (res) => {
                await uploadImg(data, res[0].url, id)
                toast({
                    title: "Success!!!",
                    description: "Profile Successfully updated.",
                })
            }}
            onUploadError={(error: Error) => {
                console.log(error)
                toast({
                    title: "Upload Failed!",
                    description: "Sorry there was an error.",
                })
            }}
            appearance={{
                button: "bg-secondary",
                container: "bg-transparent",
            }}
        />
    )
}
