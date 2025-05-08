import React from 'react';
import { Outlet } from 'react-router-dom';

const Profile = () => {
  return (
    <div className="px-10 py-8 space-y-6">
      <Outlet />
      <div className="bg-white rounded shadow-md w-full py-6 px-8">
        <div className="pb-6">
          <p className="text-2xl font-semibold text-gray-800">Profile</p>
        </div>

        <form className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Name */}
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-2 text-gray-700 font-medium">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter first name"
              className="bg-gray-100 border border-gray-300 rounded px-4 py-2"
            />
          </div>

          {/* Last Name */}
          <div className="flex flex-col">
            <label htmlFor="lastName" className="mb-2 text-gray-700 font-medium">Last Name</label>
            <input
              id="lastName"
              type="text"
              placeholder="Enter last name"
              className="bg-gray-100 border border-gray-300 rounded px-4 py-2"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 text-gray-700 font-medium">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter email"
              className="bg-gray-100 border border-gray-300 rounded px-4 py-2"
            />
          </div>

          {/* Location */}
          <div className="flex flex-col">
            <label htmlFor="location" className="mb-2 text-gray-700 font-medium">Location</label>
            <input
              id="location"
              type="text"
              placeholder="Enter location"
              className="bg-gray-100 border border-gray-300 rounded px-4 py-2"
            />
          </div>

          {/* Save Button */}
          <div className="flex items-end">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-800 text-white font-medium px-6 py-2 rounded transition w-full sm:w-auto"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
