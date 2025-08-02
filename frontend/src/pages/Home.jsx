import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Home = () => {
  const handleGetStarted = () => {
    toast.info('Welcome to BookmarkApp! Start saving your favorite links.');
  };

  return (
    <div className="container mx-auto p-4 flex flex-col items-center justify-center min-h-[calc(100vh-8rem)]">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
        Welcome to BookmarkApp
      </h1>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-2xl">
        Save, tag, and share your favorite links with friends effortlessly. Organize your bookmarks with ease and discover new content shared by others.
      </p>
      <div className="flex gap-4">
        <Link
          to="/bookmarks"
          onClick={handleGetStarted}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Get Started
        </Link>
        <Link
          to="/shared"
          className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
        >
          Explore Shared Links
        </Link>
      </div>
    </div>
  );
};

export default Home;