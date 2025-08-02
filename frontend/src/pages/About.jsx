const About = () => {
  return (
    <div className="container mx-auto p-4 flex justify-center items-center min-h-[calc(100vh-8rem)]">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">About BookmarkApp</h1>
        <p className="text-gray-600 mb-4">
          BookmarkApp is a simple and intuitive tool designed to help you save, organize, and manage your favorite links. Whether it’s articles, tutorials, or websites, you can store them all in one place with ease.
        </p>
        <h2 className="text-xl font-semibold mb-2 text-gray-800">Features</h2>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Save bookmarks with custom titles and URLs.</li>
          <li>Add tags to organize and filter your bookmarks.</li>
          <li>Secure user authentication to keep your bookmarks private.</li>
          <li>Delete bookmarks you no longer need.</li>
        </ul>
        <p className="text-gray-600">
          Get started by registering or logging in, and begin organizing your web resources today!
        </p>
      </div>
    </div>
  );
};

export default About;