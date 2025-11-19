import { useState } from "react";
import { Menu } from "lucide-react";

import { useSelector, useDispatch } from "react-redux";
import { userLogout } from "../redux/actions/authActions";
import { useNavigate } from "react-router-dom";

const Header = ({ isSidebarOpen, toggleSidebar }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const logout = () => {
    alert("Are u Sure u want to logout?");
    console.log("logged out successfully");
    localStorage.removeItem("userToken");
    dispatch(userLogout(null));
    navigate("/login");
  };

  return (
    <header className="flex bg-white p-4 shadow-md justify-between">
      <button
        onClick={toggleSidebar}
        className="text-gray-800 focus:outline-none"
      >
        <Menu size={20} />
      </button>
      {/* <h1 className="text-2xl font-semibold ml-10">Welcome to the Dashboard</h1> */}
      {/* User Profile */}
      <div className="space-x-4">
        {/* Profile Image with Dropdown */}
        <button className="" onClick={logout}>
          Logout
        </button>
        <button>Register</button>
        <div className="relative group">
          <button
            onClick={toggleDropdown}
            onBlur={closeDropdown}
            className="flex items-center space-x-2 focus:outline-none"
          >
            <img
              src={user && user.image}
              alt={`${user && user.firstName}'s Profile`}
              className="w-8 h-8 rounded-full"
            />
          </button>
          {/* Dropdown */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 bg-white border border-gray-300 rounded-md shadow-md z-10">
              <ul className="py-1">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Profile
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <button
                    onClick={logout}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
