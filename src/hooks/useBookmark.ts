import { api } from '~/trpc/react';
const useBookmark = () => {
  const { data: bookmarks, refetch } = api.bookmark.getUserBookmarks.useQuery();

  const addBookmarkMutation = api.bookmark.addBookmark.useMutation({
    onSuccess: () => {
      refetch();
    },
    onError: (_error) => {
      alert('There was an issue adding this bookmark.');
    },
  });

  const removeBookmarkMutation = api.bookmark.removeBookmark.useMutation({
    onSuccess: () => {
      refetch();
    },
    onError: (_error) => {
      alert('There was an issue removing this bookmark.');
    },
  });

  const toggleBookmark = async (scholarshipId: number) => {
    if (bookmarks?.some((b) => b.scholarshipId === scholarshipId)) {
      await removeBookmarkMutation.mutateAsync({ scholarshipId });
    } else {
      await addBookmarkMutation.mutateAsync({ scholarshipId });
    }
  };

  return { bookmarks, toggleBookmark };
};

export default useBookmark;
