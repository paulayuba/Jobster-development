import React from 'react'
import { Outlet } from 'react-router-dom'

const AddJobs = () => {
  return (
    <div>
      Add job
      <Outlet />
    </div>
  )
}

export default AddJobs
