import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { Link } from "react-router";

const RegisterPage = () => {
  return (
    <div className="w-full max-w-4xl bg-gray-900 mx-auto rounded-xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
      {/* left section */}
      <div className="hidden md:flex flex-col justify-center gap-4 p-8 text-white border-r border-gray-600 text-center">
        <div className="flex flex-col items-center gap-3 text-blue-400">
          <FaLaptopCode size={40} />
          <span className="text-3xl font-bold mb-2">
            The Friendly Developer
          </span>
        </div>
        <p className="text-gray-400 text-sm">
          Welcome Back! Login to access dashboard, manage projects and explore
          new Ideas
        </p>
        <p className="text-gray-400 text-sm"> Build • Learn • Ship 🚀</p>
      </div>
      {/* right section */}
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Register</h1>
        <form action="" className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full mt-1 border border-gray-700 px-4 py-2 rounded-lg bg-gray-800 text-gray-100 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-lg font-medium text-gray-300"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="w-full mt-1 border border-gray-700 px-4 py-2 rounded-lg bg-gray-800 text-gray-100 focus:outline-none focus:border-blue-500"
            />
          </div>
          {/* Password */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-lg font-medium text-gray-300"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              required
              className="w-full mt-1 border border-gray-700 px-4 py-2 rounded-lg bg-gray-800 text-gray-100 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-medium mt-4"
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-400">
          Already Registered?{" "}
          <Link to="/login" className="text-blue-400 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
