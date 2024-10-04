import React, { useState } from "react";
import { Outlet } from "react-router-dom";

const AllJobs = () => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [type, setType] = useState("");
  const [sort, setSort] = useState("");
  const [position, setPosition] = useState(""); // Added state for position
  const [company, setCompany] = useState(""); // Added state for company
  const [location, setLocation] = useState(""); // Added state for location
  const [jobType, setJobType] = useState(""); // Added state for job type

  const handleClear = () => {
    setSearch("");
    setStatus("");
    setType("");
    setSort("");
    setPosition(""); // Clear position
    setCompany(""); // Clear company
    setLocation(""); // Clear location
    setJobType(""); // Clear job type
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted with:", {
      search,
      status,
      type,
      sort,
      position,
      company,
      location,
      jobType,
    });
  };

  return (
    <div className="px-10">
      <Outlet />
      <div className="bg-white rounded shadow-md w-full py-1 px-8">
        <div className="py-4 px-2">
          <p className="text-2xl font-normal">Search Form</p>
        </div>
        <form className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" onSubmit={handleSubmit}>
          {/* Position Input */}
          <div className="flex flex-col">
            <label htmlFor="position" className="mb-1 font-medium">Position</label>
            <input
              type="text"
              id="position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              className="p-2 border border-gray-300 rounded bg-[#F0F4F8]"
            />
          </div>

          {/* Company Input */}
          <div className="flex flex-col">
            <label htmlFor="company" className="mb-1 font-medium">Company</label>
            <input
              type="text"
              id="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="p-2 border border-gray-300 rounded bg-[#F0F4F8]"
            />
          </div>

          {/* Job Location Input */}
          <div className="flex flex-col">
            <label htmlFor="location" className="mb-1 font-medium">Job Location</label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="p-2 border border-gray-300 rounded bg-[#F0F4F8]"
            />
          </div>

          {/* Status Dropdown */}
          <div className="flex flex-col">
            <label htmlFor="status" className="mb-1 font-medium">Status</label>
            <select
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="p-2 border border-gray-300 rounded bg-[#F0F4F8]"
            >
              <option value="pending">pending</option>
              <option value="interview">interview</option>
              <option value="declined">declined</option>
            </select>
          </div>
          {/* Clear Button */}
          <button
            type="button"
            onClick={handleClear}
            className="bg-red-200 w-48 h-8 mt-4 rounded flex items-center justify-center font-normal hover:bg-red-500"
          >
            Clear Filter
          </button>
        </form>
      </div>
    </div>
  );
};

export default AllJobs;
