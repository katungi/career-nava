"use client"
import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import SessionCard from '../sections/session-card';
import Empty from '../constants/empty';

const SessionSlider = ({ sessions }: any) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const maxVisibleCards = 3;
    const maxSlideIndex = Math.ceil(sessions?.length / maxVisibleCards) - 1;

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === maxSlideIndex ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? maxSlideIndex : prev - 1));
    };

    return (
        <div className="items-center space-x-4 overflow-hidden relative px-2 flex-col">
            {sessions?.length > 0 &&
                <div className='left-0 flex flex-row items-center mb-3 w-64 ml-7'>
                    <button onClick={prevSlide} className="mb-2 bg-gray-200 rounded-full p-2">
                        <ChevronLeftIcon className="w-6 h-6 text-gray-600" />
                    </button>
                    <div className="flex flex-row justify-center mb-2 px-1 space-x-1">
                        {Array.from({ length: maxSlideIndex + 1 }, (_, index) => (
                            <div
                                key={index}
                                className={`h-2 w-2 rounded-full ${index === currentSlide ? 'bg-blue-600' : 'bg-gray-400'}`}
                            ></div>
                        ))}
                    </div>
                    <button onClick={nextSlide} className="bg-gray-200 rounded-full p-2">
                        <ChevronRightIcon className="w-6 h-6 text-gray-600" />
                    </button>
                </div>
            }
            {sessions?.length > 0 ?
                <div className="flex flex-grow space-x-4">
                    {sessions.slice(currentSlide * maxVisibleCards, (currentSlide + 1) * maxVisibleCards).map((session: any, index: React.Key | null | undefined) => (
                        <div key={index} className="flex-shrink-0 w-1/3 p-4">
                            <SessionCard {...session} />
                        </div>
                    ))}
                </div> :
                <div className="flex flex-grow w-[500px] h-[500px] mx-96">
                    <Empty />
                </div>
            }
        </div>
    );
};

export default SessionSlider;
