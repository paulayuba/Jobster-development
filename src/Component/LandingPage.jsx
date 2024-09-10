import React from "react";

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div className="flex space-x-6 items-center px-6 py-4 mx-14">
        <p className="bg-blue-400 font-bold w-10 h-10 text-3xl text-white flex items-center justify-center rounded-md">
          J
        </p>
        <h2 className="text-blue-400 font-bold text-2xl">jobster</h2>
      </div>

      {/* Main Section */}
      <div className="grid grid-cols-2 gap-6 px-6 py-8 items-center">
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
            <button className="bg-blue-500 text-white py-2 px-4 rounded-sm hover:bg-blue-600 transition duration-300">
              Login/Register
            </button>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="flex justify-center h-96">
          <img
            src="https://redux-toolkit-jobster.netlify.app/static/media/main.17b316de742b3a1202078c5ae18c8261.svg"alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
