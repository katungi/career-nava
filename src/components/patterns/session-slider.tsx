'use client';
import { ChevronLeftIcon, ChevronRightIcon, Loader } from 'lucide-react';
import type React from 'react';
import { useState } from 'react';
import Empty from '../constants/empty';
import SessionCard from '../sections/session-card';

const SessionSlider = ({ sessions, loading }: any) => {
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
    <div className="relative flex-col items-center space-x-4 overflow-hidden px-2">
      {loading && (
        <div className="itemsP-center flex h-full flex-col justify-center p-12 align-middle">
          <Loader className="h-8 w-8 animate-spin rounded-full" />
        </div>
      )}
      {sessions?.length > 0 && (
        <div className="left-0 mb-3 ml-7 flex w-64 flex-row items-center">
          <button
            onClick={prevSlide}
            className="mb-2 rounded-full bg-gray-200 p-2"
          >
            <ChevronLeftIcon className="h-6 w-6 text-gray-600" />
          </button>
          <div className="mb-2 flex flex-row justify-center space-x-1 px-1">
            {Array.from({ length: maxSlideIndex + 1 }, (_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full ${index === currentSlide ? 'bg-blue-600' : 'bg-gray-400'}`}
              />
            ))}
          </div>
          <button onClick={nextSlide} className="rounded-full bg-gray-200 p-2">
            <ChevronRightIcon className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      )}
      {sessions?.length > 0 ? (
        <div className="flex flex-grow space-x-4">
          {sessions
            .slice(
              currentSlide * maxVisibleCards,
              (currentSlide + 1) * maxVisibleCards
            )
            .map((session: any, index: React.Key | null | undefined) => (
              <div key={index} className="w-1/3 flex-shrink-0 p-4">
                <SessionCard {...session} />
              </div>
            ))}
        </div>
      ) : (
        <div className="mx-96 flex h-[500px] w-[500px] flex-grow">
          <Empty />
        </div>
      )}
    </div>
  );
};

export default SessionSlider;
