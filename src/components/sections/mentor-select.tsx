"use client"

import { Button } from "../ui/button"
import Modal from "../ui/modal"
import MentorProfileCard from "./mentor-card"

export default function MentorSelection() {
    return (
        <>
            <div className="w-screen h-full p-8 flex flex-row gap-2">
                {Array.from({ length: 3 }).map((_, index) => (
                    <MentorProfileCard />
                ))}
            </div>
            <div className="mt-8 space-x-6 text-right p-3 px-8">
                <Modal.Close className="rounded px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-600">
                    Cancel
                </Modal.Close>
                <Button className="inline-flex items-center justify-center rounded bg-secondary px-4 py-2 text-sm font-medium text-white hover:bg-yellow-600 group-disabled:pointer-events-none">
                    <span className="group-disabled:opacity-0">Choose Mentor</span>
                </Button>
            </div>
        </>
    )
}