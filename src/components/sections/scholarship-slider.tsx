'use client';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import type React from 'react';
import { useEffect, useRef, useState } from 'react';
import Empty from '../constants/empty';
import { Input } from '../ui/input';
import ScholarshipCard from './scholarship-card';

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
    scholarship?.scholarshipName
      .toLowerCase()
      .includes(searchText.toLowerCase())
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
        className="m-4 ml-8 w-[900px] rounded border p-6"
        onFocus={() => {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
          }
        }}
        onBlur={() => {
          intervalRef.current = setInterval(nextSlide, 3000);
        }}
      />

      <div className="relative mt-6 flex items-center justify-center">
        {/* Slider Content */}
        <div className="relative flex w-[900px] gap-6 overflow-hidden">
          {filteredScholarships?.length > 0 ? (
            filteredScholarships
              .slice(
                currentSlide * maxVisibleCards,
                (currentSlide + 1) * maxVisibleCards
              )
              .map((scholarship: any, index: React.Key | null | undefined) => (
                <div key={index} className="w-[300px]">
                  {' '}
                  {/* Customize width for each card */}
                  <ScholarshipCard scholarship={scholarship} />
                </div>
              ))
          ) : (
            <div className="w-full text-center">
              <Empty />
            </div>
          )}
        </div>

        <button
          className="absolute bottom-0 left-0 translate-y-1/2 transform rounded-full bg-white p-2 text-xl shadow-md transition-all hover:bg-gray-200"
          onClick={prevSlide}
        >
          <ChevronLeftIcon />
        </button>

        <button
          className="absolute right-0 bottom-0 translate-y-1/2 transform rounded-full bg-white p-2 text-xl shadow-md transition-all hover:bg-gray-200"
          onClick={nextSlide}
        >
          <ChevronRightIcon />
        </button>
      </div>
    </div>
  );
};

export default ScholarshipSlider;
