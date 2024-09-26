import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg"
import image from "../assets/image.svg"

const LandingPage = () => {
  return (
    <div className="min-h-40 mb-4">
      {/* Header Section */}
      <div className="flex space-x-6 items-center px-6 py-2 mx-14">
        <img src={logo} alt="" 
        className="mt-2"/>
      </div>

      {/* Main Section */}
      <div className="grid grid-cols-2 gap-6 px-6 py-8 items-center overflow-hidden">
        {/* Left Side: Text Content */}
        <div className="text-left px-14">
          <h1 className="font-bold text-4xl">
            JOB <span className="text-blue-400">TRACKING</span> APP
          </h1>
          <p className="text-gray-500 mt-4">
            Crucifix narwhal street art asymmetrical, humblebrag tote bag pop-up
            fixie raclette taxidermy craft beer. Brunch bitters synth, VHS
            crucifix heirloom meggings bicycle rights.
          </p>
          <div className="mt-6">
          <Link to="/login"><button className="bg-blue-500 text-white py-2 px-4 rounded-sm hover:bg-blue-600 transition duration-300">
              Login/Register
            </button> </Link> 
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="flex justify-center h-96">
          <img
            src={image}alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
