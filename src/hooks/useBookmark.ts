// hooks/useBookmark.ts
import { api } from '~/trpc/react'; 

const useBookmark = () => {
   
    const { data: bookmarks, refetch } = api.bookmark.getUserBookmarks.useQuery();
    
    const addBookmarkMutation = api.bookmark.addBookmark.useMutation({
        onSuccess: () => {
            refetch();
        },
    });
    
    const removeBookmarkMutation = api.bookmark.removeBookmark.useMutation({
        onSuccess: () => {
            refetch(); // Refetch bookmarks after removing
        },
    });

    const toggleBookmark = async (scholarshipId: number) => {
        if (bookmarks?.some(b => b.scholarshipId === scholarshipId)) {
            await removeBookmarkMutation.mutateAsync({ scholarshipId });
        } else {
            await addBookmarkMutation.mutateAsync({ scholarshipId });
        }
    };

    return { bookmarks, toggleBookmark };
};

export default useBookmark;

