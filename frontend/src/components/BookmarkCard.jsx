import { useState } from 'react';
import { toast } from 'react-toastify';
import { Copy, Trash2, Link2 } from 'lucide-react';

const BookmarkCard = ({ bookmark, onDelete }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(bookmark.url);
    setIsCopied(true);
    toast.success('Link copied to clipboard!');
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-lg p-6 transition hover:shadow-xl duration-300 ease-in-out">
      <h3 className="text-xl font-bold text-gray-800 mb-1 line-clamp-2">{bookmark.title}</h3>

      <a
        href={bookmark.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-rose-600 hover:underline text-sm break-all"
      >
        <Link2 className="w-4 h-4 mr-1" />
        {bookmark.url}
      </a>

      {bookmark.tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {bookmark.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-rose-100 text-rose-800 px-2 py-1 rounded-full text-xs font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      <div className="mt-5 flex items-center gap-3">
        <button
          onClick={handleCopyLink}
          className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white text-sm px-3 py-1.5 rounded-full transition"
        >
          <Copy className="w-4 h-4" />
          {isCopied ? 'Copied!' : 'Copy'}
        </button>

        <button
          onClick={() => onDelete(bookmark._id)}
          className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1.5 rounded-full transition"
        >
          <Trash2 className="w-4 h-4" />
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookmarkCard;
