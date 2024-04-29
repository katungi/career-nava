"use client"
import { useState } from "react";
import Modal from "../ui/modal";
import { PlusIcon } from "lucide-react";
import MentorSelection from "./mentor-select";

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

export default SessionsHeader;