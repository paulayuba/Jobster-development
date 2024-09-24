import React from 'react';
import { ImStatsBars } from "react-icons/im";
import { MdQueryStats } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { MdOutlineCalendarMonth } from "react-icons/md";
import logo from '../assets/logo.svg';
import { IoBarChart } from 'react-icons/io5';

const Sidebar = () => {
  return (
    <div className="bg-white w-64 h-screen flex flex-col items-start py-10 px-6 shadow-lg">
      {/* Logo Section */}
      <div className="mb-8">
        <img
          src={logo}
          alt="Jobster Logo"
          className="w-32"
        />
      </div>

      {/* Sidebar Menu */}
      <ul className="text-lg space-y-1 w-full">
        {/* Stats Item */}
        <li className="flex items-center gap-3 text-gray-600 hover:text-blue-600 hover:bg-gray-100 p-3 rounded-lg transition-colors cursor-pointer">
          <IoBarChart className="text-xl text-blue-500" />
          <span>Stats</span>
        </li>
        {/* All Jobs Item */}
        <li className="flex items-center gap-3 text-gray-600 hover:text-blue-600 hover:bg-gray-100 p-3 rounded-lg transition-colors cursor-pointer">
          <MdQueryStats className="text-xl" />
          <span>All Jobs</span>
        </li>
        {/* Add Jobs Item */}
        <li className="flex items-center gap-3 text-gray-600 hover:text-blue-600 hover:bg-gray-100 p-3 rounded-lg transition-colors cursor-pointer">
          <MdOutlineCalendarMonth className="text-xl" />
          <span>Add Jobs</span>
        </li>
        {/* Profile Item */}
        <li className="flex items-center gap-3 text-gray-600 hover:text-blue-600 hover:bg-gray-100 p-3 rounded-lg transition-colors cursor-pointer">
          <ImProfile className="text-xl" />
          <span>Profile</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
