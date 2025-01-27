'use client';
import { useSession } from 'next-auth/react';
import BannerCards from './banner-cards';

export default function DashboardBanner({ sessions, documents }: any) {
  const session = useSession();
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="">
        <h1 className="font-bold text-3xl text-gray-800">
          Welcome,
          <span className="text-primary">
            {' '}
            {session?.data?.user.name || ''}
          </span>
        </h1>
      </div>
      <BannerCards
        sessions={sessions?.length}
        documents={documents?.length}
        scholarhips={0}
      />
      {/* <div className="bg-green-500 mt-0">
                <Image src="/images/paper-planes.svg" width={350} height={300} alt="Career Nava Banner Logo" />
            </div> */}
    </div>
  );
}
