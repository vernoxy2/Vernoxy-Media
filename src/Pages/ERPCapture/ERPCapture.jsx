import React from "react";
import PrimaryHero from "../../Components/PrimaryHead";
import ERPForm from "./Sections/ERPForm";
import { useMetaTags } from "../../hooks/useMetaTags";

const ERPCapture = () => {
  useMetaTags({
    title: "Custom ERP Solutions - Business Management Software | Vernoxy Media",
    description: "Streamline your business operations with Vernoxy's custom ERP solutions. AI-powered enterprise resource planning systems tailored to your business needs.",
    keywords: "vernoxymedia, social media management, digital marketing, web development, Valsad, ERP solutions ",
    image: "../../../public/favicon.svg",
    url: "https://vernoxymedia.com/erp-capture",
  })
  return (
    <div>
      {/* SEO Meta Tags */}
      <title>Custom ERP Solutions - Business Management Software | Vernoxy Media</title>
      <meta name="description" content="Streamline your business operations with Vernoxy's custom ERP solutions. AI-powered enterprise resource planning systems tailored to your business needs." />
      <meta name="keywords" content="custom ERP, enterprise resource planning, business management software, ERP solutions, AI ERP, cloud ERP, Vernoxy ERP" />
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
