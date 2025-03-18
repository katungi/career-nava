"use client"
import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import DocumentCard from '../sections/document-card';
import { Button } from '../ui/button';

const DocumentSlider = ({ sessions }: any) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const maxVisibleCards = 3;
    const maxSlideIndex = Math.ceil(sessions?.length / maxVisibleCards) - 1;

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === maxSlideIndex ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? maxSlideIndex : prev - 1));
    };

    console.log("Sesssions", sessions)

    return (
        <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-transform duration-300 ease-in-out transform">
                {sessions?.slice(currentSlide * maxVisibleCards, (currentSlide + 1) * maxVisibleCards).map((document: { id: number; documentUrl: string; userId: string }, index: number) => (
                    <div key={document.id} className="transform transition-all duration-300 hover:scale-105">
                        <DocumentCard
                            id={document.id}
                            documentUrl={document.documentUrl}
                            userId={document.userId} />
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
        </div>
    );
};

export default DocumentSlider;
