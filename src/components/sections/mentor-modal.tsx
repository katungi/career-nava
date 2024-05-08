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
                <div className='ml-12 mt-4 flex flex-col overflow-y-scroll'>
                    <p className='text-4xl font-bold text-secondary'>Book a Mentor {" "} </p>
                </div>}>
                <MentorSelection />
            </Modal.Content>
        </Modal>
    )
}