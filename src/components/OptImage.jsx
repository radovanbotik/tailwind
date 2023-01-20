import React, { useState, useEffect } from "react";

export const OptImage = ({ source, placeholder, alt, cover }) => {
  const styles_cover = "h-full w-full object-cover";
  const styles_contain = "h-full w-full object-contain";

  const styles = cover ? styles_cover : styles_contain;

  const [imgSource, setImageSource] = useState(placeholder || source);
  useEffect(() => {
    const img = new Image();
    img.src = source;
    img.onload = () => {
      setImageSource(source);
    };
  }, [source]);

  return <img src={source} alt={alt} className={styles} />;
};
