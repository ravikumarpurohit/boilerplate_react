import { Home, FileText  } from "lucide-react";

const Sidebar = ({ sidebarOpen }) => {
  return (
    <aside
      className={`bg-white text-black h-screen w-${
        sidebarOpen ? "64" : "20"
      } transition-all duration-300 ease-in-out shadow-md`}
    >
      {/* Sidebar Content */}
      <div className="p-4 pl-6">
        <h1
          className={`text-2xl font-semibold mb-4 transition-all duration-300 ${
            sidebarOpen ? "pl-10" : "text-center text-xl"
          }`}
        >
          {sidebarOpen ? "Store App" : "SA"}
        </h1>
        <ul className="space-y-2 pt-6">
          <li>
            <a
              href="/"
              className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 rounded"
            >
              <Home size={20} />
              {sidebarOpen && <span>Dashboard Home</span>}
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 rounded"
            >
              <FileText size={20} />
              {sidebarOpen && <span>Reports</span>}
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
