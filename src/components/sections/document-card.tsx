import React from 'react';
import { Button } from '~/components/ui/button';
import { FileText, Download } from 'lucide-react';

interface DocumentCardProps {
    documentUrl: string;
    id: number;
    userId: string;
}

const DocumentCard = ({
    documentUrl,
    id
}: DocumentCardProps) => {
    const fileName = documentUrl.split('/').pop() || 'Document';
    const truncatedFileName = fileName.length > 20 ? `${fileName.substring(0, 20)}...` : fileName;
    return (
        <div className="group block w-full max-w-sm rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md ">
            <div className="flex justify-between items-start">
                <div className="flex items-center">
                    <div className="h-10 w-10 rounded-md bg-primary flex items-center justify-center mr-3">
                        <FileText className="h-5 w-5 text-white" />
                    </div>
                    <div>
                        <h3 className="font-medium text-black">{truncatedFileName}</h3>
                        <span className="text-sm text-gray-500">Document #{id}</span>
                    </div>
                </div>
            </div>

            <div className="mt-3 flex items-center justify-between">
                <Button
                    variant="outline"
                    size="sm"
                    className="h-8 gap-1"
                    onClick={() => window.open(documentUrl, '_blank')}
                >
                    <Download className="h-3.5 w-3.5" />
                    Download
                </Button>
            </div>
        </div>
    );
};

export default DocumentCard;
