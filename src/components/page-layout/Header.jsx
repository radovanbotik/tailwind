import React from "react";
import { BorderMaxWidth } from "../BorderMaxWidth";

export const Header = () => {
  return (
    <BorderMaxWidth>
      <div className="bg-slate-600 py-24 px-4 text-white">
        <h1 className="text-center font-sans text-4xl font-extrabold uppercase leading-13 tracking-tighter md:text-6xl lg:text-8xl">
          nová kniha a ilustrácie
        </h1>
      </div>
    </BorderMaxWidth>
  );
};
