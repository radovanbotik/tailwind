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
  return (
    <div>
      <div>
        <Product />
      </div>
    </div>
  );
};
