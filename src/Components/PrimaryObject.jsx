import React from 'react';

const PrimaryObject = ({ src, className = "" }) => {
  return (
    <div className={`absolute animate-roted -z-10 pointer-events-none ${className}`}>
      <img src={src} alt="" />
    </div>
  );
};

export default PrimaryObject;
