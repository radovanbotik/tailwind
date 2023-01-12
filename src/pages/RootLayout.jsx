import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/navigation/Navbar";

export const RootLayout = () => {
  return (
    <div className="mx-auto max-w-screen-xl sm:px-4">
      <Navbar />
      <Outlet />
    </div>
  );
};
