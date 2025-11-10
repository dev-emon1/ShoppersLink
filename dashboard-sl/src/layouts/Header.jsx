import React, { useRef, useState } from "react";
import { FaBell, FaList } from "react-icons/fa";
import SearchInput from "../components/common/SearchInput";
import { useOutsideClick } from "../helpers/outSideClick";

const Header = ({ showSidebar, setShowSidebar }) => {
  const [open, setOpen] = useState(false);
  const notificationRef = useRef(null);
  const notification = true;

  // notification dropdown
  useOutsideClick(notificationRef, () => setOpen(false));
  return (
    <div className="fixed top-0 left-0 w-full z-[80] bg-bgSurface dark:bg-bgDark shadow-sm h-[70px]">
      <div className="ml-0 lg:ml-[260px] rounded-md h-[70px] flex justify-between items-center px-5 shadow-[0_0_15px_0_rgb(34_41_47_/_5%)] transition-all">
        <div className="flex items-center justify-between gap-4">
          <div
            onClick={() => setShowSidebar(!showSidebar)}
            className="w-9 h-9 flex lg:hidden rounded-full items-center justify-center bg-transparent dark:text-white text-black cursor-pointer hover:bg-[#f7941d]/90 transition-all duration-300"
          >
            <FaList />
          </div>

          <div className="hidden md:block">
            <div className="flex-1">
              <SearchInput placeholderText="Search..." />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 relative">
          {/* Notifications */}
          <div className="mr-1 text-gray-600 hover:text-gray-800 transition-colors duration-150">
            <span
              className="cursor-pointer relative"
              onClick={() => setOpen(!open)}
            >
              <FaBell className="w-5 h-5" />
              {notification && (
                <span className="absolute -top-2 -right-[2px] flex justify-center items-center rounded-full bg-red text-white text-[9px] p-[3px] w-4 h-4">
                  2
                </span>
              )}
            </span>
            {open && (
              <div
                ref={notificationRef}
                className="absolute top-12 right-0 w-[250px] h-[200px] bg-white text-black text-xs p-4 shadow-sm"
              >
                <div className="flex justify-between items-center mb-2 pb-1 text-xs font-medium text-gray-600 shadow-sm">
                  <span>Notifications</span>
                  <span>Clear all</span>
                </div>
              </div>
            )}
          </div>

          {/* Profile Image */}
          <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-300">
            <img
              src="http://localhost:5173/images/admin.webp"
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Profile Name Dropdown */}
          <div className="flex justify-center items-center gap-1 group cursor-pointer text-slate-800 text-sm relative">
            <div className="hidden md:block">
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-gray-500">Administrator</p>
            </div>

            <ul className="absolute top-[35px] right-0 rounded-md text-black p-3 w-36 flex flex-col gap-2 bg-white shadow-md opacity-0 invisible pointer-events-none transform translate-y-3 transition-all duration-200 group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto group-hover:translate-y-0 z-50">
              <li className="text-sm text-gray-700 cursor-pointer hover:bg-gray-100 p-1 rounded">
                Profile
              </li>
              <li className="text-sm text-gray-700 cursor-pointer hover:bg-gray-100 p-1 rounded">
                Settings
              </li>
              <li className="text-sm text-gray-700 cursor-pointer hover:bg-gray-100 p-1 rounded">
                Logout
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
