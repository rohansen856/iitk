import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default async function IndexPage() {
    return (
        <>
            <div className="flex h-[80vh] w-full justify-center items-center">
                <div className="w-2/5 relative flex items-center justify-center">
                <Input className="py-6 rounded-full bg-white/80 focus-visible:outline-purple-400 focus-visible:outline-2 focus-visible:border-none" type="text" placeholder="Search" />
                <Button variant={"ghost"} className="hover:bg-transparent absolute right-0 rounded-full hover:scale-125 transition-all duration-150" type="submit"><Search color="black" /></Button>
                </div>
            </div>
        </>
    )
}
