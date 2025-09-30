import React from "react";
import RightSec from "./RightSec";
import LeftSec from "./LeftSec";

const PrimaryProcess = () => {
  return (
    <div className="container">
      <div className="flex flex-col lg:flex-row ">
        <div className="lg:w-7/12">
          <LeftSec />
        </div>
        <div className=" lg:w-5/12  ">
          <RightSec />
        </div>
      </div>
    </div>
  );
};

export default PrimaryProcess;
