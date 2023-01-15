import React from "react";
import { BorderMaxWidth } from "../BorderMaxWidth";
import pavuk from "../../assets/images/pavukputnik_frontpage.png";

export const BackgroundH1 = () => {
  return (
    <BorderMaxWidth>
      <div className="">
        <h1
          className=" custom-shadow-border text-fill bg-contain bg-fixed bg-clip-text bg-top bg-repeat-x text-center font-poleno text-[300px] font-normal uppercase leading-none tracking-tightest drop-shadow-2xl"
          style={{ backgroundImage: `url(${pavuk})` }}
        >
          pavúk pútnik
        </h1>
      </div>
    </BorderMaxWidth>
  );
};
