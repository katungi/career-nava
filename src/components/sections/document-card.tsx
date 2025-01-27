import { FileIcon } from 'lucide-react';
import Link from 'next/link';

const DocumentCard = ({
  title,
  status,
  pageCount,
}: {
  title: string;
  status: string;
  pageCount: number;
}) => {
  return (
    <Link
      href="#"
      className="group block w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:scale-[1.02] hover:shadow-md dark:border-gray-800 dark:bg-gray-950"
    >
      <div className="p-4">
        <div className="mt-4 mb-2 flex justify-center align-middle">
          <img
            src="/images/pdf.png"
            alt="Document Preview"
            className="w-1/3 "
          />
        </div>
      </div>
      <div className="flex items-center gap-4 p-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-md bg-gray-100 dark:bg-gray-800">
          <FileIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
        </div>
        <div className="flex-1">
          {/**
           * Add a title to the schema and display it here.
           * Add a Type dropdown as well, so we can filter by type. and show the correct filler document icon.
           *
           * */}
          <h4 className="font-medium text-lg leading-none">
            Annual Report 2024
          </h4>
          <p className="mt-1 text-gray-500 text-sm dark:text-gray-400">
            PDF Document
          </p>
        </div>
      </div>
    </Link>
  );
};

export default DocumentCard;
