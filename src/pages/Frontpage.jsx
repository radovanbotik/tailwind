import React from "react";
import { Header } from "../components/page-layout/Header";
import { Product } from "../components/page-layout/Product";
import { Testimonial } from "../components/page-layout/Testimonial";
import { Bio } from "../components/page-layout/Bio";
import pavuk from "../assets/images/pavuk.png";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { ImagePreviewSlider } from "../components/page-layout/ImagePreviewSlider";
import { BackgroundH1 } from "../components/page-layout/BackgroundH1";

export const Frontpage = () => {
  const tl = useRef();
  const pavukRef = useRef();

  const toggleAnimation = () => {
    tl.current.reversed(!tl.current.reversed());
  };
  const runAnimation = () => {
    toggleAnimation();
  };

  useLayoutEffect(() => {
    const context = gsap.context(self => {
      const pavuk = document.querySelector("#pavuk");
      tl.current = gsap
        .timeline()
        .fromTo(
          pavuk,
          { top: "-200" },
          {
            top: "40%",
            duration: 1,
            ease: "elastic.out(0.9, 0.6)",
            // repeat: 1,
            // yoyo: true,
            // animationDelay: 0.1,
          }
        )
        .reverse();
    }, pavukRef);
    return () => context.revert();
  }, []);

  return (
    <div>
      <div className="flex">
        <Product runAnimation={runAnimation} />
      </div>
      <div
        ref={pavukRef}
        id="pavuk"
        className="pointer-events-none absolute top-0 right-1/4 h-40 w-40"
      >
        <img src={pavuk} alt="" />
      </div>
    </div>
  );
};
