import React from "react";
import { Link } from "react-router";

const LoginForm = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
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

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-medium mt-4"
        >
          Login
        </button>
      </form>
      <p className="mt-4 text-center text-sm text-gray-400">
        Don’t have an account?{" "}
        <Link to="/register" className="text-blue-400 hover:underline">
          Register
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
