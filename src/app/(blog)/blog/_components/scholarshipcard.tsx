import { ArrowRight, CalendarIcon, ClockIcon } from "lucide-react";

export default function BlogShCard({ scholarship }: any) {
    return (
        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="relative">
                <div
                    className="h-32 w-full bg-cover bg-center"
                    style={{
                        backgroundImage: `url(/images/mastercard-sc.png)`,
                    }}
                >
                    <div className="absolute inset-0 bg-gray-400 bg-opacity-20 backdrop-blur-md flex items-center justify-center">
                        <h2 className="text-2xl font-bold text-white ml-3">{scholarship?.scholarshipName}</h2>
                    </div>
                </div>
            </div>
            <div className="p-4">
                <p className="text-gray-600 mt-2">{scholarship?.courseOfStudyInformation}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                    {/* <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">{scholarship?.country}</span> */}
                </div>
                <div className="mt-4 flex items-center text-purple-600">
                    {/* <CalendarIcon className="text-purple-500" />
                    <span className="ml-2">{scholarship?.openingDates}</span> */}
                </div>
                <div className="flex items-center text-purple-600 mt-2">
                </div>
                {/* <ClockIcon className="text-purple-500" />
                    <span className="ml-2">{scholarship?.deadline}</span> */}
                <div className="mt-4 w-full bg-primary p-3 rounded-lg">
                    <a href={scholarship?.link!} className="text-white ml-2 flex-row flex justify-between" target='_BLANK'>
                        View Scholarship
                        <ArrowRight className="w-6 h-6 text-white" />
                    </a>
                </div>
            </div>
        </div>

    )
}