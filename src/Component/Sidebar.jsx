import React from 'react';
import { ImStatsBars } from "react-icons/im";
import { MdQueryStats } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { MdOutlineCalendarMonth } from "react-icons/md";
import logo from '../assets/logo.svg';
import { IoBarChart } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-white w-64 h-screen flex flex-col items-start py-10 px-6">
      {/* Logo Section */}
      <div className="mb-8">
        <img
          src={logo}
          alt="Jobster Logo"
          className="w-32"
        />
      </div>

      {/* Sidebar Menu */}
      <ul className="text-lg space-y-4 w-full">
        {/* Stats Item */}
        <Link to="stats" className="flex items-center gap-3 text-gray-600 hover:text-blue-600 hover:bg-gray-100 p-3 rounded-lg transition-colors cursor-pointer">
          <IoBarChart className="text-xl text-blue-500" />
          <span>Stats</span>
        </Link >
        {/* All Jobs Item */}
        <Link to="allJobs" className="flex items-center gap-3 text-gray-600 hover:text-blue-600 hover:bg-gray-100 p-3 rounded-lg transition-colors cursor-pointer">
          <MdQueryStats className="text-xl" />
          <span>All Jobs</span>
        </Link >
        {/* Add Jobs Item */}
        <Link to='addJobs' className="flex items-center gap-3 text-gray-600 hover:text-blue-600 hover:bg-gray-100 p-3 rounded-lg transition-colors cursor-pointer">
          <MdOutlineCalendarMonth className="text-2xl" />
          <span>Add Jobs</span>
        </Link >
        {/* Profile Item */}
        <Link to='profile' className="flex items-center gap-3 text-gray-600 hover:text-blue-600 hover:bg-gray-100 p-3 rounded-lg transition-colors cursor-pointer">
          <ImProfile className="text-xl" />
          <span>Profile</span>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
