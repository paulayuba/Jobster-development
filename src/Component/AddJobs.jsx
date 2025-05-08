import React, { useState } from 'react';

const AddJob = () => {
  const [position, setPosition] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');
  const [status, setStatus] = useState('pending');
  const [jobType, setJobType] = useState('full-time');

  const handleClear = () => {
    setPosition('');
    setCompany('');
    setLocation('');
    setStatus('pending');
    setJobType('full-time');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ position, company, location, status, jobType });
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-10">
      <div className="max-w-5xl mx-auto bg-white shadow-md hover:shadow-lg transition-shadow rounded-md p-6 sm:p-10">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Add Job</h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* Position */}
          <div className="flex flex-col">
            <label htmlFor="position" className="mb-2 font-medium text-gray-700">Position</label>
            <input
              id="position"
              type="text"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              className="p-2 border border-gray-300 rounded bg-[#F0F4F8] focus:outline-blue-500"
            />
          </div>

          {/* Company */}
          <div className="flex flex-col">
            <label htmlFor="company" className="mb-2 font-medium text-gray-700">Company</label>
            <input
              id="company"
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="p-2 border border-gray-300 rounded bg-[#F0F4F8] focus:outline-blue-500"
            />
          </div>

          {/* Location */}
          <div className="flex flex-col">
            <label htmlFor="location" className="mb-2 font-medium text-gray-700">Location</label>
            <input
              id="location"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="p-2 border border-gray-300 rounded bg-[#F0F4F8] focus:outline-blue-500"
            />
          </div>

          {/* Status */}
          <div className="flex flex-col">
            <label htmlFor="status" className="mb-2 font-medium text-gray-700">Status</label>
            <select
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="p-2 border border-gray-300 rounded bg-[#F0F4F8] focus:outline-blue-500"
            >
              <option value="pending">Pending</option>
              <option value="interview">Interview</option>
              <option value="declined">Declined</option>
            </select>
          </div>

          {/* Job Type */}
          <div className="flex flex-col">
            <label htmlFor="jobType" className="mb-2 font-medium text-gray-700">Job Type</label>
            <select
              id="jobType"
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
              className="p-2 border border-gray-300 rounded bg-[#F0F4F8] focus:outline-blue-500"
            >
              <option value="full-time">Full-Time</option>
              <option value="part-time">Part-Time</option>
              <option value="remote">Remote</option>
              <option value="internship">Internship</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex flex-col justify-end gap-3 sm:flex-row sm:items-end sm:col-span-full">
            <button
              type="button"
              onClick={handleClear}
              className="w-full sm:w-auto px-6 py-2 bg-gray-600 hover:bg-gray-800 text-white rounded-md transition"
            >
              Clear
            </button>
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-2 bg-blue-600 hover:bg-blue-800 text-white rounded-md transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddJob;
