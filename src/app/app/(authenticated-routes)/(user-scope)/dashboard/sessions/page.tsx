'use client'
import React, { useState } from 'react';
import { ChevronRight, PlusIcon } from 'lucide-react';
import { Button } from '~/components/ui/button';
import TabsComponent from '~/components/patterns/tabs';
import SessionSlider from '~/components/patterns/session-slider';
import Modal from '~/components/ui/modal';
import MentorSelection from '~/components/sections/mentor-select';

export default function Sessions() {
    const [activeTab, setActiveTab] = useState(0);
    const img1 = "https://i.ibb.co/ncrXc2V/1.png";
    const img2 = "https://i.ibb.co/B3s7v4h/2.png";
    const img3 = "https://i.ibb.co/XXR8kzF/3.png";
    const img4 = "https://i.ibb.co/yg7BSdM/4.png";

    const slides = [img1, img2, img3, img4, img1, img2, img3, img4];

    return (
        <div className="p-4 mx-8">
            <SessionsHeader />
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
            <div className="mt-4">
                <SessionSlider sessions={slides} />
            </div>
        </div>
    )
}

const SessionsHeader = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="relative bg-secondary text-white flex justify-between items-center h-60 rounded-xl" style={{
            backgroundImage: "url('/images/bagpack.png')",
        }}>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-300/30 to-secondary/70"></div>
            <div className='relative p-8 bg-secondary' style={{ backgroundColor: 'rgba(234, 189, 29, 0.5)' }}>
                <h1 className="text-3xl font-bold text-gray-900">My Sessions</h1>
                <p className="text-lg text-gray-900">Lorem ipsum dolor sit amet consectetur. Ultrices venenatis sit mi netus consectetur bibendum lacus eu parturient.</p>
                <Modal open={open} onOpenChange={setOpen}>
                    <Modal.Button className="rounded p-2">
                        <button className="flex items-center bg-primary text-white font-bold py-2 px-4 rounded mt-8 hover:bg-primary-dark" >
                            <PlusIcon className="mr-2" /> Create New Sessions
                        </button>
                    </Modal.Button>
                    <Modal.Content title={
                        <div className='ml-12 mt-4 flex flex-col'>
                            <p className='text-4xl font-bold text-secondary'>Recommended Mentors {" "} </p>
                            <span className='text-4xl ml-8 font-bold text-white'>Assigned Below</span>
                            <span className='text-white'>Here are a list of mentors we recommend based on your assessment score</span>
                            <p className='text-lg mt-4 text-white'>Your Assessment Score:</p>

                            <div className='flex flex-row w-full'>
                                <p className='text-3xl font-bold text-secondary mt-2'>78%</p>
                                <div className="mt-4 bg-purple-100 text-purple-700 text-xs uppercase font-semibold px-2 mx-8 py-1 inline-block rounded-full">
                                    Scolarship Enthusiasts
                                </div>
                            </div>
                        </div>
                    }>

                        <MentorSelection />
                    </Modal.Content>

                </Modal>
            </div>
            <div className="absolute right-12 bottom-0 z-0">
                <img src="/images/session-img.png" alt="Illustration" style={{ backgroundColor: 'rgba(234, 189, 29, 0.5)' }} />
            </div>
        </div>
    );
};

const tabsData = [
    { title: 'All Sessions', count: 4 },
    { title: 'Active', count: 1 },
    { title: 'Upcoming', count: 3 },
    { title: 'Deleted', count: 0 },
];