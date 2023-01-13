import React from "react";
import { Link } from "react-router-dom";
import svg from "../../assets/react.svg";
import pavuk from "../../assets/images/pavuk.png";

export const Navbar = () => {
  return (
    <nav className=" flex flex-wrap items-center gap-4 bg-slate-600 py-8 px-4 text-white">
      {/* Logo */}
      <div className=" mr-auto md:mr-0">
        <Link to="/">
          <img src={pavuk} alt="" className="object-c h-8 w-8" />
        </Link>
      </div>
      {/* Links */}
      <div className="flex space-x-2 md:mr-auto">
        <Link to="/books" className="px-4 py-2">
          Knihy
        </Link>
        <Link to="/about" className="px-4 py-2">
          O autorke
        </Link>
      </div>
      {/* form */}
      <div className="flex-1 md:flex-initial">
        <form className=" flex justify-center sm:flex-row ">
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
    </nav>
  );
};
