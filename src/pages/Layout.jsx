import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { checkUserToken } from "../redux/actions/authActions";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const Layout = () => {
  const { user, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    console.log(`user data ${JSON.stringify(user)}`);
    if (!user && !loading) {
      navigate("/login");
    }
  }, [navigate, user]);

  if (!user && !loading) {
    const token = localStorage.getItem("userToken") ? localStorage.getItem("userToken") : null;
    if (token) {
      dispatch(checkUserToken(token));
    } else {
      navigate("/login");
    }
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar sidebarOpen={isSidebarOpen} />

      {/* Main Content */}
      <main className={`flex-1 p-2 ${isSidebarOpen ? "ml-0" : "-ml-64"} transition-margin duration-300 ease-in-out`}>
        {/* Header */}
        <Header sidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        {/* Main Content Area */}
        <div className="mt-2 p-4 bg-white rounded-md shadow-md w-full">
          {/* Add your dashboard content here */}
          <Outlet />
        </div>
      </main>
    </div>
  );
};
export default Layout;
