import BookmarkHeader from '~/components/boomarks/bookmarkheader';
import BookmarkList from '~/components/boomarks/bookmarklist';

const BookmarksPage = () => {
  return (
    <div className="container mx-auto py-12">
      <BookmarkHeader />
      <div className="mt-8">
        <BookmarkList />
      </div>
    </div>
  );
};

export default BookmarksPage;
