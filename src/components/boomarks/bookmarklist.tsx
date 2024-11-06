import ScholarshipCard from "../sections/scholarship-card";
import useBookmark from "~/hooks/useBookmark";
import { PlusIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

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
                    <p className="text-gray-600">You haven't bookmarked any scholarships yet.</p>
                    <Button
                        className="flex items-center bg-primary text-white font-bold py-2 px-4 rounded mt-8 hover:bg-primary-dark"
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
