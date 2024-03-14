import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export function RecentViews() {
    let views:string[] =  ["hi","u","j","l"];
    let totviews = [];
    for(let i=0;i<views.length;i++){
        totviews.push(<div className="flex items-center">
        <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
            <AvatarImage src="/avatars/02.png" alt="Avatar" />
            <AvatarFallback>JL</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">
                {views[i]}
            </p>
            <p className="text-sm text-muted-foreground">
                {views[i]}@email.com
            </p>
        </div>
        <div className="ml-auto font-medium">+$39.00</div>
    </div>)

    }
    return (
    <><CardHeader>
            <CardTitle>Recent Views</CardTitle>
            <CardDescription>
                You got {views.length} views on your profile!
            </CardDescription>
        </CardHeader><CardContent>
                <div className="space-y-8">
                    {totviews}
                </div>
            </CardContent>
    </>
    )
}
