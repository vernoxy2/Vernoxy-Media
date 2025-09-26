import React from 'react';

const BottomLine = ({ className = '' }) => {
  return (
    <div
      className={`bg-gradient-to-r rounded-3xl from-primary to-white h-1 max-w-44 mt-8 ${className}`}
    ></div>
  );
};

export default BottomLine;
