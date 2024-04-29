"use client"
import { PlusIcon } from "lucide-react"
import Modal from "../ui/modal"
import MentorSelection from "./mentor-select"
import { useState } from "react";

export default function MentorModal() {
    const [open, setOpen] = useState(false);
    return (
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
                {/* <MentorSelection /> */}
            </Modal.Content>

        </Modal>
    )
}