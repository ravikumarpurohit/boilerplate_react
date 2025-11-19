import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { checkUserToken } from "../redux/actions/authActions";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const { user, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    if (user) {
      const token = localStorage.getItem("userToken");
      const parsedToken = JSON.parse(token);
      console.log(parsedToken);
      if (parsedToken) {
        dispatch(checkUserToken(token));
      } else {
        navigate("/login");
      }
    }
  }, [dispatch, navigate, user]);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar sidebarOpen={isSidebarOpen} />

      {/* Main Content */}
      <main
        className={`flex-1 p-2 ${
          isSidebarOpen ? "ml-0" : "-ml-50"
        } transition-margin duration-300 ease-in-out`}
      >
        {/* Header */}
        <Header sidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        {/* Main Content Area */}
        <div className="mt-2 p-4 bg-white h-screen rounded-md shadow-md w-full">
          {/* Add your dashboard content here */}
          <Outlet />
        </div>
      </main>
    </div>
  );
};
export default Layout;
