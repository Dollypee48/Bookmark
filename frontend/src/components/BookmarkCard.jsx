import { useState } from 'react';
import { toast } from 'react-toastify';

const BookmarkCard = ({ bookmark, onDelete }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(bookmark.url);
    setIsCopied(true);
    toast.success('Link copied to clipboard!');
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
      <h3 className="text-lg font-semibold text-gray-800">{bookmark.title}</h3>
      <a href={bookmark.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
        {bookmark.url}
      </a>
      <div className="mt-2 flex flex-wrap gap-2">
        {bookmark.tags.map((tag, index) => (
          <span key={index} className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-4 flex gap-2">
        <button
          onClick={handleCopyLink}
          className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
        >
          {isCopied ? 'Copied!' : 'Copy Link'}
        </button>
        <button
          onClick={() => onDelete(bookmark._id)}
          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookmarkCard;