import React from 'react';
import { FileText } from 'lucide-react';
import { DotsVerticalIcon } from '@radix-ui/react-icons';

const DocumentCard = ({ title, status, pageCount }: {
    title: string;
    status: string;
    pageCount: number;
}) => {
    return (
        <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white relative">
            <div className="absolute right-2 top-2">
                <DotsVerticalIcon className="w-6 h-6 text-gray-600" />
            </div>
            <div className="p-4">
                <div className="flex items-center">
                    <FileText className="w-8 h-8 text-primary" />
                    <div className="ml-2">
                        <h2 className="text-lg font-bold">{title}</h2>
                        <p className="text-gray-500">{status}</p>
                    </div>
                </div>
                <div className="mt-4 mb-2">
                    {/* Image representing the document should go here */}
                    <img src="/images/pdf.png" alt="Document Preview" className="w-2/3" />
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>{pageCount} pages</span>
                    <span>Word</span>
                </div>
            </div>
            <div className="bg-blue-100 text-blue-800 text-center py-2">
                Resume Document
                <br />
                Ready for review
            </div>
        </div>
    );
};

export default DocumentCard;
