import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BookmarkForm from '../components/BookmarkForm';
import BookmarkCard from '../components/BookmarkCard';
import TagFilter from '../components/TagFilter';
import { toast } from 'react-toastify';

const Bookmarks = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const [tags, setTags] = useState([]);
  const [filterTag, setFilterTag] = useState('');
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      toast.error('Please log in to view bookmarks');
      navigate('/login');
      return;
    }
    fetchBookmarks();
  }, [token, navigate]);

  const fetchBookmarks = async () => {
    try {
      const response = await fetch('https://bookmark44.onrender.com/api/bookmarks', {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setBookmarks(Array.isArray(data) ? data : []);
      const allTags = [...new Set(data.flatMap(bookmark => bookmark.tags || []))];
      setTags(allTags);
    } catch (error) {
      console.error('Fetch bookmarks error:', error);
      toast.error('Error fetching bookmarks');
      setBookmarks([]);
    }
  };

  const handleAddBookmark = (newBookmark) => {
    setBookmarks([...bookmarks, newBookmark]);
    const newTags = [...new Set([...tags, ...newBookmark.tags])];
    setTags(newTags);
  };

  const handleDeleteBookmark = async (id) => {
    try {
      const response = await fetch(`https://bookmark44.onrender.com/api/bookmarks/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.ok) {
        setBookmarks(bookmarks.filter(bookmark => bookmark._id !== id));
        toast.success('Bookmark deleted successfully!');
      } else {
        toast.error('Failed to delete bookmark');
      }
    } catch (error) {
      toast.error('Error deleting bookmark');
    }
  };

  const filteredBookmarks = filterTag
    ? bookmarks.filter(bookmark => bookmark.tags.includes(filterTag))
    : bookmarks;

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-gray-100 to-amber-100 py-10 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">📌 My Bookmarks</h1>

        <div className="bg-white shadow-md rounded-xl p-6 mb-8">
          <BookmarkForm onAdd={handleAddBookmark} />
        </div>

       
        {tags.length > 0 && (
          <div className="mb-6">
            <TagFilter tags={tags} onFilter={setFilterTag} />
          </div>
        )}

       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBookmarks.length > 0 ? (
            filteredBookmarks.map(bookmark => (
              <BookmarkCard
                key={bookmark._id}
                bookmark={bookmark}
                onDelete={handleDeleteBookmark}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-16 text-gray-600 text-lg">
              No bookmarks found. Start adding your favorite links! 🌐
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Bookmarks;
