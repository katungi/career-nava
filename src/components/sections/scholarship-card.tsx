'use client';

import type React from 'react';
import type { Scholarship } from '@prisma/client';
import { ArrowRight, CalendarIcon, ClockIcon, Bookmark, BookmarkCheck } from 'lucide-react';
import useBookmark from '~/hooks/useBookmark';

interface ScholarshipCardProps {
    scholarship: Scholarship;
}

const ScholarshipCard: React.FC<ScholarshipCardProps> = ({ scholarship }) => {
    const { bookmarks, toggleBookmark } = useBookmark();
    const isBookmarked = bookmarks?.some(b => b.scholarshipId === scholarship.id);

    const handleToggleBookmark = async () => {
        await toggleBookmark(scholarship.id);
    };

    return (
        <div className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
            <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                    <div className="space-y-2">
                        <h2 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                            {scholarship.scholarshipName}
                        </h2>
                        <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                            {scholarship.country}
                        </span>
                    </div>
                    {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                    <button
                        onClick={handleToggleBookmark}
                        className="text-gray-400 hover:text-primary focus:outline-none transition-colors"
                        aria-label="Bookmark scholarship"
                    >
                        {isBookmarked ? (
                            <BookmarkCheck className="w-6 h-6" />
                        ) : (
                            <Bookmark className="w-6 h-6" />
                        )}
                    </button>
                </div>

                <p className="text-gray-600 line-clamp-2">
                    {scholarship.courseOfStudyInformation}
                </p>

                <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                        <CalendarIcon className="w-4 h-4 text-primary" />
                        <span>Opens: {scholarship.openingDates}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <ClockIcon className="w-4 h-4 text-primary" />
                        <span>Deadline: {scholarship.deadline}</span>
                    </div>
                </div>

                <a
                    href={scholarship.link || '#'}
                    className="mt-4 inline-flex w-full items-center justify-center gap-2 bg-primary text-white py-3 px-4 rounded-lg hover:bg-secondary transition-all duration-300 group/button"
                    target="_BLANK"
                    rel="noopener noreferrer"
                >
                    Learn More
                    <ArrowRight className="w-5 h-5 transform group-hover/button:translate-x-1 transition-transform duration-300" />
                </a>
            </div>
        </div>
    );
};

export default ScholarshipCard;



