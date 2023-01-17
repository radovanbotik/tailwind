import React from "react";
import { Outlet } from "react-router-dom";
import { BorderMaxWidth } from "../components/BorderMaxWidth";

export const RootLayout = () => {
  // useLocoScroll(true);
  return (
    <div data-scroll-container className="root">
      <Outlet />
    </div>
  );
};
