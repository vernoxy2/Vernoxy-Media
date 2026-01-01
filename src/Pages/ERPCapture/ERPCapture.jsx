import React from "react";
import PrimaryHero from "../../Components/PrimaryHead";
import ERPForm from "./Sections/ERPForm";

const ERPCapture = () => {
  return (
    <div>
      <div className="pb-0">
        <PrimaryHero
          title={"ERP Requirement Capture"}
          subtitle={"Standardized customer data collection in 4 simple stages"}
        />
      </div>
      <ERPForm />
    </div>
  );
};

export default ERPCapture;
