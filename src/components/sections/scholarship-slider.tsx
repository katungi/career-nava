"use client";
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import ScholarshipCard from './scholarship-card';
import Empty from '../constants/empty';
import { Input } from '../ui/input';

const ScholarshipSlider = ({ scholarships }: any) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [searchText, setSearchText] = useState('');
    const maxVisibleCards = 3;
    const maxSlideIndex = Math.ceil(scholarships?.length / maxVisibleCards) - 1;

    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === maxSlideIndex ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? maxSlideIndex : prev - 1));
    };

    const filteredScholarships = scholarships?.filter((scholarship: any) =>
        scholarship?.scholarshipName.toLowerCase().includes(searchText.toLowerCase())
    );

    useEffect(() => {
        intervalRef.current = setInterval(nextSlide, 8000);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [currentSlide, maxSlideIndex]);

    return (
        <div className="relative">
            <Input
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Search scholarships..."
                className="ml-8 m-4 p-6 border rounded w-[900px]"
                onFocus={() => {
                    if (intervalRef.current) {
                        clearInterval(intervalRef.current);
                    }
                }}
                onBlur={() => {
                    intervalRef.current = setInterval(nextSlide, 3000);
                }}
            />

            <div className="flex items-center justify-center mt-6 relative">
                {/* Slider Content */}
                <div className="flex gap-6 overflow-hidden relative w-[900px]">
                    {filteredScholarships?.length > 0 ?
                        filteredScholarships.slice(currentSlide * maxVisibleCards, (currentSlide + 1) * maxVisibleCards).map((scholarship: any, index: React.Key | null | undefined) => (
                            <div key={index} className="w-[300px]"> {/* Customize width for each card */}
                                <ScholarshipCard scholarship={scholarship} />
                            </div>
                        )) :
                        <div className="w-full text-center">
                            <Empty />
                        </div>
                    }
                </div>

                
                <button 
                    className="absolute left-0 bottom-0 p-2 text-xl bg-white rounded-full shadow-md hover:bg-gray-200 transition-all transform translate-y-1/2"
                    onClick={prevSlide}>
                    <ChevronLeftIcon />
                </button>

                
                <button 
                    className="absolute right-0 bottom-0 p-2 text-xl bg-white rounded-full shadow-md hover:bg-gray-200 transition-all transform translate-y-1/2"
                    onClick={nextSlide}>
                    <ChevronRightIcon />
                </button>
            </div>
        </div>
    );
};

export default ScholarshipSlider;





