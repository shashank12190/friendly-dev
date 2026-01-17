import React from "react";
import { Link } from "react-router";

const AboutPreview = () => {
  return (
    <section className="mt-12 p-10 flex flex-col md:flex-row items-center gap-8 bg-gray-900">
      <img
        src="/images/profile.jpg"
        alt="profile-image"
        className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 shadow-md"
      />
      <div>
        <h1 className="text-3xl font-bold text-white mb-4 md:text-start text-center">
          👋 About Me
        </h1>
        <p className="text-gray-300 text-lg mb-4">
          I'm Shashank Parashar - a passionate web developer and content creator
          who loves building friendly digital experiences and helping others
          grow into confident, modern developers.
        </p>
        <Link
          to="/about"
          className="inline-block text-blue-400 hover:underline text-sm"
        >
          Learn More About Me
        </Link>
      </div>
    </section>
  );
};

export default AboutPreview;
