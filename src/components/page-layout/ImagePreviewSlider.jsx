import React from "react";
import { BorderMaxWidth } from "../BorderMaxWidth";
import { ImageSlider } from "../ImageSlider";
import { ImageSliderMotion } from "../ImageSliderMotion";
export const ImagePreviewSlider = () => {
  return (
    <BorderMaxWidth>
      <div className="py-16 px-4">
        <ImageSliderMotion />
      </div>
    </BorderMaxWidth>
  );
};
