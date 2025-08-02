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
      const response = await fetch('http://localhost:5000/api/bookmarks', {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log('Fetched bookmarks:', data);
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
    console.log('Deleting bookmark with ID:', id);
    try {
      const response = await fetch(`http://localhost:5000/api/bookmarks/${id}`, {
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
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">My Bookmarks</h1>
      <BookmarkForm onAdd={handleAddBookmark} />
      <TagFilter tags={tags} onFilter={setFilterTag} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.isArray(filteredBookmarks) && filteredBookmarks.length > 0 ? (
          filteredBookmarks.map(bookmark => (
            <BookmarkCard
              key={bookmark._id}
              bookmark={bookmark}
              onDelete={handleDeleteBookmark}
            />
          ))
        ) : (
          <p className="text-gray-600">No bookmarks found.</p>
        )}
      </div>
    </div>
  );
};

export default Bookmarks;