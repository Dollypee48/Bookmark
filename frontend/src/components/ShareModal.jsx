import { useState } from 'react';
import { toast } from 'react-toastify';

const ShareModal = ({ bookmark, onClose }) => {
  const [email, setEmail] = useState('');
  const token = localStorage.getItem('token');

  const handleShare = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error('Please enter an email address');
      return;
    }
    try {
      const response = await fetch('http://localhost:5000/api/bookmarks/share', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ bookmarkId: bookmark._id, email }),
      });
      const data = await response.json();
      if (response.ok) {
        toast.success('Bookmark shared successfully!');
        setEmail('');
        onClose();
      } else {
        toast.error(data.message || 'Failed to share bookmark');
      }
    } catch (error) {
      console.error('Share error:', error);
      toast.error('Error sharing bookmark');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Share Bookmark</h2>
        <p className="mb-4 text-gray-700">{bookmark.title}</p>
        <form onSubmit={handleShare}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email to share with"
            className="w-full p-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex gap-2">
            <button
              type="submit"
              className="flex-1 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              Share
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-300 text-gray-800 p-2 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShareModal;