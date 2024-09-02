import Logo from "../assets/images/Group 1.png";
import ProductLogo from "../assets/images/icons8-products-48 1.png";
import Profile from "../assets/images/profile pic.png";
import Logout from "../assets/images/icons8-chat-96 1.png";
import Setting from "../assets/images/icons8-chat-96 1 (1).png";
import { Link, useLocation } from "react-router-dom";
const Sidebar = (props) => {
  const { sidebarOpen } = props;
  const path = useLocation();
  console.log(" path ", path);
  return (
    <aside
      className={`flex flex-col bg-white relative   flex-shrink-0 ${
        sidebarOpen
          ? " transform translate-x-0 lg:w-60 w-45 max-w-60"
          : "transform -translate-x-0 sm:w-20 w-14"
      }  duration-300 ease-in-out`}
    >
      {/* Sidebar Content */}
      <div className=" flex-1 p-4 flex flex-col">
        <div className=" flex justify-center items-center gap-2">
          <img src={Logo} className=" h-12 w-12" alt="" />
          <div className=" flex flex-col items-stretch">
            <h1 className=" text-[#29166F] text-4xl tracking-wide font-medium">
              Oswal
            </h1>
            <h3 className=" text-[#6C55BF] text-xs uppercase tracking-[5px]">
              Chemicals
            </h3>
          </div>
        </div>
        <ul className=" flex-1 space-y-2 mt-5">
          <li>
            {path.pathname === "/dashboard" ? (
              <Link
                to="/dashboard"
                className="flex items-center gap-1 px-4 py-1 rounded-xl text-lg text-[#3F6FFF] bg-[#DCE5FF]"
              >
                <svg
                  width="32"
                  height="31"
                  viewBox="0 0 32 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.3333 11.625C17.7811 11.625 17.3333 11.1773 17.3333 10.625V4.875C17.3333 4.32272 17.781 3.875 18.3333 3.875H27C27.5523 3.875 28 4.32272 28 4.875V10.625C28 11.1773 27.5523 11.625 27 11.625H18.3333ZM5 16.7917C4.44772 16.7917 4 16.344 4 15.7917V4.875C4 4.32272 4.44772 3.875 5 3.875H13.6667C14.219 3.875 14.6667 4.32272 14.6667 4.875V15.7917C14.6667 16.344 14.219 16.7917 13.6667 16.7917H5ZM18.3333 27.125C17.7811 27.125 17.3333 26.6773 17.3333 26.125V15.2083C17.3333 14.656 17.781 14.2083 18.3333 14.2083H27C27.5523 14.2083 28 14.656 28 15.2083V26.125C28 26.6773 27.5523 27.125 27 27.125H18.3333ZM5 27.125C4.44772 27.125 4 26.6773 4 26.125V20.375C4 19.8227 4.44772 19.375 5 19.375H13.6667C14.219 19.375 14.6667 19.8227 14.6667 20.375V26.125C14.6667 26.6773 14.219 27.125 13.6667 27.125H5Z"
                    fill="#3F6FFF"
                  />
                </svg>
                DashBoard
              </Link>
            ) : (
              <Link
                to="/dashboard"
                className="flex items-center gap-1 px-4 py-1 rounded text-lg text-[#8AA7FF]"
              >
                <svg
                  width="32"
                  height="31"
                  viewBox="0 0 32 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.3333 11.625C17.7811 11.625 17.3333 11.1773 17.3333 10.625V4.875C17.3333 4.32272 17.781 3.875 18.3333 3.875H27C27.5523 3.875 28 4.32272 28 4.875V10.625C28 11.1773 27.5523 11.625 27 11.625H18.3333ZM5 16.7917C4.44772 16.7917 4 16.344 4 15.7917V4.875C4 4.32272 4.44772 3.875 5 3.875H13.6667C14.219 3.875 14.6667 4.32272 14.6667 4.875V15.7917C14.6667 16.344 14.219 16.7917 13.6667 16.7917H5ZM18.3333 27.125C17.7811 27.125 17.3333 26.6773 17.3333 26.125V15.2083C17.3333 14.656 17.781 14.2083 18.3333 14.2083H27C27.5523 14.2083 28 14.656 28 15.2083V26.125C28 26.6773 27.5523 27.125 27 27.125H18.3333ZM5 27.125C4.44772 27.125 4 26.6773 4 26.125V20.375C4 19.8227 4.44772 19.375 5 19.375H13.6667C14.219 19.375 14.6667 19.8227 14.6667 20.375V26.125C14.6667 26.6773 14.219 27.125 13.6667 27.125H5Z"
                    fill="#8AA7FF"
                  />
                </svg>
                DashBoard
              </Link>
            )}
          </li>
          <li>
            {path.pathname === "/products" ? (
              <Link
                to="/products"
                className="flex items-center gap-1 px-4 py-1 rounded-xl text-lg text-[#3F6FFF] bg-[#DCE5FF]"
              >
                <svg
                  width="28"
                  height="27"
                  viewBox="0 0 28 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.83333 24.75C5.19167 24.75 4.64236 24.5297 4.18542 24.0891C3.72847 23.6484 3.5 23.1187 3.5 22.5V9.81562C3.15 9.60938 2.86806 9.34219 2.65417 9.01406C2.44028 8.68594 2.33333 8.30625 2.33333 7.875V4.5C2.33333 3.88125 2.56181 3.35156 3.01875 2.91094C3.4757 2.47031 4.025 2.25 4.66667 2.25H23.3333C23.975 2.25 24.5243 2.47031 24.9813 2.91094C25.4382 3.35156 25.6667 3.88125 25.6667 4.5V7.875C25.6667 8.30625 25.5597 8.68594 25.3458 9.01406C25.1319 9.34219 24.85 9.60938 24.5 9.81562V22.5C24.5 23.1187 24.2715 23.6484 23.8146 24.0891C23.3576 24.5297 22.8083 24.75 22.1667 24.75H5.83333ZM4.66667 7.875H23.3333V4.5H4.66667V7.875ZM10.5 15.75H17.5V13.5H10.5V15.75Z"
                    fill="#3F6FFF"
                  />
                </svg>
                Products
              </Link>
            ) : (
              <Link
                to="/products"
                className="flex items-center gap-1 px-4 py-1 rounded text-lg text-[#8AA7FF]"
              >
                <svg
                  width="28"
                  height="27"
                  viewBox="0 0 28 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.83333 24.75C5.19167 24.75 4.64236 24.5297 4.18542 24.0891C3.72847 23.6484 3.5 23.1187 3.5 22.5V9.81562C3.15 9.60938 2.86806 9.34219 2.65417 9.01406C2.44028 8.68594 2.33333 8.30625 2.33333 7.875V4.5C2.33333 3.88125 2.56181 3.35156 3.01875 2.91094C3.4757 2.47031 4.025 2.25 4.66667 2.25H23.3333C23.975 2.25 24.5243 2.47031 24.9813 2.91094C25.4382 3.35156 25.6667 3.88125 25.6667 4.5V7.875C25.6667 8.30625 25.5597 8.68594 25.3458 9.01406C25.1319 9.34219 24.85 9.60938 24.5 9.81562V22.5C24.5 23.1187 24.2715 23.6484 23.8146 24.0891C23.3576 24.5297 22.8083 24.75 22.1667 24.75H5.83333ZM4.66667 7.875H23.3333V4.5H4.66667V7.875ZM10.5 15.75H17.5V13.5H10.5V15.75Z"
                    fill="#8AA7FF"
                  />
                </svg>
                Products
              </Link>
            )}
          </li>
          <li>
            {path.pathname === "/inquiries" ? (
              <Link
                to="/inquiries"
                className="flex items-center gap-1 px-4 py-1 rounded-xl text-lg text-[#3F6FFF] bg-[#DCE5FF]"
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.9417 21C14.35 21 14.6951 20.859 14.9771 20.5771C15.259 20.2951 15.4 19.95 15.4 19.5416C15.4 19.1333 15.259 18.7882 14.9771 18.5062C14.6951 18.2243 14.35 18.0833 13.9417 18.0833C13.5333 18.0833 13.1882 18.2243 12.9063 18.5062C12.6243 18.7882 12.4833 19.1333 12.4833 19.5416C12.4833 19.95 12.6243 20.2951 12.9063 20.5771C13.1882 20.859 13.5333 21 13.9417 21ZM12.8917 16.5083H15.05C15.05 15.8666 15.1229 15.3611 15.2688 14.9916C15.4146 14.6222 15.8278 14.1166 16.5083 13.475C17.0139 12.9694 17.4125 12.4882 17.7042 12.0312C17.9958 11.5743 18.1417 11.025 18.1417 10.3833C18.1417 9.29442 17.7431 8.45831 16.9458 7.87498C16.1486 7.29165 15.2056 6.99998 14.1167 6.99998C13.0083 6.99998 12.109 7.29165 11.4188 7.87498C10.7285 8.45831 10.2472 9.15831 9.975 9.97498L11.9 10.7333C11.9972 10.3833 12.216 10.0041 12.5563 9.59581C12.8965 9.18748 13.4167 8.98331 14.1167 8.98331C14.7389 8.98331 15.2056 9.15345 15.5167 9.49373C15.8278 9.83401 15.9833 10.2083 15.9833 10.6166C15.9833 11.0055 15.8667 11.3701 15.6333 11.7104C15.4 12.0507 15.1083 12.3666 14.7583 12.6583C13.9028 13.4166 13.3778 13.9903 13.1833 14.3791C12.9889 14.768 12.8917 15.4778 12.8917 16.5083ZM14 25.6666C12.3861 25.6666 10.8694 25.3604 9.45 24.7479C8.03056 24.1354 6.79583 23.3041 5.74583 22.2541C4.69583 21.2041 3.86458 19.9694 3.25208 18.55C2.63958 17.1305 2.33333 15.6139 2.33333 14C2.33333 12.3861 2.63958 10.8694 3.25208 9.44998C3.86458 8.03054 4.69583 6.79581 5.74583 5.74581C6.79583 4.69581 8.03056 3.86456 9.45 3.25206C10.8694 2.63956 12.3861 2.33331 14 2.33331C15.6139 2.33331 17.1306 2.63956 18.55 3.25206C19.9694 3.86456 21.2042 4.69581 22.2542 5.74581C23.3042 6.79581 24.1354 8.03054 24.7479 9.44998C25.3604 10.8694 25.6667 12.3861 25.6667 14C25.6667 15.6139 25.3604 17.1305 24.7479 18.55C24.1354 19.9694 23.3042 21.2041 22.2542 22.2541C21.2042 23.3041 19.9694 24.1354 18.55 24.7479C17.1306 25.3604 15.6139 25.6666 14 25.6666Z"
                    fill="#3F6FFF"
                  />
                </svg>
                Inquiries
              </Link>
            ) : (
              <Link
                to="/inquiries"
                className="flex items-center gap-1 px-4 py-1 rounded text-lg text-[#8AA7FF]"
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.9417 21C14.35 21 14.6951 20.859 14.9771 20.5771C15.259 20.2951 15.4 19.95 15.4 19.5416C15.4 19.1333 15.259 18.7882 14.9771 18.5062C14.6951 18.2243 14.35 18.0833 13.9417 18.0833C13.5333 18.0833 13.1882 18.2243 12.9063 18.5062C12.6243 18.7882 12.4833 19.1333 12.4833 19.5416C12.4833 19.95 12.6243 20.2951 12.9063 20.5771C13.1882 20.859 13.5333 21 13.9417 21ZM12.8917 16.5083H15.05C15.05 15.8666 15.1229 15.3611 15.2688 14.9916C15.4146 14.6222 15.8278 14.1166 16.5083 13.475C17.0139 12.9694 17.4125 12.4882 17.7042 12.0312C17.9958 11.5743 18.1417 11.025 18.1417 10.3833C18.1417 9.29442 17.7431 8.45831 16.9458 7.87498C16.1486 7.29165 15.2056 6.99998 14.1167 6.99998C13.0083 6.99998 12.109 7.29165 11.4188 7.87498C10.7285 8.45831 10.2472 9.15831 9.975 9.97498L11.9 10.7333C11.9972 10.3833 12.216 10.0041 12.5563 9.59581C12.8965 9.18748 13.4167 8.98331 14.1167 8.98331C14.7389 8.98331 15.2056 9.15345 15.5167 9.49373C15.8278 9.83401 15.9833 10.2083 15.9833 10.6166C15.9833 11.0055 15.8667 11.3701 15.6333 11.7104C15.4 12.0507 15.1083 12.3666 14.7583 12.6583C13.9028 13.4166 13.3778 13.9903 13.1833 14.3791C12.9889 14.768 12.8917 15.4778 12.8917 16.5083ZM14 25.6666C12.3861 25.6666 10.8694 25.3604 9.45 24.7479C8.03056 24.1354 6.79583 23.3041 5.74583 22.2541C4.69583 21.2041 3.86458 19.9694 3.25208 18.55C2.63958 17.1305 2.33333 15.6139 2.33333 14C2.33333 12.3861 2.63958 10.8694 3.25208 9.44998C3.86458 8.03054 4.69583 6.79581 5.74583 5.74581C6.79583 4.69581 8.03056 3.86456 9.45 3.25206C10.8694 2.63956 12.3861 2.33331 14 2.33331C15.6139 2.33331 17.1306 2.63956 18.55 3.25206C19.9694 3.86456 21.2042 4.69581 22.2542 5.74581C23.3042 6.79581 24.1354 8.03054 24.7479 9.44998C25.3604 10.8694 25.6667 12.3861 25.6667 14C25.6667 15.6139 25.3604 17.1305 24.7479 18.55C24.1354 19.9694 23.3042 21.2041 22.2542 22.2541C21.2042 23.3041 19.9694 24.1354 18.55 24.7479C17.1306 25.3604 15.6139 25.6666 14 25.6666Z"
                    fill="#8AA7FF"
                  />
                </svg>
                Inquiries
              </Link>
            )}
          </li>
          <li>
            {path.pathname === "/orders" ? (
              <Link
                to="/orders"
                className="flex items-center gap-1 px-4 py-1 rounded-xl text-lg text-[#3F6FFF] bg-[#DCE5FF]"
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 25C5.44772 25 5 24.5523 5 24V9.09346C5 8.94952 4.96892 8.80727 4.9089 8.67644L2.97496 4.46144C2.74643 3.96338 2.96133 3.37417 3.45685 3.14017L3.90314 2.92942C4.40453 2.69265 5.00285 2.90905 5.23679 3.41177L7.48098 8.2344C7.64507 8.58701 7.99871 8.8125 8.38763 8.8125H21.6124C22.0013 8.8125 22.3549 8.58701 22.519 8.2344L24.7632 3.41177C24.9972 2.90905 25.5955 2.69265 26.0969 2.92942L26.5432 3.14017C27.0387 3.37416 27.2536 3.96338 27.025 4.46144L25.0911 8.67644C25.0311 8.80727 25 8.94952 25 9.09346V24C25 24.5523 24.5523 25 24 25H6ZM12.5 16.25H17.5C17.8542 16.25 18.151 16.1302 18.3906 15.8906C18.6302 15.651 18.75 15.3542 18.75 15C18.75 14.6458 18.6302 14.349 18.3906 14.1094C18.151 13.8698 17.8542 13.75 17.5 13.75H12.5C12.1458 13.75 11.849 13.8698 11.6094 14.1094C11.3698 14.349 11.25 14.6458 11.25 15C11.25 15.3542 11.3698 15.651 11.6094 15.8906C11.849 16.1302 12.1458 16.25 12.5 16.25Z"
                    fill="#3F6FFF"
                  />
                </svg>
                Orders
              </Link>
            ) : (
              <Link
                to="/orders"
                className="flex items-center gap-1 px-4 py-1 rounded text-lg text-[#8AA7FF]"
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 25C5.44772 25 5 24.5523 5 24V9.09346C5 8.94952 4.96892 8.80727 4.9089 8.67644L2.97496 4.46144C2.74643 3.96338 2.96133 3.37417 3.45685 3.14017L3.90314 2.92942C4.40453 2.69265 5.00285 2.90905 5.23679 3.41177L7.48098 8.2344C7.64507 8.58701 7.99871 8.8125 8.38763 8.8125H21.6124C22.0013 8.8125 22.3549 8.58701 22.519 8.2344L24.7632 3.41177C24.9972 2.90905 25.5955 2.69265 26.0969 2.92942L26.5432 3.14017C27.0387 3.37416 27.2536 3.96338 27.025 4.46144L25.0911 8.67644C25.0311 8.80727 25 8.94952 25 9.09346V24C25 24.5523 24.5523 25 24 25H6ZM12.5 16.25H17.5C17.8542 16.25 18.151 16.1302 18.3906 15.8906C18.6302 15.651 18.75 15.3542 18.75 15C18.75 14.6458 18.6302 14.349 18.3906 14.1094C18.151 13.8698 17.8542 13.75 17.5 13.75H12.5C12.1458 13.75 11.849 13.8698 11.6094 14.1094C11.3698 14.349 11.25 14.6458 11.25 15C11.25 15.3542 11.3698 15.651 11.6094 15.8906C11.849 16.1302 12.1458 16.25 12.5 16.25Z"
                    fill="#8AA7FF"
                  />
                </svg>
                Orders
              </Link>
            )}
          </li>
          <li>
            {path.pathname === "/expenses" ? (
              <Link
                to="/expenses"
                className="flex items-center gap-1 px-4 py-1 rounded-xl text-lg text-[#3F6FFF] bg-[#DCE5FF]"
              >
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.5 23.8333C5.59722 23.8333 4.82986 23.5173 4.19792 22.8854C3.56597 22.2534 3.25 21.4861 3.25 20.5833V17.3333H6.5V2.16663L8.125 3.79163L9.75 2.16663L11.375 3.79163L13 2.16663L14.625 3.79163L16.25 2.16663L17.875 3.79163L19.5 2.16663L21.125 3.79163L22.75 2.16663V20.5833C22.75 21.4861 22.434 22.2534 21.8021 22.8854C21.1701 23.5173 20.4028 23.8333 19.5 23.8333H6.5ZM19.5 21.6666C19.8069 21.6666 20.0642 21.5628 20.2719 21.3552C20.4795 21.1475 20.5833 20.8902 20.5833 20.5833V5.41663H8.66667V17.3333H18.4167V20.5833C18.4167 20.8902 18.5205 21.1475 18.7281 21.3552C18.9358 21.5628 19.1931 21.6666 19.5 21.6666ZM9.75 9.74996V7.58329H16.25V9.74996H9.75ZM9.75 13V10.8333H16.25V13H9.75ZM18.4167 9.74996C18.1097 9.74996 17.8524 9.64614 17.6448 9.4385C17.4372 9.23086 17.3333 8.97357 17.3333 8.66663C17.3333 8.35968 17.4372 8.10239 17.6448 7.89475C17.8524 7.68711 18.1097 7.58329 18.4167 7.58329C18.7236 7.58329 18.9809 7.68711 19.1885 7.89475C19.3962 8.10239 19.5 8.35968 19.5 8.66663C19.5 8.97357 19.3962 9.23086 19.1885 9.4385C18.9809 9.64614 18.7236 9.74996 18.4167 9.74996ZM18.4167 13C18.1097 13 17.8524 12.8961 17.6448 12.6885C17.4372 12.4809 17.3333 12.2236 17.3333 11.9166C17.3333 11.6097 17.4372 11.3524 17.6448 11.1447C17.8524 10.9371 18.1097 10.8333 18.4167 10.8333C18.7236 10.8333 18.9809 10.9371 19.1885 11.1447C19.3962 11.3524 19.5 11.6097 19.5 11.9166C19.5 12.2236 19.3962 12.4809 19.1885 12.6885C18.9809 12.8961 18.7236 13 18.4167 13Z"
                    fill="#3F6FFF"
                  />
                </svg>
                Expenses
              </Link>
            ) : (
              <Link
                to="/expenses"
                className="flex items-center gap-1 px-4 py-1 rounded text-lg text-[#8AA7FF]"
              >
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.5 23.8333C5.59722 23.8333 4.82986 23.5173 4.19792 22.8854C3.56597 22.2534 3.25 21.4861 3.25 20.5833V17.3333H6.5V2.16663L8.125 3.79163L9.75 2.16663L11.375 3.79163L13 2.16663L14.625 3.79163L16.25 2.16663L17.875 3.79163L19.5 2.16663L21.125 3.79163L22.75 2.16663V20.5833C22.75 21.4861 22.434 22.2534 21.8021 22.8854C21.1701 23.5173 20.4028 23.8333 19.5 23.8333H6.5ZM19.5 21.6666C19.8069 21.6666 20.0642 21.5628 20.2719 21.3552C20.4795 21.1475 20.5833 20.8902 20.5833 20.5833V5.41663H8.66667V17.3333H18.4167V20.5833C18.4167 20.8902 18.5205 21.1475 18.7281 21.3552C18.9358 21.5628 19.1931 21.6666 19.5 21.6666ZM9.75 9.74996V7.58329H16.25V9.74996H9.75ZM9.75 13V10.8333H16.25V13H9.75ZM18.4167 9.74996C18.1097 9.74996 17.8524 9.64614 17.6448 9.4385C17.4372 9.23086 17.3333 8.97357 17.3333 8.66663C17.3333 8.35968 17.4372 8.10239 17.6448 7.89475C17.8524 7.68711 18.1097 7.58329 18.4167 7.58329C18.7236 7.58329 18.9809 7.68711 19.1885 7.89475C19.3962 8.10239 19.5 8.35968 19.5 8.66663C19.5 8.97357 19.3962 9.23086 19.1885 9.4385C18.9809 9.64614 18.7236 9.74996 18.4167 9.74996ZM18.4167 13C18.1097 13 17.8524 12.8961 17.6448 12.6885C17.4372 12.4809 17.3333 12.2236 17.3333 11.9166C17.3333 11.6097 17.4372 11.3524 17.6448 11.1447C17.8524 10.9371 18.1097 10.8333 18.4167 10.8333C18.7236 10.8333 18.9809 10.9371 19.1885 11.1447C19.3962 11.3524 19.5 11.6097 19.5 11.9166C19.5 12.2236 19.3962 12.4809 19.1885 12.6885C18.9809 12.8961 18.7236 13 18.4167 13Z"
                    fill="#8AA7FF"
                  />
                </svg>
                Expenses
              </Link>
            )}
          </li>
          <li>
            {path.pathname === "/tasks" ? (
              <Link
                to="/tasks"
                className="flex items-center gap-1 px-4 py-1 rounded-xl text-lg text-[#3F6FFF] bg-[#DCE5FF]"
              >
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.8625 19.5L17.9833 13.3791L16.4125 11.8083L11.8354 16.3854L9.56042 14.1104L8.01667 15.6541L11.8625 19.5ZM6.5 23.8333C5.90417 23.8333 5.3941 23.6211 4.96979 23.1968C4.54549 22.7725 4.33333 22.2625 4.33333 21.6666V4.33329C4.33333 3.73746 4.54549 3.22739 4.96979 2.80308C5.3941 2.37878 5.90417 2.16663 6.5 2.16663H15.1667L21.6667 8.66663V21.6666C21.6667 22.2625 21.4545 22.7725 21.0302 23.1968C20.6059 23.6211 20.0958 23.8333 19.5 23.8333H6.5ZM14.0833 9.74996H19.5L14.0833 4.33329V9.74996Z"
                    fill="#3F6FFF"
                  />
                </svg>
                Tasks
              </Link>
            ) : (
              <Link
                to="/tasks"
                className="flex items-center gap-1 px-4 py-1 rounded text-lg text-[#8AA7FF]"
              >
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.8625 19.5L17.9833 13.3791L16.4125 11.8083L11.8354 16.3854L9.56042 14.1104L8.01667 15.6541L11.8625 19.5ZM6.5 23.8333C5.90417 23.8333 5.3941 23.6211 4.96979 23.1968C4.54549 22.7725 4.33333 22.2625 4.33333 21.6666V4.33329C4.33333 3.73746 4.54549 3.22739 4.96979 2.80308C5.3941 2.37878 5.90417 2.16663 6.5 2.16663H15.1667L21.6667 8.66663V21.6666C21.6667 22.2625 21.4545 22.7725 21.0302 23.1968C20.6059 23.6211 20.0958 23.8333 19.5 23.8333H6.5ZM14.0833 9.74996H19.5L14.0833 4.33329V9.74996Z"
                    fill="#8AA7FF"
                  />
                </svg>
                Tasks
              </Link>
            )}
          </li>
          <li>
            {path.pathname === "/dailyWork" ? (
              <Link
                to="/dailyWork"
                className="flex items-center gap-1 px-4 py-1 rounded-xl text-lg text-[#3F6FFF] bg-[#DCE5FF]"
              >
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.8625 19.8791L8.01667 16.0333L9.5875 14.4625L11.8625 16.7375L16.4125 12.1875L17.9833 13.7583L11.8625 19.8791ZM5.41667 23.8333C4.82083 23.8333 4.31076 23.6211 3.88646 23.1968C3.46215 22.7725 3.25 22.2625 3.25 21.6666V6.49996C3.25 5.90413 3.46215 5.39406 3.88646 4.96975C4.31076 4.54545 4.82083 4.33329 5.41667 4.33329H6.5V2.16663H8.66667V4.33329H17.3333V2.16663H19.5V4.33329H20.5833C21.1792 4.33329 21.6892 4.54545 22.1135 4.96975C22.5378 5.39406 22.75 5.90413 22.75 6.49996V21.6666C22.75 22.2625 22.5378 22.7725 22.1135 23.1968C21.6892 23.6211 21.1792 23.8333 20.5833 23.8333H5.41667ZM5.41667 21.6666H20.5833V10.8333H5.41667V21.6666Z"
                    fill="#3F6FFF"
                  />
                </svg>
                Daily Work
              </Link>
            ) : (
              <Link
                to="/dailyWork"
                className="flex items-center gap-1 px-4 py-1 rounded text-lg text-[#8AA7FF]"
              >
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.8625 19.8791L8.01667 16.0333L9.5875 14.4625L11.8625 16.7375L16.4125 12.1875L17.9833 13.7583L11.8625 19.8791ZM5.41667 23.8333C4.82083 23.8333 4.31076 23.6211 3.88646 23.1968C3.46215 22.7725 3.25 22.2625 3.25 21.6666V6.49996C3.25 5.90413 3.46215 5.39406 3.88646 4.96975C4.31076 4.54545 4.82083 4.33329 5.41667 4.33329H6.5V2.16663H8.66667V4.33329H17.3333V2.16663H19.5V4.33329H20.5833C21.1792 4.33329 21.6892 4.54545 22.1135 4.96975C22.5378 5.39406 22.75 5.90413 22.75 6.49996V21.6666C22.75 22.2625 22.5378 22.7725 22.1135 23.1968C21.6892 23.6211 21.1792 23.8333 20.5833 23.8333H5.41667ZM5.41667 21.6666H20.5833V10.8333H5.41667V21.6666Z"
                    fill="#8AA7FF"
                  />
                </svg>
                Daily Work
              </Link>
            )}
          </li>
          <li>
            {path.pathname === "/track" ? (
              <Link
                to="/track"
                className="flex items-center gap-1 px-4 py-1 rounded-xl text-lg text-[#3F6FFF] bg-[#DCE5FF]"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 12C12.55 12 13.0208 11.8042 13.4125 11.4125C13.8042 11.0208 14 10.55 14 10C14 9.45 13.8042 8.97917 13.4125 8.5875C13.0208 8.19583 12.55 8 12 8C11.45 8 10.9792 8.19583 10.5875 8.5875C10.1958 8.97917 10 9.45 10 10C10 10.55 10.1958 11.0208 10.5875 11.4125C10.9792 11.8042 11.45 12 12 12ZM12 22C9.31667 19.7167 7.3125 17.5958 5.9875 15.6375C4.6625 13.6792 4 11.8667 4 10.2C4 7.7 4.80417 5.70833 6.4125 4.225C8.02083 2.74167 9.88333 2 12 2C14.1167 2 15.9792 2.74167 17.5875 4.225C19.1958 5.70833 20 7.7 20 10.2C20 11.8667 19.3375 13.6792 18.0125 15.6375C16.6875 17.5958 14.6833 19.7167 12 22Z"
                    fill="#3F6FFF"
                  />
                </svg>
                Track Location
              </Link>
            ) : (
              <Link
                to="/track"
                className="flex items-center gap-1 px-4 py-1 rounded text-lg text-[#8AA7FF]"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 12C12.55 12 13.0208 11.8042 13.4125 11.4125C13.8042 11.0208 14 10.55 14 10C14 9.45 13.8042 8.97917 13.4125 8.5875C13.0208 8.19583 12.55 8 12 8C11.45 8 10.9792 8.19583 10.5875 8.5875C10.1958 8.97917 10 9.45 10 10C10 10.55 10.1958 11.0208 10.5875 11.4125C10.9792 11.8042 11.45 12 12 12ZM12 22C9.31667 19.7167 7.3125 17.5958 5.9875 15.6375C4.6625 13.6792 4 11.8667 4 10.2C4 7.7 4.80417 5.70833 6.4125 4.225C8.02083 2.74167 9.88333 2 12 2C14.1167 2 15.9792 2.74167 17.5875 4.225C19.1958 5.70833 20 7.7 20 10.2C20 11.8667 19.3375 13.6792 18.0125 15.6375C16.6875 17.5958 14.6833 19.7167 12 22Z"
                    fill="#8AA7FF"
                  />
                </svg>
                Track Location
              </Link>
            )}
          </li>
          <li>
            {path.pathname === "/users" ? (
              <Link
                to="/users"
                className="flex items-center gap-1 px-4 py-1 rounded-xl text-lg text-[#3F6FFF] bg-[#DCE5FF]"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 20V17.2C1 16.6333 1.14583 16.1125 1.4375 15.6375C1.72917 15.1625 2.11667 14.8 2.6 14.55C3.63333 14.0333 4.68333 13.6458 5.75 13.3875C6.81667 13.1292 7.9 13 9 13C10.1 13 11.1833 13.1292 12.25 13.3875C13.3167 13.6458 14.3667 14.0333 15.4 14.55C15.8833 14.8 16.2708 15.1625 16.5625 15.6375C16.8542 16.1125 17 16.6333 17 17.2V20H1ZM19 20V17C19 16.2667 18.7958 15.5625 18.3875 14.8875C17.9792 14.2125 17.4 13.6333 16.65 13.15C17.5 13.25 18.3 13.4208 19.05 13.6625C19.8 13.9042 20.5 14.2 21.15 14.55C21.75 14.8833 22.2083 15.2542 22.525 15.6625C22.8417 16.0708 23 16.5167 23 17V20H19ZM9 12C7.9 12 6.95833 11.6083 6.175 10.825C5.39167 10.0417 5 9.1 5 8C5 6.9 5.39167 5.95833 6.175 5.175C6.95833 4.39167 7.9 4 9 4C10.1 4 11.0417 4.39167 11.825 5.175C12.6083 5.95833 13 6.9 13 8C13 9.1 12.6083 10.0417 11.825 10.825C11.0417 11.6083 10.1 12 9 12ZM19 8C19 9.1 18.6083 10.0417 17.825 10.825C17.0417 11.6083 16.1 12 15 12C14.8167 12 14.5833 11.9792 14.3 11.9375C14.0167 11.8958 13.7833 11.85 13.6 11.8C14.05 11.2667 14.3958 10.675 14.6375 10.025C14.8792 9.375 15 8.7 15 8C15 7.3 14.8792 6.625 14.6375 5.975C14.3958 5.325 14.05 4.73333 13.6 4.2C13.8333 4.11667 14.0667 4.0625 14.3 4.0375C14.5333 4.0125 14.7667 4 15 4C16.1 4 17.0417 4.39167 17.825 5.175C18.6083 5.95833 19 6.9 19 8Z"
                    fill="#3F6FFF"
                  />
                </svg>
                Users
              </Link>
            ) : (
              <Link
                to="/users"
                className="flex items-center gap-1 px-4 py-1 rounded text-lg text-[#8AA7FF]"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 20V17.2C1 16.6333 1.14583 16.1125 1.4375 15.6375C1.72917 15.1625 2.11667 14.8 2.6 14.55C3.63333 14.0333 4.68333 13.6458 5.75 13.3875C6.81667 13.1292 7.9 13 9 13C10.1 13 11.1833 13.1292 12.25 13.3875C13.3167 13.6458 14.3667 14.0333 15.4 14.55C15.8833 14.8 16.2708 15.1625 16.5625 15.6375C16.8542 16.1125 17 16.6333 17 17.2V20H1ZM19 20V17C19 16.2667 18.7958 15.5625 18.3875 14.8875C17.9792 14.2125 17.4 13.6333 16.65 13.15C17.5 13.25 18.3 13.4208 19.05 13.6625C19.8 13.9042 20.5 14.2 21.15 14.55C21.75 14.8833 22.2083 15.2542 22.525 15.6625C22.8417 16.0708 23 16.5167 23 17V20H19ZM9 12C7.9 12 6.95833 11.6083 6.175 10.825C5.39167 10.0417 5 9.1 5 8C5 6.9 5.39167 5.95833 6.175 5.175C6.95833 4.39167 7.9 4 9 4C10.1 4 11.0417 4.39167 11.825 5.175C12.6083 5.95833 13 6.9 13 8C13 9.1 12.6083 10.0417 11.825 10.825C11.0417 11.6083 10.1 12 9 12ZM19 8C19 9.1 18.6083 10.0417 17.825 10.825C17.0417 11.6083 16.1 12 15 12C14.8167 12 14.5833 11.9792 14.3 11.9375C14.0167 11.8958 13.7833 11.85 13.6 11.8C14.05 11.2667 14.3958 10.675 14.6375 10.025C14.8792 9.375 15 8.7 15 8C15 7.3 14.8792 6.625 14.6375 5.975C14.3958 5.325 14.05 4.73333 13.6 4.2C13.8333 4.11667 14.0667 4.0625 14.3 4.0375C14.5333 4.0125 14.7667 4 15 4C16.1 4 17.0417 4.39167 17.825 5.175C18.6083 5.95833 19 6.9 19 8Z"
                    fill="#8AA7FF"
                  />
                </svg>
                Users
              </Link>
            )}
          </li>
          <li>
            {path.pathname === "/customers" ? (
              <Link
                to="/customers"
                className="flex items-center gap-1 px-4 py-1 rounded-xl text-lg text-[#3F6FFF] bg-[#DCE5FF]"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 12C10.9 12 9.95833 11.6083 9.175 10.825C8.39167 10.0417 8 9.1 8 8C8 6.9 8.39167 5.95833 9.175 5.175C9.95833 4.39167 10.9 4 12 4C13.1 4 14.0417 4.39167 14.825 5.175C15.6083 5.95833 16 6.9 16 8C16 9.1 15.6083 10.0417 14.825 10.825C14.0417 11.6083 13.1 12 12 12ZM4 20V17.2C4 16.6333 4.14583 16.1125 4.4375 15.6375C4.72917 15.1625 5.11667 14.8 5.6 14.55C6.63333 14.0333 7.68333 13.6458 8.75 13.3875C9.81667 13.1292 10.9 13 12 13C13.1 13 14.1833 13.1292 15.25 13.3875C16.3167 13.6458 17.3667 14.0333 18.4 14.55C18.8833 14.8 19.2708 15.1625 19.5625 15.6375C19.8542 16.1125 20 16.6333 20 17.2V20H4Z"
                    fill="#3F6FFF"
                  />
                </svg>
                Customers
              </Link>
            ) : (
              <Link
                to="/customers"
                className="flex items-center gap-1 px-4 py-1 rounded text-lg text-[#8AA7FF]"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 12C10.9 12 9.95833 11.6083 9.175 10.825C8.39167 10.0417 8 9.1 8 8C8 6.9 8.39167 5.95833 9.175 5.175C9.95833 4.39167 10.9 4 12 4C13.1 4 14.0417 4.39167 14.825 5.175C15.6083 5.95833 16 6.9 16 8C16 9.1 15.6083 10.0417 14.825 10.825C14.0417 11.6083 13.1 12 12 12ZM4 20V17.2C4 16.6333 4.14583 16.1125 4.4375 15.6375C4.72917 15.1625 5.11667 14.8 5.6 14.55C6.63333 14.0333 7.68333 13.6458 8.75 13.3875C9.81667 13.1292 10.9 13 12 13C13.1 13 14.1833 13.1292 15.25 13.3875C16.3167 13.6458 17.3667 14.0333 18.4 14.55C18.8833 14.8 19.2708 15.1625 19.5625 15.6375C19.8542 16.1125 20 16.6333 20 17.2V20H4Z"
                    fill="#8AA7FF"
                  />
                </svg>
                Customers
              </Link>
            )}
          </li>
          <li>
            {path.pathname === "/chat" ? (
              <Link
                to="/chat"
                className="flex items-center gap-1 px-4 py-1 rounded-xl text-lg text-[#3F6FFF] bg-[#DCE5FF]"
              >
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.08333 22.9167V4.16671C2.08333 3.59379 2.28733 3.10334 2.69531 2.69535C3.1033 2.28737 3.59375 2.08337 4.16667 2.08337H20.8333C21.4063 2.08337 21.8967 2.28737 22.3047 2.69535C22.7127 3.10334 22.9167 3.59379 22.9167 4.16671V16.6667C22.9167 17.2396 22.7127 17.7301 22.3047 18.1381C21.8967 18.546 21.4063 18.75 20.8333 18.75H6.25L2.08333 22.9167ZM6.25 14.5834H14.5833V12.5H6.25V14.5834ZM6.25 11.4584H18.75V9.37504H6.25V11.4584ZM6.25 8.33337H18.75V6.25004H6.25V8.33337Z"
                    fill="#3F6FFF"
                  />
                </svg>
                Chat
              </Link>
            ) : (
              <Link
                to="/chat"
                className="flex items-center gap-1 px-4 py-1 rounded text-lg text-[#8AA7FF]"
              >
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.08333 22.9167V4.16671C2.08333 3.59379 2.28733 3.10334 2.69531 2.69535C3.1033 2.28737 3.59375 2.08337 4.16667 2.08337H20.8333C21.4063 2.08337 21.8967 2.28737 22.3047 2.69535C22.7127 3.10334 22.9167 3.59379 22.9167 4.16671V16.6667C22.9167 17.2396 22.7127 17.7301 22.3047 18.1381C21.8967 18.546 21.4063 18.75 20.8333 18.75H6.25L2.08333 22.9167ZM6.25 14.5834H14.5833V12.5H6.25V14.5834ZM6.25 11.4584H18.75V9.37504H6.25V11.4584ZM6.25 8.33337H18.75V6.25004H6.25V8.33337Z"
                    fill="#8AA7FF"
                  />
                </svg>
                Chat
              </Link>
            )}
          </li>
          {/* Add more sidebar menu items as needed */}
        </ul>

        <div className=" flex flex-col gap-3 bg-[#EBEBEB] rounded-xl p-3 ">
          <div className=" flex gap-2">
            <img src={Profile} className=" h-9 w-9" alt="" />
            <div>
              <h5 className=" text-sm font-medium">Bhavya</h5>
              <h6 className=" text-[#828282] font-light text-xs">Admin</h6>
            </div>
          </div>
          <div className=" flex gap-4">
            <div className=" flex gap-1 items-center">
              <img src={Setting} className=" h-5 w-5" alt="" />
              <h6 className=" text-sm">Settings</h6>
            </div>
            <div className="flex gap-1 items-center">
              <img src={Logout} className=" h-5 w-5" alt="" />
              <h6 className=" text-sm text-[#B05555]">Logout</h6>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
