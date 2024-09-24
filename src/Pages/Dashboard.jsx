import React, { useState } from "react";
import logo from "../assets/logo.svg";
import Sidebar from "../Component/Sidebar";
import Navbar from "../Component/Navbar";
import { FaUnlockKeyhole } from "react-icons/fa6";
import { FaBoxArchive } from "react-icons/fa6";
import { FaBug } from "react-icons/fa6";
import { PiNumberZeroBold } from "react-icons/pi";
import { MdCardTravel } from "react-icons/md";
import { FaCalculator, FaCalendarCheck } from "react-icons/fa";



const Dashboard = () => {
  return (
    <main className="w-full flex h-screen px">
      <Sidebar />
      <div className="w-full h-screen bg-slate-100">
      <Navbar />
      <div className="flex gap-4 px-6">
      <div className="bg-white rounded-md px-8 w-64 h-40 border-b-4 border-b-yellow-300">
          <div className="flex gap-8 items-center justify-between mt-6">
          <p className="text-4xl text-[#f7ec57] font-bold">28</p>
          <h2 className="text-[#f7ec57] bg-red-300 w-10 h-8 flex items-center px-3"><MdCardTravel /></h2>
          </div>
          <h3 className="font-semibold text-xl mt-6">pending applications</h3>
        </div>
      
      <div className="bg-white rounded-md px-8 w-64 h-40 border-b-4 border-b-blue-500 ">
          <div className="flex gap-8 items-center justify-between mt-6">
          <p className="text-4xl text-blue-500 font-bold">25</p>
          <h2 className="bg-blue-200 w-10 h-8  flex items-center px-3"><FaCalendarCheck /></h2>
          </div>
          <h3 className="font-semibold text-xl flex mt-6">interviews scheduled</h3>
        </div>
       <div className="bg-white rounded-md px-8 w-64 h-40 border-b-4 border-b-red-300">
          <div className="flex gap-8 items-center justify-between mt-6">
          <p className="text-4xl text-red-300 font-bold">22</p>
          <h2 className="bg-red-400 w-10 h-8  flex items-center px-3"><FaBug /> </h2>
          </div>
          <h3 className="font-semibold text-xl mt-6">jobs declined</h3>
        </div> 
      </div>
       <div className="flex flex-col items-center mt-4 justify-center">
        <h2 className="text-2xl mt-6">Monthly Applications</h2>
        <h2 className="text-blue-500">Area chart</h2>
      </div>
      </div>
  
    </main>
  );
};

export default Dashboard;
