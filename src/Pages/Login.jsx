import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.svg';
import { toast } from "react-toastify";
const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] =useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (email == ""|| password == "") {
        toast.error("email password requierd")
        return
    }
      try {
        const UserData = {
          email,
          password,
        };
        console.log(UserData);

        const response = await fetch("http://localhost:4000/api/v1/auth/signin",{
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(UserData),
        });

        const data = await response.json()
      console.log(data)

      if (!response.ok) {
        throw new Error(data.message);
      }

      toast.success("successfull");
      
      } catch (error){
        console.log(error);
        toast.error(error.message);
      }
  }
  return (
    <div className="w-full min-h-[80vh] bg-gray-100 flex justify-center items-center"> {/* Reduced height */}
      <div className="w-full h-auto flex justify-center items-center">
        <form className="w-1/3 bg-white border p-8 rounded-lg shadow-lg text-left flex flex-col justify-center" onSubmit={handleSubmit}>
          {/* Logo */}
          <img
            src={logo}
            alt="Jobster Logo"
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
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full border border-gray-300 p-2 rounded mb-4"
          />

          {/* Password Input */}
          <label className="mb-2 font-medium text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full border border-gray-300 p-2 rounded mb-4"
          />

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
