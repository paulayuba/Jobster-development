import React from 'react'
import { Outlet } from 'react-router-dom'
import { FaUnlockKeyhole } from "react-icons/fa6";
import { FaBoxArchive } from "react-icons/fa6";
import { FaBug } from "react-icons/fa6";
import { MdCardTravel } from "react-icons/md";
import { FaCalculator, FaCalendarCheck } from "react-icons/fa";

const Stats = () => {
  return (
    <div>
     <div className="flex flex-col lg:flex-row gap-4 px-6">
          {/* Grid for cards */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            <div className="bg-white rounded-md p-6 w-full h-40 border-b-4 border-b-yellow-300">
              <div className="flex gap-8 items-center justify-between mt-6">
                <p className="text-4xl text-[#E9B949] font-bold">28</p>
                <h2 className="text-[#EDC66C] bg-red-200 w-11 h-10 flex items-center px-3">
                  <MdCardTravel />
                </h2>
              </div>
              <h3 className="font-semibold text-xl mt-6">Pending Applications</h3>
            </div>

            <div className="bg-white rounded-md p-6 w-full h-40 border-b-4 border-b-blue-500">
              <div className="flex gap-8 items-center justify-between mt-6">
                <p className="text-4xl text-blue-500 font-bold">25</p>
                <h2 className="bg-blue-200 w-11 h-10 flex items-center px-3">
                  <FaCalendarCheck />
                </h2>
              </div>
              <h3 className="font-semibold text-xl mt-6">Interviews Scheduled</h3>
            </div>

            <div className="bg-white rounded-md p-6 w-full h-40 border-b-4 border-b-red-300">
              <div className="flex gap-8 items-center justify-between mt-6">
                <p className="text-4xl text-red-300 font-bold">22</p>
                <h2 className="bg-red-400 w-11 h-10 flex items-center px-3">
                  <FaBug />
                </h2>
              </div>
              <h3 className="font-semibold text-xl mt-6">Jobs Declined</h3>
            </div>
          </div>
        </div>

        {/* Responsive chart section */}
        <div className="flex flex-col items-center mt-4 justify-center w-full">
          <h2 className="text-xl lg:text-2xl mt-6">Monthly Applications</h2>
          <h2 className="text-blue-500">Area Chart</h2>
        </div> 
        <Outlet />
    </div>
  )
}

export default Stats
