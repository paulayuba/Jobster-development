import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import image from "../assets/image.svg";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="flex items-center justify-between px-6 py-4 md:px-14">
        <img src={logo} alt="Job Tracker Logo" className="h-10" />
      </div>

      {/* Main Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-14 py-8 items-center">
        {/* Left Side: Text Content */}
        <div className="text-left">
          <h1 className="font-bold text-3xl sm:text-4xl">
            JOB <span className="text-blue-500">TRACKING</span> APP
          </h1>
          <p className="text-gray-600 mt-4 text-base sm:text-lg">
            Crucifix narwhal street art asymmetrical, humblebrag tote bag pop-up
            fixie raclette taxidermy craft beer. Brunch bitters synth, VHS
            crucifix heirloom meggings bicycle rights.
          </p>
          <div className="mt-6">
            <Link to="/login">
              <button className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition duration-300">
                Login / Register
              </button>
            </Link>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="flex justify-center">
          <img src={image} alt="Job tracking illustration" className="w-full max-w-md" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
