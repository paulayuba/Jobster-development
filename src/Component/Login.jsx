import React from "react";


const Login = () => {
  return (
    <div className="w-full h-screen bg-gray-100">
      <div className="w-full h-full flex justify-center items-center">
        <form className="w-1/3 bg-white border p-8 rounded-lg shadow-lg text-left flex flex-col justify-center">
          {/* Logo */}
          <img
            src="https://redux-toolkit-jobster.netlify.app/static/media/logo.35bb8e1d9b5745af32ff148cbee51dfa.svg"
            alt="Jobster Logo"
            width="200"
            className="self-center py-4"
          />

          {/* Title */}
          <h3 className="text-center font-bold text-2xl mb-6">Login</h3>

          {/* Email Input */}
          <label className="mb-2 font-medium text-gray-700">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 p-2 rounded mb-4"
          />

          {/* Password Input */}
          <label className="mb-2 font-medium text-gray-700">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full border border-gray-300 p-2 rounded mb-4"
          />

          {/* Submit Button */}
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md mb-4 transition duration-300">
            Submit
          </button>

          {/* Demo App Button */}
          <button className="bg-blue-200 hover:bg-blue-300 text-white font-semibold px-4 py-2 rounded-md mb-6 transition duration-300">
            Demo App
          </button>

          {/* Register Link */}
          <p className="text-center text-gray-600">
            Not a member yet?{" "}
          
              <span className="text-blue-500 hover:underline">Register</span>
           
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
