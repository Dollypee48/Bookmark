import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BookmarkCard from '../components/BookmarkCard';
import { toast } from 'react-toastify';

const SharedBookmarks = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      toast.error('Please log in to view shared bookmarks');
      navigate('/login');
      return;
    }
    const fetchSharedBookmarks = async () => {
      console.log('Sending token:', token); // Log token
      try {
        const response = await fetch('http://localhost:5000/api/bookmarks/shared', {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Fetched shared bookmarks:', data);
        setBookmarks(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Fetch shared bookmarks error:', error);
        toast.error('Error fetching shared bookmarks');
        setBookmarks([]);
      }
    };
    fetchSharedBookmarks();
  }, [token, navigate]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Shared Bookmarks</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.isArray(bookmarks) && bookmarks.length > 0 ? (
          bookmarks.map(bookmark => (
            <BookmarkCard key={bookmark._id} bookmark={bookmark} onDelete={() => {}} />
          ))
        ) : (
          <p className="text-gray-600">No shared bookmarks found.</p>
        )}
      </div>
    </div>
  );
};

export default SharedBookmarks;