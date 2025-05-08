import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import { FaAlignLeft, FaSortDown } from "react-icons/fa";
import { IoPersonCircleOutline } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleUser = () => setUserOpen(!userOpen);

  return (
    <nav className="bg-white w-full mb-8 shadow-md">
      <div className="flex items-center justify-between px-4 py-4 md:px-8">
        {/* Logo or Menu Icon */}
        <div className="text-blue-600 text-2xl md:hidden" onClick={toggleMenu}>
          <FaAlignLeft />
        </div>

        <div className="hidden md:block text-2xl font-semibold text-blue-600">
          Dashboard
        </div>

        {/* User Dropdown */}
        <div className="relative">
          <button
            onClick={toggleUser}
            className="bg-blue-400 flex items-center gap-2 px-4 py-1 h-9 text-white rounded-md"
          >
            <IoPersonCircleOutline />
            test user
            <FaSortDown />
          </button>

          {userOpen && (
            <div className="absolute right-0 mt-2 bg-white border rounded shadow-md w-32 z-10">
              <button className="w-full px-4 py-2 text-blue-600 hover:bg-blue-100 text-left">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 py-2 space-y-2 bg-white shadow">
          <div className="text-xl font-medium text-blue-600">Dashboard</div>
          <button
            onClick={toggleUser}
            className="flex items-center gap-2 px-4 py-2 text-white bg-blue-400 rounded-md"
          >
            <IoPersonCircleOutline />
            test user
            <FaSortDown />
          </button>
          {userOpen && (
            <div className="bg-white border rounded shadow-md w-full mt-2">
              <button className="w-full px-4 py-2 text-blue-600 hover:bg-blue-100 text-left">
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
