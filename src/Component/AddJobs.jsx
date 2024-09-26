import React from 'react'
import { Outlet } from 'react-router-dom'

const AddJobs = () => {
  return (
      <div className='px-10'>
      <Outlet />
      <div className='bg-white rounded shadow-md w-full h-60 py-1 px-8'>
      <div className="py-4 px-6 font-normal text-2xl">
          <p>Add Job</p>
        </div>
        <form className="flex flex-cols-2 space-x-4 py-1 flex-wrap items-center py-">
          <div className="mb-4">
            <label htmlFor="search1" className="block mb-2 text-gray-500">
              Position
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
              Company
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
              Job Location
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
              Status
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
              Job Type
            </label>
            <input
              id="search"
              type="text"
              placeholder=""
              className="border rounded px-2 py-1"
            />
          </div>
          <div className='flex space-x-4 '>
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
  )
}

export default AddJobs
