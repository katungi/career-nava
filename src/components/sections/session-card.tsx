import React from 'react';
import { CalendarIcon, ClockIcon, EllipsisIcon, UserCircleIcon } from 'lucide-react';

const SessionCard = (props: any) => {
    return (
        <div className={`bg-white rounded-lg shadow-lg p-6 max-w-sm ${props.className}`}>
            <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">{props.title}</h2>
                <button className="text-gray-400 hover:text-gray-500">
                    <EllipsisIcon />
                </button>
            </div>
            <div className="mt-4 flex items-center">
                <CalendarIcon className="text-purple-500" />
                <span className="ml-2 text-sm text-gray-500">10-11-2023</span>
            </div>
            <div className="mt-2 flex items-center">
                <ClockIcon className="text-purple-500" />
                <span className="ml-2 text-sm text-gray-500">02:00pm</span>
            </div>
            <div className="mt-4 bg-purple-100 text-purple-700 text-xs uppercase font-semibold px-2 py-1 inline-block rounded-full">
                Upcoming
            </div>
            <p className="mt-4 text-gray-600">
                {props.description}
            </p>
            <div className="mt-4">
                <h3 className="text-sm font-semibold">Mentor:</h3>
                <div className="flex items-center mt-1">
                {props?.mentor?.image ? (
                <img src={props.mentor.image} alt={props.mentor.name} className="w-8 h-8 rounded-full" />
                ) :  <UserCircleIcon className="text-purple-500" />}
                    <div className="ml-2">
                        <div>{props?.mentor?.name}</div>
                        <div className="text-xs text-gray-500">{props?.mentor?.email}</div>
                    </div>
                </div>
            </div>
            <button className="mt-4 bg-purple-500 text-white text-sm py-2 px-4 rounded-lg w-full hover:bg-purple-600">
                Attend Session
            </button>
        </div>
    );
};

export default SessionCard;
