import SearchDropdown from "@/components/Search"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"


const options = [
    { value: "1", label: "Option 1" },
    { value: "2", label: "hehe 2" },
    { value: "3", label: "tehe 3" },
]

export default async function IndexPage() {
    return (
        <>
            <div className="flex h-[80vh] w-full justify-center items-center">
                <SearchDropdown options={options} />
            </div>
        </>
    )
}
