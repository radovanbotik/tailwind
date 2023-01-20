import React from "react";
import { Pribeh_Pavuk } from "../components/Pribeh_Pavuk";
import tv from "../assets/for-bg/vintage-tv-min.png";

export const Frontpage = () => {
  return (
    <div className="overflow-hidden ">
      {/* <div className="fixed h-full w-full">
        <img src={tv} alt="" className="object-contain" />
      </div> */}
      <Pribeh_Pavuk />
    </div>
  );
};
