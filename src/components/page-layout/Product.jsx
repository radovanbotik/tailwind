import React from "react";
import frontpage from "../../assets/images/pavuk_book_cover2.png";
import { BorderMaxWidth } from "../BorderMaxWidth";

export const Product = ({ runAnimation }) => {
  return (
    <BorderMaxWidth>
      <div className="flex min-h-screen  bg-slate-600 py-24 px-4 text-white ">
        <div className="my-auto mx-auto flex  flex-col place-content-center md:flex-row md:gap-16">
          <div className="h-160 flex-1 overflow-hidden">
            <img
              src={frontpage}
              alt=""
              className="mx-auto h-full w-full max-w-xl object-contain "
            />
          </div>
          <div className=" flex-1 ">
            <div className=" mx-auto max-w-md space-y-8 text-center md:mr-auto md:ml-0 md:text-left">
              <h1 className="font-sans text-7xl font-extrabold uppercase  tracking-tightest">
                pavúk pútnik
              </h1>
              <button
                className="w-2/3 bg-slate-400 px-4 py-6 font-semibold text-black first-letter:uppercase"
                onClick={runAnimation}
              >
                nahliadnuť
              </button>
              <p className="whitespace-pre-line ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                Aliquam, rerum ipsa tempore soluta accusamus reprehenderit quas
                quos. Neque harum rem consectetur distinctio voluptas
                necessitatibus molestias officiis minima natus eos corporis
                labore, hic fugiat veritatis iure cumque assumenda a tenetur
                porro fugit id error molestiae provident! Minima consequatur,
                delectus debitis totam provident ab amet autem quis earum
                corporis placeat maiores, aspernatur, deleniti reprehenderit
                ducimus. Vero soluta doloremque, maiores doloribus voluptatibus
                quia iure molestiae voluptate enim quidem consectetur.
                Voluptatum voluptatem natus deserunt maiores dolores
              </p>
            </div>
          </div>
        </div>
      </div>
    </BorderMaxWidth>
  );
};
