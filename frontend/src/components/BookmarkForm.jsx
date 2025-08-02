import { useState } from 'react';
import { toast } from 'react-toastify';

const BookmarkForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [tags, setTags] = useState('');
  const token = localStorage.getItem('token');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !url) {
      toast.error('Please fill in all fields');
      return;
    }

    try {
      const response = await fetch('https://bookmark44.onrender.com/api/bookmarks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title,
          url,
          tags: tags.split(',').map(tag => tag.trim()).filter(tag => tag),
        }),
      });

      if (response.ok) {
        const newBookmark = await response.json();
        onAdd(newBookmark);
        setTitle('');
        setUrl('');
        setTags('');
        toast.success('Bookmark added successfully!');
      } else {
        toast.error('Failed to add bookmark');
      }
    } catch (error) {
      toast.error('Error adding bookmark');
    }
  };

  return (
    <div className="bg-amber-50 min-h-screen flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md transition-all duration-300 animate-fade-in border border-amber-100"
      >
        <h2 className="text-3xl font-extrabold text-center text-amber-900 mb-6">Add New Bookmark</h2>
        
        <div className="space-y-5">
          <div>
            <label className="block text-amber-800 mb-1 font-medium">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
              placeholder="Bookmark title"
              required
            />
          </div>
          <div>
            <label className="block text-amber-800 mb-1 font-medium">URL</label>
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
              placeholder="https://example.com"
              required
            />
          </div>
          <div>
            <label className="block text-amber-800 mb-1 font-medium">Tags (comma-separated)</label>
            <input
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
              placeholder="e.g., design, dev, blog"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-amber-600 hover:bg-amber-700 text-white mt-6 py-2 px-4 rounded-lg font-semibold transition-all duration-300"
        >
          Save Bookmark
        </button>
      </form>
    </div>
  );
};

export default BookmarkForm;
