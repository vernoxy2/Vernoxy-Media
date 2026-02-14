import React from "react";

const LazyImage = ({ src, alt, className, ...rest }) => {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={className}
      {...rest}
    />
  );
};

export default LazyImage;
