"use client"
import { PlusIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

const BookmarkHeader = () => {
    const router = useRouter();

    return (
        <div className="relative bg-secondary text-white flex justify-between items-center h-60 rounded-xl" style={{
            backgroundImage: "url('/images/bagpack.png')",
        }}>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-300/30 to-secondary/70"></div>
            <div className="relative p-8 bg-secondary" style={{ backgroundColor: 'rgba(234, 189, 29, 0.5)' }}>
                <h1 className="text-3xl font-bold text-gray-900">My Bookmarks</h1>
                <p className="text-lg text-gray-900">View and manage all your bookmarked scholarships here.</p>
                <Button
                    className="flex items-center bg-primary text-white font-bold py-2 px-4 rounded mt-8 hover:bg-primary-dark"
                    onClick={() => router.push('/app/dashboard/scholarships')}
                >
                    <PlusIcon className="mr-2" /> Find Scholarships
                </Button>
            </div>
            <div className="absolute right-12 bottom-0 z-0">
                <img src="/images/session-img.png" alt="Illustration" style={{ backgroundColor: 'rgba(234, 189, 29, 0.5)' }} />
            </div>
        </div>
    );
};

export default BookmarkHeader;
