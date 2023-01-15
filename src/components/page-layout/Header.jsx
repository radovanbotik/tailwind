import React from "react";
import { BorderMaxWidth } from "../BorderMaxWidth";

export const Header = () => {
  return (
    <BorderMaxWidth>
      <div className="bg-slate-600 py-24 px-4 text-white">
        {/* <h1 className="text-center font-sans text-4xl font-extrabold uppercase leading-13 tracking-tighter drop-shadow-2xl md:text-6xl lg:text-8xl">
          nová kniha a ilustrácie
        </h1> */}
        <h1 className="tracking-snug text-center font-poleno text-4xl font-normal uppercase leading-13 drop-shadow-2xl md:text-6xl lg:text-8xl">
          nová kniha a ilustrácie
        </h1>
      </div>
    </BorderMaxWidth>
  );
};
