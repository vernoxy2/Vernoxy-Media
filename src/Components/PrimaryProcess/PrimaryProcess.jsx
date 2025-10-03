import React from "react";
import RightSec from "./RightSec";
import LeftSec from "./LeftSec";

const PrimaryProcess = ({Planning}) => {
  return (
    <div className="container">
      <div className="flex flex-col xl:flex-row ">
        <div className="xl:w-7/12">
          <LeftSec planning={Planning}/>
        </div>
        <div className=" xl:w-5/12  ">
          <RightSec />
        </div>
      </div>
    </div>
  );
};

export default PrimaryProcess;
