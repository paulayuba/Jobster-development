import React from 'react';
import { Outlet } from 'react-router-dom';
import { FaBug, FaCalendarCheck } from "react-icons/fa";
import { MdCardTravel } from "react-icons/md";

const Stats = () => {
  return (
    <div className="px-4 sm:px-6 md:px-10 py-6">
      {/* Stats Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Pending Applications */}
        <div className="bg-white rounded-md p-6 border-b-4 border-yellow-300 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-3xl sm:text-4xl text-yellow-500 font-bold">28</p>
            <div className="bg-yellow-100 text-yellow-600 w-10 h-10 flex items-center justify-center text-lg rounded">
              <MdCardTravel />
            </div>
          </div>
          <h3 className="font-semibold text-base sm:text-lg mt-6">Pending Applications</h3>
        </div>

        {/* Interviews Scheduled */}
        <div className="bg-white rounded-md p-6 border-b-4 border-blue-500 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-3xl sm:text-4xl text-blue-500 font-bold">25</p>
            <div className="bg-blue-100 text-blue-600 w-10 h-10 flex items-center justify-center text-lg rounded">
              <FaCalendarCheck />
            </div>
          </div>
          <h3 className="font-semibold text-base sm:text-lg mt-6">Interviews Scheduled</h3>
        </div>

        {/* Jobs Declined */}
        <div className="bg-white rounded-md p-6 border-b-4 border-red-300 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-3xl sm:text-4xl text-red-400 font-bold">22</p>
            <div className="bg-red-100 text-red-600 w-10 h-10 flex items-center justify-center text-lg rounded">
              <FaBug />
            </div>
          </div>
          <h3 className="font-semibold text-base sm:text-lg mt-6">Jobs Declined</h3>
        </div>
      </section>

      {/* Chart Area */}
      <section className="mt-10">
        <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-center">
          Monthly Applications
        </h2>
        <h3 className="text-blue-500 text-center mt-1">Area Chart</h3>

        {/* Chart Placeholder */}
        <div className="bg-white mt-4 rounded-md shadow p-4 w-full max-w-4xl mx-auto h-72">
          {/* Example: Insert your chart here */}
          <p className="text-center text-gray-400">[Your Chart Goes Here]</p>
        </div>
      </section>

      <Outlet />
    </div>
  );
};

export default Stats;
