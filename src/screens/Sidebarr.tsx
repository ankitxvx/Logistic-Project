import "@fortawesome/fontawesome-free/css/all.min.css";
import { ImageIndex } from "@src/assets/AssetIndex";
import { useState } from "react";

const Sidebarr = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-full">
      <button className="lg:hidden p-4" onClick={toggleSidebar}>
        <i className="fas fa-bars text-xl"></i>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      <div
        className={`w-64 h-full bg-gray-100 p-4 transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 fixed lg:static`}
      >
        <div className="lg:hidden flex justify-end">
          <button className="p-2 text-gray-700" onClick={toggleSidebar}>
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>

        <div className="flex items-center mb-4">
          <img
            src={ImageIndex.VehicleAvatarImage}
            alt="Profile"
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <p className="text-sm font-medium">Deep Ghosh</p>
          </div>
        </div>
        <nav className="flex flex-col space-y-2">
          <a
            href="#"
            className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded-md"
          >
            <i className="fas fa-tachometer-alt mr-3"></i> Dashboard
          </a>
          <a
            href="#"
            className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded-md"
          >
            <i className="fas fa-user-tie mr-3"></i> Customers
          </a>
          <a
            href="#"
            className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded-md"
          >
            <i className="fas fa-warehouse mr-3"></i> Your Cart
          </a>
          <a
            href="#"
            className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded-md"
          >
            <i className="fas fa-balance-scale mr-3"></i> Past Orders
          </a>
          <a
            href="#"
            className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded-md"
          >
            <i className="fas fa-sync-alt mr-3"></i> Sales Order Report
          </a>
        </nav>
      </div>

      <div className="flex-grow p-4">{/* main content goes here */}</div>
    </div>
  );
};

export default Sidebarr;
