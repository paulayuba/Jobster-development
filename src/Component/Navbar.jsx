import React from 'react';
import { useState } from 'react';

import logo from '../assets/logo.svg';
import { FaAlignLeft, FaSortDown } from "react-icons/fa";
import { IoPersonCircleOutline } from "react-icons/io5";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className='bg-white w-full flex mb-8 justify-between'>
      <div className='text-blue-600 py-10 px-8 text-2xl'>
        <FaAlignLeft />
      </div>
      <div className="w-4/5 py-8 space-x-4 font-sans text-2xl text-center">
        Dashboard
      </div>
      <div className=" px-6 py-6 relative space-y-3">
        <button onClick={handleClick} className="bg-blue-400 flex h-8 w-28 text-white rounded-md justify-center py-1 items-center gap-2">
          <IoPersonCircleOutline />
          test user
          <FaSortDown/>
        </button>
        {open && (
          <button className='bg-blue-300 text-blue-500 w-full flex justify-center items-center rounded-md p-1'>
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
