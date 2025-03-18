"use client"
import { api } from "~/trpc/react";
import SessionTabComponent from "./session-tab-component";
import { useState } from "react";
import SessionCard from "./session-card";
import { Button } from "../ui/button";
import { ChevronDown, ChevronUp, Loader } from "lucide-react";
import Empty from "../constants/empty";

const SessionContents = () => {
    const [currentRow, setCurrentRow] = useState(0);
    const {data: sessions, isLoading} = api.mentorshipSessions.getBookingSessions.useQuery({
        limit: 100, offset: 0
    });

    const itemsPerRow = 3;
    const visibleRows = 2;
    const maxVisibleItems = itemsPerRow * visibleRows;
    const maxRowIndex = Math.ceil((sessions?.length || 0) / itemsPerRow) - visibleRows;

    const nextRow = () => {
        setCurrentRow((prev) => (prev === maxRowIndex ? 0 : prev + 1));
    };

    const prevRow = () => {
        setCurrentRow((prev) => (prev === 0 ? maxRowIndex : prev - 1));
    };

    const visibleSessions = sessions?.slice(
        currentRow * itemsPerRow,
        (currentRow + visibleRows) * itemsPerRow
    );

    if (isLoading) {
        return (
            <div className="flex items-center justify-center p-12">
                <Loader className="h-8 w-8 animate-spin rounded-full" />
            </div>
        );
    }

    return (
        <>
            <SessionTabComponent />
            <div className="mt-4">
                {sessions?.length > 0 ? (
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {visibleSessions?.map((session) => (
                                <div key={session.id} className="transform transition-all duration-300 hover:scale-105">
                                    <SessionCard {...session} />
                                </div>
                            ))}
                        </div>
                        {sessions.length > maxVisibleItems && (
                            <div className="flex justify-center mt-6 space-x-2">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="rounded-full h-8 w-8 transition-colors duration-200"
                                    onClick={prevRow}
                                >
                                    <ChevronUp className="h-4 w-4" />
                                </Button>
                                <div className="flex items-center space-x-2">
                                    {Array.from({ length: maxRowIndex + 1 }, (_, index) => (
                                        <span
                                            key={index}
                                            className={`h-2 w-2 rounded-full transition-colors duration-200 ${
                                                index === currentRow ? 'bg-primary' : 'bg-gray-300'
                                            }`}
                                        />
                                    ))}
                                </div>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="rounded-full h-8 w-8 transition-colors duration-200"
                                    onClick={nextRow}
                                >
                                    <ChevronDown className="h-4 w-4" />
                                </Button>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="flex justify-center items-center h-[500px]">
                        <Empty />
                    </div>
                )}
            </div>
        </>
    );
};

export default SessionContents;