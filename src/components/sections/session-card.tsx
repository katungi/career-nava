import {
  CalendarIcon,
  ClockIcon,
  EllipsisIcon,
  UserCircleIcon,
} from 'lucide-react';
import Link from 'next/link';

const transformMeetingLink = (url: string): string => {
  try {
    if (!url) return '#';
    const urlObj = new URL(url);
    return `https://careernava.com${urlObj.pathname}${urlObj.search}${urlObj.hash}`;
  } catch (error) {
    console.error('Error transforming meeting link:', error);
    return '#';
  }
};

const SessionCard = (props: any) => {
  const transformedMeetingLink = transformMeetingLink(props?.meetingLink || '');
  
  return (
    <div
      className={`max-w-sm rounded-lg bg-white p-6 shadow-lg ${props.className}`}
    >
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-lg">{props.title}</h2>
        <button className="text-gray-400 hover:text-gray-500">
          <EllipsisIcon />
        </button>
      </div>
      <div className="mt-4 flex items-center">
        <CalendarIcon className="text-purple-500" />
        <span className="ml-2 text-gray-500 text-sm">10-11-2023</span>
      </div>
      <div className="mt-2 flex items-center">
        <ClockIcon className="text-purple-500" />
        <span className="ml-2 text-gray-500 text-sm">02:00pm</span>
      </div>
      <div className="mt-4 inline-block rounded-full bg-purple-100 px-2 py-1 font-semibold text-purple-700 text-xs uppercase">
        Upcoming
      </div>
      <p className="mt-4 text-gray-600">{props.description}</p>
      <div className="mt-4">
        <h3 className="font-semibold text-sm">Coach:</h3>
        <div className="mt-1 flex items-center">
          {props?.mentor?.image ? (
            <img
              src={props.mentor.image}
              alt={props.mentor.name}
              className="h-8 w-8 rounded-full"
            />
          ) : (
            <UserCircleIcon className="text-purple-500" />
          )}
          <div className="ml-2">
            <div>{props?.mentor?.name}</div>
            <div className="text-gray-500 text-xs">{props?.mentor?.email}</div>
          </div>
        </div>
      </div>
      <Link href={transformedMeetingLink} target="_BLANK">
        <button className="mt-4 w-full rounded-lg bg-purple-500 px-4 py-2 text-sm text-white hover:bg-purple-600">
          Attend Session
        </button>
      </Link>
    </div>
  );
};

export default SessionCard;