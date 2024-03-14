"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { ClubGraph } from "./club-graph"
import { LangGraph } from "./lang-graph"
import { CardTitle } from "./ui/card"
import { ViewGraph } from "./view-graph"

export function Overview() {
    return (
        <Tabs defaultValue="lang">
            <div className="relative flex w-full flex-row items-center justify-between">
                <CardTitle className="m-5">Overview</CardTitle>
                <TabsList className="mr-2 bg-black">
                    <TabsTrigger
                        className="outline-1 outline-white data-[state=active]:outline"
                        value="lang"
                    >
                        Languages
                    </TabsTrigger>
                    <TabsTrigger
                        className="outline-1 outline-white data-[state=active]:outline"
                        value="views"
                    >
                        Views
                    </TabsTrigger>
                    <TabsTrigger
                        className="outline-1 outline-white data-[state=active]:outline"
                        value="clubs"
                    >
                        Clubs
                    </TabsTrigger>
                </TabsList>
            </div>
            <TabsContent value="lang">
                <LangGraph />
            </TabsContent>
            <TabsContent value="views">
                <ViewGraph />
            </TabsContent>
            <TabsContent value="clubs">
                <ClubGraph />
            </TabsContent>
        </Tabs>
    )
}
