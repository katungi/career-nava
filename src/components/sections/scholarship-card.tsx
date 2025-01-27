'use client';

import type { Scholarship } from '@prisma/client';
import {
  ArrowRight,
  Bookmark,
  BookmarkCheck,
  CalendarIcon,
  ClockIcon,
} from 'lucide-react';
import type React from 'react';
import useBookmark from '~/hooks/useBookmark';

interface ScholarshipCardProps {
  scholarship: Scholarship;
}

const ScholarshipCard: React.FC<ScholarshipCardProps> = ({ scholarship }) => {
  const { bookmarks, toggleBookmark } = useBookmark();

  // Check if the scholarship is bookmarked
  const isBookmarked = bookmarks?.some(
    (b) => b.scholarshipId === scholarship.id
  );

  const handleToggleBookmark = async () => {
    await toggleBookmark(scholarship.id);
  };

  return (
    <div className="mx-auto max-w-sm overflow-hidden rounded-lg bg-white shadow-lg">
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-gray-800 text-xl">
            {scholarship.scholarshipName}
          </h2>
          <button
            onClick={handleToggleBookmark}
            className="text-gray-600 hover:text-purple-600 focus:outline-none"
            aria-label="Bookmark scholarship"
          >
            {isBookmarked ? (
              <BookmarkCheck size={28} className="h-6 w-6" />
            ) : (
              <Bookmark size={28} className="h-6 w-6" />
            )}
          </button>
        </div>
        <p className="mt-2 text-gray-600">
          {scholarship.courseOfStudyInformation}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="rounded-full bg-blue-100 px-3 py-1 text-blue-800">
            {scholarship.country}
          </span>
        </div>
        <div className="mt-4 flex items-center text-purple-600">
          <CalendarIcon className="text-purple-500" />
          <span className="ml-2">{scholarship.openingDates}</span>
        </div>
        <div className="mt-2 flex items-center text-purple-600">
          <ClockIcon className="text-purple-500" />
          <span className="ml-2">{scholarship.deadline}</span>
        </div>
        <div className="mt-4 w-full rounded-full bg-primary p-3">
          <a
            href={scholarship.link!}
            className="ml-2 flex flex-row text-white"
            target="_BLANK"
            rel="noopener noreferrer"
          >
            Learn More
            <ArrowRight className="h-6 w-6 text-white" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipCard;
