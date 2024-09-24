import React, { useState } from "react";
import logo from "../assets/logo.svg";
import Sidebar from "../Component/Sidebar";
import Navbar from "../Component/Navbar";
import { Routes,Route } from "react-router-dom";
import Stats from "../Component/Stats";
import AllJobs from "../Component/AllJobs";
import AddJobs from "../Component/AddJobs";
import Profile from "../Component/Profile";

const Dashboard = () => {
  return (
    <main className="w-full flex h-screen">
      <Sidebar />
      <div className="w-full h-screen bg-slate-100">
        <Navbar />
        

        <Routes>
          <Route path="stats" element={<Stats />}/>
          <Route path="alljobs" element={<AllJobs />}/>
          <Route path="addjobs" element={<AddJobs />}/>
          <Route path="profile" element={<Profile />}/>
        </Routes>
      </div>
    </main>
  );
};

export default Dashboard;
