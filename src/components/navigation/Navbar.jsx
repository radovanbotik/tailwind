import React from "react";
import { Link } from "react-router-dom";
import svg from "../../assets/react.svg";

export const Navbar = () => {
  return (
    <nav className=" mb-8 bg-slate-500 ">
      <div className="flex flex-wrap items-center  gap-4 bg-red-700 p-2">
        {/* Logo */}
        <div className=" mr-auto md:mr-0">
          <Link to="/">
            <img src={svg} alt="" className="h-8 w-8 " />
          </Link>
        </div>
        {/* Links */}
        <div className="flex space-x-2 md:mr-auto">
          <Link to="/books" className="px-4 py-2">
            books
          </Link>
          <Link to="/about" className="px-4 py-2">
            about
          </Link>
        </div>
        {/* form */}
        <div className="flex-1 md:flex-initial">
          <form className=" flex justify-center sm:flex-row lg:space-x-2">
            <input
              type="text"
              placeholder="browse..."
              className=" flex-1 appearance-none px-4 py-2"
            />
            <button type="submit" className="bg-blue-500 px-4 py-2">
              search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};
