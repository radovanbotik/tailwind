import React from "react";
import { BorderMaxWidth } from "../BorderMaxWidth";
import pavuk from "../../assets/images/pavukputnik_frontpage.png";

export const Bio = () => {
  return (
    <BorderMaxWidth>
      <div className="grid min-h-screen place-items-center bg-slate-600 py-24 px-4 text-white ">
        <div className="flex flex-col gap-16 md:flex-row-reverse">
          <div className="h-128 flex-1 ">
            <div className="mx-auto h-full max-w-xs overflow-hidden rounded-full md:mr-auto md:ml-0">
              <img src={pavuk} alt="" className="h-full w-full object-cover" />
            </div>
          </div>
          <div className=" flex h-full flex-1 place-content-center text-center md:text-right">
            <div className="mx:auto max-w-sm space-y-8 md:ml-auto">
              <h1 className="font-sans text-5xl font-bold uppercase tracking-tighter">
                O autorke
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                dolore, temporibus aperiam incidunt quam soluta velit nemo.
                Explicabo repudiandae voluptates, cum aspernatur voluptatem
                quas, dolor quam quo temporibus modi dignissimos natus. Quae
                eaque voluptates impedit possimus porro error animi nulla quia
                iusto molestiae libero labore ullam tenetur temporibus, unde
                autem odit. Rerum, pariatur amet obcaecati facere necessitatibus
                eum ipsa sed ipsam, ad corporis facilis recusandae tempora!
                Ipsa, eveniet deleniti omnis saepe doloribus nisi error vitae!
              </p>
            </div>
          </div>
        </div>
      </div>
    </BorderMaxWidth>
  );
};
