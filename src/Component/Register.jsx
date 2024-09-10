import React from 'react'

const Register = () => {
  return (
    <div>
      <div className="w-full h-screen bg-gray-100">
      <div className="w-full h-full flex justify-center items-center">
        <form className="w-1/3 bg-white border p-8 rounded-lg shadow-lg text-left flex flex-col justify-center">
          <img
            src="https://redux-toolkit-jobster.netlify.app/static/media/logo.35bb8e1d9b5745af32ff148cbee51dfa.svg"
            alt=""
            width="200"
            className="flex self-center py-4"
          />
          <h3 className="flex justify-center font-bold text-2xl"></h3>
          <label>Name</label>
          <input
            type="Name"
            placeholder=""
            className="w-full border border-gray-300 p-2 rounded mb-4"
          />
          <label>Email</label>
          <input
            type="Name"
            placeholder=""
            className="w-full border border-gray-300 p-2 rounded mb-4"
          />
          <label>password</label>
          <input
            type="Name"
            placeholder=""
            className="w-full border border-gray-400 p-2 rounded mb-4"
          />
          <button className="bg-[#3B82F6] px-4 py-2 rounded-md text-white">submit</button>
          <button className="bg-blue-200 px-4 py-2 rounded-md text-white my-4">Demo App</button>
          <p className="text-center">not a member yet? <span className="text-blue-400">Register</span></p>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Register
