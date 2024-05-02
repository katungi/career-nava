"use client"

import { ChevronRight } from "lucide-react"
import TabsComponent from "../patterns/tabs"
import { Button } from "../ui/button"
import { useState } from "react";

export default function ScholarshipsTabComponent() {
    const [activeTab, setActiveTab] = useState(0);
    const tabsData = [
        { title: 'All', count: 4 },
        { title: 'Applied', count: 1 },
        { title: 'Deleted', count: 3 },
        { title: 'Relevant', count: 0 },
    ];
    return (
        <>
            <div className='mt-10'>
                <TabsComponent tabsData={tabsData} activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
            <div className="flex flex-row w-full">
                <div className="p-3">
                    <div className="flex flex-row w-full p-3 justify-between items-center">
                        <div className="">
                            <h1 className="text-4xl font-bold text-gray-800">{tabsData[activeTab]?.title} Scholarships (4)</h1>
                            <p className="text-gray-900 text-xl mt-2">
                                Manage your documents, subscriptions, and billing here. You can also view your usage and manage your account.
                            </p>
                        </div>
                        <div className="ml-12">
                            <Button className="flex items-center text-white w-40 h-12 justify-center rounded-md hover:bg-secondary-dark"
                                variant={'secondary'}   >
                                Apply New Scholarships
                                <ChevronRight className="w-6 h-6 text-white ml-2" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}