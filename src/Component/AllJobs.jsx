import React, { useState } from "react";
import { Outlet } from "react-router-dom";

const AllJobs = () => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [jobType, setJobType] = useState("");
  const [sort, setSort] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleClear = () => {
    setSearch("");
    setStatus("");
    setJobType("");
    setSort("");
  };

  return (
    <div className="px-10 py-8 space-y-6">
      <Outlet />

      <div className="bg-white rounded shadow-md w-full py-6 px-8">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          <div className="col-span-full">
            <p className="text-2xl font-semibold text-gray-800 mb-4">Search Form</p>
          </div>

          {/* Search Input */}
          <div className="flex flex-col">
            <label htmlFor="search" className="mb-2 text-gray-700 font-medium">
              Search
            </label>
            <input
              id="search"
              name="search"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search jobs..."
              className="p-2 border border-gray-300 rounded bg-[#F0F4F8]"
            />
          </div>

          {/* Status Dropdown */}
          <div className="flex flex-col">
            <label htmlFor="status" className="mb-2 text-gray-700 font-medium">
              Status
            </label>
            <select
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="p-2 border border-gray-300 rounded bg-[#F0F4F8]"
            >
              <option value="">Select Status</option>
              <option value="pending">Pending</option>
              <option value="interview">Interview</option>
              <option value="declined">Declined</option>
            </select>
          </div>

          {/* Job Type Dropdown */}
          <div className="flex flex-col">
            <label htmlFor="jobType" className="mb-2 text-gray-700 font-medium">
              Job Type
            </label>
            <select
              id="jobType"
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
              className="p-2 border border-gray-300 rounded bg-[#F0F4F8]"
            >
              <option value="">Select Type</option>
              <option value="full-time">Full-time</option>
              <option value="part-time">Part-time</option>
              <option value="remote">Remote</option>
              <option value="internship">Internship</option>
            </select>
          </div>

          {/* Sort Dropdown */}
          <div className="flex flex-col">
            <label htmlFor="sort" className="mb-2 text-gray-700 font-medium">
              Sort
            </label>
            <select
              id="sort"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="p-2 border border-gray-300 rounded bg-[#F0F4F8]"
            >
              <option value="">Sort By</option>
              <option value="latest">Latest</option>
              <option value="oldest">Oldest</option>
              <option value="z-a">Z-A</option>
              <option value="a-z">A-Z</option>
            </select>
          </div>

          {/* Clear Button */}
          <div className="flex items-end">
            <button
              type="button"
              onClick={handleClear}
              className="w-full sm:w-auto px-6 py-2 bg-red-400 hover:bg-red-600 text-white rounded transition"
            >
              Clear Filters
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AllJobs;
