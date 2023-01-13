import React, { useState } from "react";
import { useEffect } from "react";
import pavuk from "../assets/images/pavukputnik_frontpage.png";

const items = [
  { id: 1, img: pavuk, name: "pavuk1" },
  { id: 2, img: pavuk, name: "pavuk2" },
  { id: 3, img: pavuk, name: "pavuk3" },
  { id: 4, img: pavuk, name: "pavuk4" },
  { id: 5, img: pavuk, name: "pavuk5" },
  { id: 6, img: pavuk, name: "pavuk6" },
  { id: 7, img: pavuk, name: "pavuk7" },
  { id: 8, img: pavuk, name: "pavuk8" },
  { id: 9, img: pavuk, name: "pavuk9" },
];
const Card = ({ id, img, name }) => {
  return (
    <div className="card ">
      <img src={img} alt="" className=" max-h-128" />
      <h6 className="bg-white text-center">{name}</h6>
    </div>
  );
};

const cards = items.map(item => <Card key={item.id} {...item} />);

export const ImageSlider = () => {
  const [counter, setCounter] = useState(0);

  const handleForw = e => {
    const groups = [...document.querySelectorAll(".group")];
    if (counter < groups.length - 1) setCounter(prev => prev + 1);
    else setCounter(0);
  };
  const handleBackw = e => {
    const groups = [...document.querySelectorAll(".group")];
    if (counter > 0) setCounter(prev => prev - 1);
    else setCounter(groups.length - 1);
  };
  useEffect(() => {
    const groups = [...document.querySelectorAll(".group")];
    groups.map(
      (group, index) =>
        (group.style.transform = `translateX(calc(-100% * ${counter}))`)
    );
  }, [counter]);
  return (
    <div className="relative mx-auto flex w-3/4 overflow-x-hidden ">
      <button
        className="absolute top-1/2 left-0 z-10 grid place-content-center rounded-full bg-slate-50 p-2"
        onClick={handleBackw}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button
        className="absolute top-1/2 right-0 z-10 grid place-content-center rounded-full bg-slate-50 p-2"
        onClick={handleForw}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>

      <div className="group flex w-full shrink-0 justify-between gap-2 py-8 transition-transform">
        {cards.slice(0, 3)}
      </div>
      <div className="group flex w-full shrink-0 justify-between gap-2 py-8 transition-transform">
        {cards.slice(3, 6)}
      </div>
      <div className="group flex w-full shrink-0 justify-between gap-2 py-8 transition-transform">
        {cards.slice(6, 9)}
      </div>
    </div>
  );
};
