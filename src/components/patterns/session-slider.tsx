"use client"
import type React from 'react';
import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, Loader } from 'lucide-react';
import SessionCard from '../sections/session-card';
import Empty from '../constants/empty';
import { Button } from '../ui/button';

interface Session {
  id: string;
  title: string;
  date?: string;
  time?: string;
  description?: string;
  status?: string;
  meetingLink?: string;
  mentor?: {
    name: string;
    email: string;
    image?: string;
  };
}

interface SessionSliderProps {
  sessions: Session[];
  loading?: boolean;
}

const SessionSlider = ({ sessions, loading }: SessionSliderProps) => {
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
        <div className="relative">
            {loading && (
                <div className="flex items-center justify-center p-12">
                    <Loader className="h-8 w-8 animate-spin rounded-full" />
                </div>
            )}
            {sessions?.length > 0 ? (
                <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-transform duration-300 ease-in-out transform">
                        {sessions
                            .slice(currentSlide * maxVisibleCards, (currentSlide + 1) * maxVisibleCards)
                            .map((session: Session, index: number) => (
                                <div key={session.id} className="transform transition-all duration-300 hover:scale-105">
                                    <SessionCard {...session} />
                                </div>
                            ))}
                    </div>

                    <div className="flex justify-center mt-6 space-x-2">
                        <Button
                            variant="outline"
                            size="icon"
                            className="rounded-full h-8 w-8 transition-colors duration-200"
                            onClick={prevSlide}
                        >
                            <ChevronLeftIcon className="h-4 w-4" />
                        </Button>
                        <div className="flex items-center space-x-2">
                            {Array.from({ length: maxSlideIndex + 1 }, (_, index) => (
                                <span
                                    // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                                    key={index}
                                    className={`h-2 w-2 rounded-full transition-colors duration-200 ${index === currentSlide ? 'bg-primary' : 'bg-gray-300'}`}
                                />
                            ))}
                        </div>
                        <Button
                            variant="outline"
                            size="icon"
                            className="rounded-full h-8 w-8 transition-colors duration-200"
                            onClick={nextSlide}
                        >
                            <ChevronRightIcon className="h-4 w-4" />
                        </Button>
                    </div>
                </>
            ) : (
                <div className="flex justify-center items-center h-[500px]">
                    <Empty />
                </div>
            )}
        </div>
    );
};

export default SessionSlider;
