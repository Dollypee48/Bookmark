import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { LogOut, UserPlus, LogIn, BookOpenText } from "lucide-react";

const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    toast.success("Logged out successfully!");
    setTimeout(() => navigate("/"), 0);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Brand Logo */}
        <NavLink to="/" className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-500">
          LinkNest
        </NavLink>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-3 py-1 rounded-full text-sm font-medium transition ${
                isActive ? "bg-amber-400 text-white" : "hover:bg-amber-100 text-gray-700"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `px-3 py-1 rounded-full text-sm font-medium transition ${
                isActive ? "bg-amber-400 text-white" : "hover:bg-amber-100 text-gray-700"
              }`
            }
          >
            About
          </NavLink>
        </div>

        {/* Right: Auth Actions */}
        <div className="flex items-center space-x-4">
          {token ? (
            <>
              <NavLink
                to="/bookmarks"
                className={({ isActive }) =>
                  `flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium transition ${
                    isActive ? "bg-amber-400 text-white" : "hover:bg-amber-100 text-gray-700"
                  }`
                }
              >
                <BookOpenText size={16} /> My Bookmarks
              </NavLink>
              <button
                onClick={handleLogout}
                className="flex items-center gap-1 bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-3 py-1 rounded-full transition"
              >
                <LogOut size={16} /> Logout
              </button>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium transition ${
                    isActive ? "bg-amber-400 text-white" : "hover:bg-amber-100 text-gray-700"
                  }`
                }
              >
                <LogIn size={16} /> Login
              </NavLink>
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  `flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium transition ${
                    isActive ? "bg-amber-400 text-white" : "hover:bg-amber-100 text-gray-700"
                  }`
                }
              >
                <UserPlus size={16} /> Register
              </NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
