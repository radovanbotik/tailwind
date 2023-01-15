import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import pavuk from "../assets/images/pavukputnik_frontpage.png";
import { motion } from "framer-motion";

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
    <motion.div className="relative shrink-0 overflow-hidden rounded-xl shadow-lg">
      <img
        src={img}
        alt=""
        className="pointer-events-none h-60 md:h-72 lg:h-96 xl:h-128"
      />
      <h6 className="bg-white text-center">{name}</h6>
    </motion.div>
  );
};

export const ImageSliderMotion = () => {
  const sliderRef = useRef();
  const [width, setWidth] = useState(0);
  const cards = items.map(item => <Card key={item.id} {...item} />);

  useEffect(() => {
    setWidth(sliderRef.current.scrollWidth - sliderRef.current.offsetWidth);
  }, []);

  return (
    <motion.div
      className=" mx-auto w-full overflow-x-hidden bg-slate-600 px-6 py-4 md:px-24"
      ref={sliderRef}
    >
      <motion.div
        className="flex gap-16"
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
      >
        {cards}
      </motion.div>
    </motion.div>
  );
};
