'use client';

import { PlusIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import useBookmark from '~/hooks/useBookmark';
import ScholarshipCard from '../sections/scholarship-card';
import { Button } from '../ui/button';

const BookmarkList = () => {
  const { bookmarks } = useBookmark();
  const router = useRouter();

  return (
    <div className="mt-8">
      {bookmarks && bookmarks.length > 0 ? (
        bookmarks.map((bookmark) => (
          <ScholarshipCard
            key={bookmark.scholarshipId}
            scholarship={bookmark.scholarship}
          />
        ))
      ) : (
        <div>
          <p className="text-gray-600">
            You haven't bookmarked any scholarships yet.
          </p>
          <Button
            className="mt-8 flex items-center rounded bg-primary px-4 py-2 font-bold text-white hover:bg-primary-dark"
            onClick={() => router.push('/app/dashboard/scholarships')}
          >
            <PlusIcon className="mr-2" /> Find Scholarships
          </Button>
        </div>
      )}
    </div>
  );
};

export default BookmarkList;
