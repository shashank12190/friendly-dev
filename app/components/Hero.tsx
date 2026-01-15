import { Link } from "react-router";

const Hero = () => {
  return (
    <div className="text-center bg-gray-900 py-20 px-4 text-white transition-colors duration-300">
      <h2 className="text-4xl font-bold mb-4">Hey I'm Shashank Parashar</h2>
      <p className="text-lg max-w-2xl text-gray-400 mx-auto mb-6">
        I build Friendly web experiences and help other to become confident,
        modern
      </p>
      <div className="flex justify-center gap-4">
        <Link
          to="/projects"
          className="bg-blue-600 text-white px-6 py-4 rounded hover:bg-blue-700 transition"
        >
          View Projects
        </Link>
        <Link
          to="/contact"
          className="border border-blue-500 text-blue-400 px-6 py-4 hover:bg-blue-700 hover:text-white"
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
};

export default Hero;
