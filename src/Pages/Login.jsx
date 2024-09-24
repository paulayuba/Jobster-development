import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.svg';
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      setError("Email and password are required.");
      toast.error("Email and password are required.");
      return;
    }

    try {
      const userData = {
        email,
        password,
      };
      console.log(userData);

      const response = await fetch("http://localhost:4000/api/v1/auth/signin", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      console.log(data);

      if (!response.ok) {
        throw new Error(data.message);
      }

      toast.success("Login successful!");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="w-full flex justify-center items-center">
        <form
          className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 bg-white border p-8 rounded-lg shadow-lg text-left flex flex-col justify-center"
          onSubmit={handleSubmit}
        >
          {/* Logo */}
          <img
            src={logo}
            alt="Logo"
            width="100"
            className="self-center py-4"
          />

          {/* Title */}
          <h3 className="text-center font-bold text-2xl mb-6">Login</h3>

          {/* Email Input */}
          <label className="mb-2 font-medium text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError(""); // Clear error when typing
            }}
            placeholder="Enter your email"
            className="w-full border border-gray-300 p-2 rounded mb-1"
          />
          {error && !email && (
            <p className="text-red-500 text-sm mb-4">Email is required</p>
          )}

          {/* Password Input */}
          <label className="mb-2 font-medium text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError(""); // Clear error when typing
            }}
            placeholder="Enter your password"
            className="w-full border border-gray-300 p-2 rounded mb-1"
          />
          {error && !password && (
            <p className="text-red-500 text-sm mb-4">Password is required</p>
          )}

          {/* Submit Button */}
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md mb-4 transition duration-300">
            Submit
          </button>

          {/* Demo App Button */}
          <button className="bg-blue-200 hover:bg-blue-300 text-white font-semibold px-4 py-2 rounded-md mb-6 transition duration-300">
            <span className="text-blue-400">Demo App</span>
          </button>

          {/* Register Link */}
          <p className="text-center text-gray-600">
            Not a member yet?{" "}
            <Link to="/dashboard">
              <span className="text-blue-500 hover:underline">Register</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
