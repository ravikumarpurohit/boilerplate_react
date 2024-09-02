import { useState } from "react";
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
    console.log("xddfds");
    localStorage.removeItem("userToken");
    dispatch(userLogout(null));
    navigate("/login");
  };

  return (
    <header className="flex bg-white p-4 shadow-md justify-between">
      <button onClick={toggleSidebar} className="text-gray-300 bg-red-500 z-20 focus:outline-none">
        {isSidebarOpen ? (
          <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13" />
          </svg>
        ) : (
          <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
          </svg>
        )}
      </button>
      {/* <h1 className="text-2xl font-semibold ml-10">Welcome to the Dashboard</h1> */}
      {/* User Profile */}
      <div className="space-x-4">
        {/* Profile Image with Dropdown */}
        <div className="relative group">
          <button onClick={toggleDropdown} onBlur={closeDropdown} className="flex items-center space-x-2 focus:outline-none">
            <img src={user && user.image} alt={`${user && user.firstName}'s Profile`} className="w-8 h-8 rounded-full" />
          </button>
          {/* Dropdown */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 bg-white border border-gray-300 rounded-md shadow-md z-10">
              <ul className="py-1">
                <li>
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    Profile
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    Settings
                  </a>
                </li>
                <li>
                  <button onClick={logout} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
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
