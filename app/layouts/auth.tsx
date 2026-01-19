import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { NavLink, Outlet } from "react-router";
import Navbar from "~/components/Navbar";

const AuthLayout = () => {
  return (
    <>
      <Navbar />
      <section className="max-w-6xl mx-auto px-6 my-8">
        <Outlet />
      </section>
    </>
  );
};

export default AuthLayout;
