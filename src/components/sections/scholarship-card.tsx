// ScholarshipCard.tsx
import React from 'react';
import { type Scholarship } from '@prisma/client';
import { Arrow } from '@radix-ui/react-tooltip';
import { ArrowRight, CalendarIcon, Clock, ClockIcon } from 'lucide-react';

interface ScholarshipCardProps {
    scholarship: Scholarship;
}

const ScholarshipCard: React.FC<ScholarshipCardProps> = ({ scholarship }) => {


    return (
        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800">{scholarship?.scholarshipName}</h2>
                <p className="text-gray-600 mt-2">{scholarship?.courseOfStudyInformation}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">{scholarship?.country}</span>
                </div>
                <div className="mt-4 flex items-center text-purple-600">
                    <CalendarIcon className="text-purple-500" />
                    <span className="ml-2">{scholarship?.openingDates}</span>
                </div>
                <div className="flex items-center text-purple-600 mt-2">
                    <ClockIcon className="text-purple-500" />
                    <span className="ml-2">{scholarship?.deadline}</span>
                </div>
                <div className="mt-4 w-full bg-primary p-3 rounded-full">
                    <a href={scholarship?.link!} className="text-white ml-2 flex-row flex" target='_BLANK'>Learn More
                        <ArrowRight className="w-6 h-6 text-white" />
                    </a>
                </div>

            </div>
        </div>
    );
};

export default ScholarshipCard;
