const Sidebar = (props) => {
  const { sidebarOpen } = props;
  return (
    <aside
      className={`bg-gray-800 text-white w-64 flex-shrink-0  transition-transform duration-300 ease-in-out ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Sidebar Content */}
      <div className="p-4">
        <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
        <ul className="space-y-2">
          <li>
            <a href="#" className="block bg-gray-700 px-4 py-2 rounded">
              Dashboard Home
            </a>
          </li>
          <li>
            <a href="#" className="block bg-gray-700 px-4 py-2 rounded">
              Reports
            </a>
          </li>
          {/* Add more sidebar menu items as needed */}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
