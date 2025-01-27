import { ArrowRight } from 'lucide-react';

export default function BlogShCard({ scholarship }: any) {
  return (
    <div className="mx-auto max-w-sm overflow-hidden rounded-lg bg-white shadow-lg">
      <div className="relative">
        <div
          className="h-32 w-full bg-center bg-cover"
          style={{
            backgroundImage: 'url(/images/mastercard-sc.png)',
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center bg-gray-400 bg-opacity-20 backdrop-blur-md">
            <h2 className="ml-3 font-bold text-2xl text-white">
              {scholarship?.scholarshipName}
            </h2>
          </div>
        </div>
      </div>
      <div className="p-4">
        <p className="mt-2 text-gray-600">
          {scholarship?.courseOfStudyInformation}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {/* <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">{scholarship?.country}</span> */}
        </div>
        <div className="mt-4 flex items-center text-purple-600">
          {/* <CalendarIcon className="text-purple-500" />
                    <span className="ml-2">{scholarship?.openingDates}</span> */}
        </div>
        <div className="mt-2 flex items-center text--600" />
        {/* <ClockIcon className="text--500" />
                    <span className="ml-2">{scholarship?.deadline}</span> */}
        <div className="mt-4 w-full rounded-lg bg-primary p-3">
          <a
            href={scholarship?.link!}
            className="ml-2 flex flex-row justify-between text-white"
            target="_BLANK"
          >
            View Scholarship
            <ArrowRight className="h-6 w-6 text-white" />
          </a>
        </div>
      </div>
    </div>
  );
}
