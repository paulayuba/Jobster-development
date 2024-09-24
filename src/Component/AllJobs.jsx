import React from "react";
import { Outlet } from "react-router-dom";

const AllJobs = () => {
  return (
    <div className="px-10">
      <Outlet />
      <div className="bg-white rounded shadow-md w-full h-auto py-8 p-4">
        <div className="py-4 px-6">
          <p>Search Form</p>
        </div>
        <form className="flex flex-cols-2 space-x-4 py-6 px-8 flex-wrap items-center py-">
          <div className="mb-4">
            <label htmlFor="search1" className="block mb-2 text-gray-500">
              Search
            </label>
            <input
              id="search"
              type="text"
              placeholder=""
              className="border rounded px-2 py-1"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="search2" className="block mb-2 text-gray-700">
              status
            </label>
            <input
              id="search"
              type="text"
              placeholder=""
              className="border rounded px-2 py-1"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="search3" className="block mb-2 text-gray-700">
              type
            </label>
            <input
              id="search"
              type="text"
              placeholder=""
              className="border rounded px-2 py-1"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="search4" className="block mb-2 text-gray-700">
              sort
            </label>
            <input
              id="search"
              type="text"
              placeholder=""
              className="border rounded px-2 py-1 w-full"
            />
          </div>
          <button className="bg-red-200 w-48 h-8 mt-4 rounded flex items-center justify-center">
            Clear Filter
          </button>
        </form>
      </div>
    </div>
  );
};

export default AllJobs;
