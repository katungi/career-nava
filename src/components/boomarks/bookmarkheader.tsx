/* eslint-disable @next/next/no-img-element */
'use client';
import { PlusIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';

const BookmarkHeader = () => {
  const router = useRouter();

  return (
    <div
      className="relative flex h-60 items-center justify-between rounded-xl bg-secondary text-white"
      style={{
        backgroundImage: "url('/images/bagpack.png')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-300/30 to-secondary/70" />
      <div
        className="relative bg-secondary p-8"
        style={{ backgroundColor: 'rgba(234, 189, 29, 0.5)' }}
      >
        <h1 className="font-bold text-3xl text-gray-900">My Bookmarks</h1>
        <p className="text-gray-900 text-lg">
          View and manage all your bookmarked scholarships here.
        </p>
        <Button
          className="mt-8 flex items-center rounded bg-primary px-4 py-2 font-bold text-white hover:bg-primary-dark"
          onClick={() => router.push('/app/dashboard/scholarships')}
        >
          <PlusIcon className="mr-2" /> Find Scholarships
        </Button>
      </div>
      <div className="absolute right-12 bottom-0 z-0">
        <img
          src="/images/session-img.png"
          alt="Illustration"
          style={{ backgroundColor: 'rgba(234, 189, 29, 0.5)' }}
        />
      </div>
    </div>
  );
};

export default BookmarkHeader;
