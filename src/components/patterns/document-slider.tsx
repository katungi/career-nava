"use client"
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import DocumentCard from '../sections/document-card';
import { Button } from '../ui/button';
import Empty from '../constants/empty';

const DocumentSlider = ({ sessions }: any) => {
    const [currentRow, setCurrentRow] = useState(0);
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

    if (!sessions?.length) {
        return (
            <div className="flex justify-center items-center h-[500px]">
                <Empty />
            </div>
        );
    }

    return (
        <div className="relative space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {visibleSessions?.map((document: { id: number; documentUrl: string; userId: string }) => (
                    <div key={document.id} className="transform transition-all duration-300 hover:scale-105">
                        <DocumentCard
                            id={document.id}
                            documentUrl={document.documentUrl}
                            userId={document.userId}
                        />
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
                                className={`h-2 w-2 rounded-full transition-colors duration-200 ${index === currentRow ? 'bg-primary' : 'bg-gray-300'}`}
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
    );
};

export default DocumentSlider;
