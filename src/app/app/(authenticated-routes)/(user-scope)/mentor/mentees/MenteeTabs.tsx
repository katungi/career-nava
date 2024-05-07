"use client"

import { useState } from "react";
import TabsComponent from "~/components/patterns/tabs";

export default function MenteeTabComponent() {
    const [activeTab, setActiveTab] = useState(0);
    const tabsData = [
        { title: 'All Mentees', count: 4 },
        { title: 'Online', count: 1 },
        { title: 'Pending Confirmation', count: 3 },
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
                            <h1 className="text-4xl font-bold text-gray-800">{tabsData[activeTab]?.title}</h1>
                            <p className="text-gray-900 text-xl mt-2">
                                Manage your documents, subscriptions, and billing here. You can also view your usage and manage your account.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}