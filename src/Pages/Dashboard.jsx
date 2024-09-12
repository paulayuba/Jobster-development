import React from 'react';
import logo from "../assets/logo.svg";
import Sidebar from '../Component/Sidebar';


const Dashboard = () => {
  return (
    <main className='w-full flex h-screen'>
    <Sidebar />
    <div className='bg-white w-4/5'>dashboard</div>
    </main>
  );
}

export default Dashboard;
