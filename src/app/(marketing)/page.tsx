import SearchDropdown from "@/components/Search"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"


const options = [
    { value: "1", label: "Mumbai" },
    { value: "2", label: "Madrid" },
    { value: "3", label: "Melbourne" },
    { value: "4", label: "Moscow" },
    { value: "5", label: "Manila" },
    { value: "6", label: "Kolkata" },
    { value: "7", label: "Karachi" },
    { value: "8", label: "Kanpur" },
    { value: "9", label: "Kyoto" },
    { value: "10", label: "Kansas City" },
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
