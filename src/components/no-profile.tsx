import { Button } from "@/components/ui/button"

export function NoProfile() {
    return (
        <div className="mt-3 flex w-full flex-1 bg-blue-700">
            <div className="m-auto flex flex-col items-center space-y-5 rounded-md bg-secondary px-12 py-4">
                <p className="3xl:text-3xl text-md rounded-md bg-secondary text-destructive lg:text-xl">
                    Not Built Yet
                </p>
                <Button className="">Start Building</Button>
            </div>
        </div>
    )
}
