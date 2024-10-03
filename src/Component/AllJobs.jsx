import React, { useState } from "react";
import { Outlet } from "react-router-dom";

const AllJobs = () => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [type, setType] = useState("");
  const [sort, setSort] = useState("");

  const handleClear = () => {
    setSearch("");
    setStatus("");
    setType("");
    setSort("");
  };

  return (
    <div className="px-10">
      <Outlet />
      <div className="bg-white rounded shadow-md w-full h-60 py-1 px-8">
        <div className="py-4 px-2">
          <p className="text-2xl font-normal">Search Form</p>
        </div>
        <form className="flex flex-cols-2 space-x-4 py-1 flex-wrap items-center">
          {/* Search Field */}
          <div className="mb-4">
            <label className="block mb-2 text-gray-500">Search</label>
            <input
              id="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder=""
              className="bg-gray-100 border rounded px-6 py-1"
            />
          </div>

          {/* Status Dropdown */}
          <div className="mb-4">
            <label className="block mb-2 text-gray-700">Status</label>
            <select
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="bg-gray-100 border rounded px-6 py-1 w-56"
            >
              <option value="All">All</option>
              <option value="interview">Interview</option>
              <option value="declined">Declined</option>
              <option value="pending">Pending</option>
            </select>
          </div>

          {/* Type Dropdown */}
          <div className="mb-4">
            <label className="block mb-2 text-gray-700">Type</label>
            <select
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="bg-gray-100 border rounded px-6 py-1 w-56"
            >
              <option value="All">All</option>
              <option value="full-time">Full-Time</option>
              <option value="part-time">Part-Time</option>
              <option value="remote">Remote</option>
              <option value="internship">Internship</option>
            </select>
          </div>

          {/* Sort Dropdown */}
          <div className="mb-4">
            <label className="block mb-2 text-gray-700">Sort</label>
            <select
              id="sort"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="bg-gray-100 border rounded px-6 py-1 w-56"
            >
              <option value="latest">Latest</option>
              <option value="oldest">Oldest</option>
              <option value="a-z">A-Z</option>
              <option value="z-a">Z-A</option>
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
