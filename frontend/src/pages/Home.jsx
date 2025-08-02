import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Bookmark, Search, Laptop } from 'lucide-react';

const Home = () => {
  const handleGetStarted = () => {
    toast.info('Welcome to LinkNest! Start saving your favorite links.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-gray-100 to-amber-100 text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
          Welcome to <span className="text-amber-600">LinkNest</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl text-gray-700 mb-10">
          Save, tag, and manage your favorite links. Organize effortlessly and discover fresh content shared by others.
        </p>
        <Link
          to="/bookmarks"
          onClick={handleGetStarted}
          className="px-8 py-3 bg-amber-600 text-white font-semibold rounded-full hover:bg-amber-700 transition-all duration-300 shadow-lg"
        >
          Get Started
        </Link>
      </section>

      {/* Feature Sections */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {/* Organize */}
          <div className="p-8 bg-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 animate-fadeIn">
            <Bookmark size={48} className="mx-auto text-amber-500 mb-5 animate-pulse" />
            <h3 className="text-2xl font-bold mb-3">Organize</h3>
            <p className="text-gray-600">
              Create folders and tags to sort your bookmarks your way. Find what you need, fast.
            </p>
          </div>

          {/* Discover */}
          <div className="p-8 bg-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 animate-fadeIn delay-100">
            <Search size={48} className="mx-auto text-amber-500 mb-5 animate-pulse" />
            <h3 className="text-2xl font-bold mb-3">Discover</h3>
            <p className="text-gray-600">
              Explore new and trending links curated by others. Stay inspired and informed.
            </p>
          </div>

          {/* Sync */}
          <div className="p-8 bg-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 animate-fadeIn delay-200">
            <Laptop size={48} className="mx-auto text-amber-500 mb-5 animate-pulse" />
            <h3 className="text-2xl font-bold mb-3">Sync Across Devices</h3>
            <p className="text-gray-600">
              Access your bookmarks from any device, anywhere. Your collection stays with you.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
