"use client"

import { ChevronRight } from "lucide-react"
import TabsComponent from "../patterns/tabs"
import { Button } from "../ui/button"
import { useState } from "react";

export default function SessionTabComponent() {
    const [activeTab, setActiveTab] = useState(0);
    const img1 = "https://i.ibb.co/ncrXc2V/1.png";
    const img2 = "https://i.ibb.co/B3s7v4h/2.png";
    const img3 = "https://i.ibb.co/XXR8kzF/3.png";
    const img4 = "https://i.ibb.co/yg7BSdM/4.png";

    const slides = [img1, img2, img3, img4, img1, img2, img3, img4];
    const tabsData = [
        { title: 'All Sessions', count: 4 },
        { title: 'Active', count: 1 },
        { title: 'Upcoming', count: 3 },
        { title: 'Deleted', count: 0 },
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
                            <h1 className="text-4xl font-bold text-gray-800">{tabsData[activeTab]?.title} Sessions (4)</h1>
                            <p className="text-gray-900 text-xl mt-2">
                                Manage your documents, subscriptions, and billing here. You can also view your usage and manage your account.
                            </p>
                        </div>
                        <div className="ml-12">
                            <Button className="flex items-center text-white w-40 h-12 justify-center rounded-md hover:bg-secondary-dark"
                                variant={'secondary'}   >
                                See Sessions
                                <ChevronRight className="w-6 h-6 text-white ml-2" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}