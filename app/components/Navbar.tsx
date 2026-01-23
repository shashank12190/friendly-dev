import React, { useEffect, useState } from "react";
import { FaLaptopCode, FaTimes, FaBars, FaSignOutAlt } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router";
import { FaSignInAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "~/store/store";
import { loadFromStorage, logout } from "~/store/authSlice";
// import type { RootState } from "@reduxjs/toolkit/query";

const Navbar = () => {
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);
  const base = "transition hover:text-blue-400";
  const active = "text-blue-400 font-semibold";

  useEffect(() => {
    dispatch(loadFromStorage());
  }, [dispatch]);
  const isLoggedIn = useSelector((state: RootState) => !!state.auth.user);
  const navigate = useNavigate();
  return (
    <nav className="bg-gray-800 border-b border-gray-700 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <NavLink
          to={"/"}
          className="flex items-center gap-2 text-lg font-bold text-blue-300"
        >
          <FaLaptopCode className="text-blue-400 text-xl" />
          <span>The Friendly Developer</span>
        </NavLink>

        {/* desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          <div className="space-x-4 text-sm text-gray-300">
            <NavLink
              className={({ isActive }) => (isActive ? active : base)}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? active : base)}
              prefetch="intent"
              to="/projects"
            >
              Projects
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? active : base)}
              to="/blog"
            >
              Blog
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? active : base)}
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? active : base)}
              to="/contact"
            >
              Contact
            </NavLink>
            {/* <NavLink
              className={({ isActive }) => (isActive ? active : base)}
              to="/api-2"
            >
              2 API EX
            </NavLink> */}
          </div>

          {isLoggedIn ? (
            <button
              onClick={() => {
                dispatch(logout());
                navigate("/login");
              }}
              className="bg-red-600 px-4 py-2 rounded hover:bg-red-700 flex items-center justify-center gap-2"
            >
              <FaSignOutAlt />
              Logout
            </button>
          ) : (
            <NavLink
              className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 flex items-center justify-center gap-2"
              to="/login"
            >
              <FaSignInAlt className="text-lg" />
              <span>Login</span>
            </NavLink>
          )}
          {/* <div>
            <NavLink
              className={`bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 flex items-center justify-center gap-2`}
              to="/login"
            >
              <FaSignInAlt className="text-lg" />
              <span>Login</span>
            </NavLink>
          </div> */}
        </div>

        {/* hamburger menu */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-blue-400 text-xl cursor-pointer"
            title="Menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {/* mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700 py-6 px-8 space-y-4 space-x-6 text-center">
          <NavLink
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) => (isActive ? active : base)}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) => (isActive ? active : base)}
            to="/projects"
          >
            Projects
          </NavLink>
          <NavLink
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) => (isActive ? active : base)}
            to="/blog"
          >
            Blog
          </NavLink>
          <NavLink
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) => (isActive ? active : base)}
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) => (isActive ? active : base)}
            to="/contact"
          >
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
