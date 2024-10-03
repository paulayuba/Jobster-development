import React, { useState } from "react";
import { Outlet } from "react-router-dom";



const AddJobs = () => {
  const [AddJobs,setAddJobs] = useState("")
  const [Position,setPosition] = useState("")
  const [ Company,setCompany] = useState("")
  const [JobLocation,setJobLocation] = useState("")
  const [Status,setStatus] = useState("")
  const [JobType,setJobType] = useState("")
  return (
    <div className="px-10">
      <Outlet />
      <div className="bg-white rounded shadow-md w-full h-60 py-1 px-8">
        <div className="py-4 px-6 font-normal text-2xl">
          <p>Add Job</p>
        </div>
        <form className="flex flex-cols-2 space-x-4 py-1 flex-wrap items-center">
          {/* Position */}
          <div className="mb-4">
            <label htmlFor="search1" className="block mb-2 text-gray-500">
              Position
            </label>
            <input
              id="search1"
              type="text"
              placeholder=""
              className="bg-gray-100 border rounded px-6 py-1"
            />
          </div>

          {/* Company */}
          <div className="mb-4">
            <label htmlFor="search2" className="block mb-2 text-gray-700">
              Company
            </label>
            <input
              id="search2"
              type="text"
              placeholder=""
              className="bg-gray-100 border rounded px-6 py-1"
            />
          </div>

          {/* Job Location */}
          <div className="mb-4">
            <label htmlFor="search3" className="block mb-2 text-gray-700">
              Job Location
            </label>
            <input
              id="search3"
              type="text"
              placeholder=""
              className="bg-gray-100 border rounded px-6 py-1"
            />
          </div>

          {/* Status */}
          <div className="mb-4">
            <label htmlFor="status" className="block mb-2 text-gray-700">
              Status
            </label>
            <select
              id="status"
              className="bg-gray-100 border rounded px-6 py-1 w-56"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="pending">Pending</option>
              <option value="interview">Interview</option>
              <option value="declined">Declined</option>
            </select>
          </div>

          {/* Job Type */}
          <div className="mb-4">
  <label htmlFor="search4" className="block mb-2 text-gray-700">
    Job Type
  </label>
  <select
    id="jobType"
    value={jobType}
    onChange={(e) => setJobType(e.target.value)}
    className="bg-gray-100 border rounded px-6 py-1 mb-2"
  >
    <option value="full-time">Full-Time</option>
    <option value="part-time">Part-Time</option>
    <option value="remote">Remote</option>
    <option value="internship">Internship</option>
  </select>
  <input
    id="search4"
    type="text"
    placeholder=""
    className="bg-gray-100 border rounded px-6 py-1"
  />
</div>


          {/* Buttons */}
          <div className="flex space-x-4">
            <button className="bg-gray-500 text-white w-24 h-8 mt-4 rounded flex items-center justify-center">
              Clear
            </button>
            <button className="bg-blue-500 text-white w-24 h-8 mt-4 rounded flex items-center justify-center">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddJobs;
