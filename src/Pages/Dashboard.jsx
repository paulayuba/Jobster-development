import React from "react";
import Sidebar from "../Component/Sidebar";
import Navbar from "../Component/Navbar";
import { Routes, Route } from "react-router-dom";
import Stats from "../Component/Stats";
import AllJobs from "../Component/AllJobs";
import AddJobs from "../Component/AddJobs";
import Profile from "../Component/Profile";

// Chart imports
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

// Example chart data
const chartData = [
  { name: "Jan", jobs: 20 },
  { name: "Feb", jobs: 30 },
  { name: "Mar", jobs: 20 },
  { name: "Apr", jobs: 27 },
  { name: "May", jobs: 18 },
];

const Dashboard = () => {
  return (
    <main className="flex flex-col md:flex-row h-screen w-full">
      {/* Sidebar hidden on small screens */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 bg-slate-100 h-screen overflow-hidden">
        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <div className="flex-grow overflow-y-auto p-4 space-y-6">
          {/* Bar Chart Section */}
          <div className="bg-white p-4 rounded shadow w-full h-72 sm:h-80">
            <h2 className="text-lg font-semibold mb-4">Jobs Created Per Month</h2>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="jobs" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Routes */}
          <Routes>
            <Route path="stats" element={<Stats />} />
            <Route path="alljobs" element={<AllJobs />} />
            <Route path="addjobs" element={<AddJobs />} />
            <Route path="profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
