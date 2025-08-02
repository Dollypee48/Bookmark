const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} BookmarkApp. All rights reserved.</p>
        <p className="text-sm mt-2">
          Built with <span className="text-red-400">&hearts;</span> for sharing knowledge.
        </p>
      </div>
    </footer>
  );
};

export default Footer;