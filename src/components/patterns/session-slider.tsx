"use client"
import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import SessionCard from '../sections/session-card';

const SessionSlider = ({ sessions }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const maxVisibleCards = 3;
    const maxSlideIndex = Math.ceil(sessions.length / maxVisibleCards) - 1;

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === maxSlideIndex ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? maxSlideIndex : prev - 1));
    };

    return (
        <div className="flex items-center space-x-4 overflow-hidden relative">
             <div className='absolute right-0 flex flex-col items-center p-4'>
                <button onClick={prevSlide} className="mb-2 bg-gray-200 rounded-full p-2">
                    <ChevronLeftIcon className="w-6 h-6 text-gray-600" />
                </button>
                <div className="flex flex-col justify-center space-y-2 mb-2">
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
            <div className="flex flex-grow space-x-4">
                {sessions.slice(currentSlide * maxVisibleCards, (currentSlide + 1) * maxVisibleCards).map((session, index) => (
                    <div key={index} className="flex-shrink-0 w-1/3 p-4">
                        <SessionCard {...session} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SessionSlider;
