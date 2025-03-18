"use client"
import { useState } from "react";
import { api } from "~/trpc/react";
import ScholarshipsTabComponent from "./scholarship-tab-component";
import ScholarshipCard from "./scholarship-card";
import { ChevronUp, ChevronDown } from "lucide-react";

const ScholarshipContents = () => {
    const { data: scholarships } = api.scholarshipSessions.getAllScholarships.useQuery({
        limit: 1000, offset: 0
    });

    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 6; // 3 columns x 2 rows
    const totalPages = Math.ceil((scholarships?.length ?? 0) / itemsPerPage);

    const handlePrevPage = () => {
        setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
    };

    const handleNextPage = () => {
        setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : prev));
    };

    const currentScholarships = scholarships?.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
    );

    return (
        <div className="container mx-auto px-4 py-8">
            <ScholarshipsTabComponent />
            <div className="relative mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentScholarships?.map((scholarship) => (
                        <ScholarshipCard
                            key={scholarship.id}
                            scholarship={scholarship}
                        />
                    ))}
                </div>
                {totalPages > 1 && (
                    <div className="absolute right-[-60px] top-1/2 transform -translate-y-1/2 flex flex-col gap-2">
                        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                        <button
                            onClick={handlePrevPage}
                            disabled={currentPage === 0}
                            className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                            aria-label="Previous page"
                        >
                            <ChevronUp className="w-6 h-6" />
                        </button>
                        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                        <button
                            onClick={handleNextPage}
                            disabled={currentPage === totalPages - 1}
                            className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                            aria-label="Next page"
                        >
                            <ChevronDown className="w-6 h-6" />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ScholarshipContents;