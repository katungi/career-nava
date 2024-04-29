import { useState } from "react";
import MentorModal from "./mentor-modal";

const SessionsHead = () => {
    return (
        <div className="relative bg-secondary text-white flex justify-between items-center h-60 rounded-xl" style={{
            backgroundImage: "url('/images/bagpack.png')",
        }}>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-300/30 to-secondary/70"></div>
            <div className='relative p-8 bg-secondary' style={{ backgroundColor: 'rgba(234, 189, 29, 0.5)' }}>
                <h1 className="text-3xl font-bold text-gray-900">My Sessions</h1>
                <p className="text-lg text-gray-900">Lorem ipsum dolor sit amet consectetur. Ultrices venenatis sit mi netus consectetur bibendum lacus eu parturient.</p>
                <MentorModal />
            </div>
            <div className="absolute right-12 bottom-0 z-0">
                <img src="/images/session-img.png" alt="Illustration" style={{ backgroundColor: 'rgba(234, 189, 29, 0.5)' }} />
            </div>
        </div>
    );
};

export default SessionsHead;