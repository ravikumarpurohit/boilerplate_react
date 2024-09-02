import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { checkUserToken } from "../redux/actions/authActions";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { setBusinessId } from "../redux/slices/businessStoreSlices";

const Layout = () => {
  const { user, loading } = useSelector((state) => state.auth);
  const { businessId } = useSelector((state) => state.business);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    console.log("condition == ", !user && token && !loading);
    console.log("data == ", `user ${user}, token ${token}, loading ${loading}`);
    if (!user && token && !loading) {
      dispatch(checkUserToken(token));
    } else if (!user && !token) {
      navigate("/login");
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      const businessIdLocal = localStorage.getItem("businessId");
      if (businessIdLocal && user.business.find((business)=>business._id===businessIdLocal)) {
        console.log(" id from local storage ", businessIdLocal);
        dispatch(setBusinessId(businessIdLocal));
      } else {
        console.log(" id from user bussiness  ", user.business[0]._id);

        dispatch(setBusinessId(user.business[0]._id));
      }
    }
  }, [user]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className=" relative flex h-screen">
      {/* Sidebar */}
      <Sidebar sidebarOpen={isSidebarOpen} />

      {/* Main Content */}
      <main
        className={`flex-1 flex flex-col m-2 px-4 py-5 rounded-2xl bg-[#DCE5FF] transition-margin duration-300 ease-in-out`}
      >
        {/* Header */}
        {/* <Header sidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} /> */}

        <Outlet />
      </main>
    </div>
  );
};
export default Layout;
