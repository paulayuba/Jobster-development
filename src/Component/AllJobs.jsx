import React from 'react'
import { Outlet } from 'react-router-dom'

const AllJobs = () => {
  return (
    <div>
      All job
      <Outlet />
    </div>
  )
}

export default AllJobs
