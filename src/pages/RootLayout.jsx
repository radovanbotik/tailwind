import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/navigation/Navbar";
import { BorderMaxWidth } from "../components/BorderMaxWidth";

export const RootLayout = () => {
  return (
    <div className="">
      {/* <BorderMaxWidth>
        <Navbar />
      </BorderMaxWidth> */}
      <Outlet />
    </div>
  );
};
