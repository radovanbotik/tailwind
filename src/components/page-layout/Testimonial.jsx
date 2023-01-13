import React from "react";
import { BorderMaxWidth } from "../BorderMaxWidth";

export const Testimonial = () => {
  return (
    <BorderMaxWidth>
      <div className="h-screen-3/4 flex flex-col place-content-evenly items-center space-y-16 bg-slate-600 py-24 px-4 text-white">
        <div className="flex flex-col justify-start space-y-4">
          <h1 className="w-fit font-sans text-4xl font-bold uppercase tracking-tighter">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
          </h1>
          <h6 className="w-fit text-base tracking-tighter">
            - <span className="inline-block first-letter:uppercase">peter</span>{" "}
            <span className="inline-block first-letter:uppercase">johnson</span>
            , long time reader
          </h6>
        </div>
        <div className="flex flex-col justify-start space-y-4">
          <h1 className="w-fit font-sans text-4xl font-bold uppercase tracking-tighter">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
          </h1>
          <h6 className="w-fit text-base tracking-tighter">
            - <span className="inline-block first-letter:uppercase">peter</span>{" "}
            <span className="inline-block first-letter:uppercase">johnson</span>
            , long time reader
          </h6>
        </div>
      </div>
    </BorderMaxWidth>
  );
};
