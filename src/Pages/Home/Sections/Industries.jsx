import React from "react";

const data = [
  { id: 1, name: "Health Care", img: "" },
  { id: 2, name: "Corporate Enterprises", img: "" },
  { id: 3, name: "Retail & eCommerce", img: "" },
  { id: 4, name: "Marketing & Advertising", img: "" },
  { id: 5, name: "Financial Institutions", img: "" },
  { id: 6, name: "Your Industry", img: "" },
];

const Industries = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto mb-10 text-center">
        <h1 className="text-5xl">
          <span className="font-bold">Industries We Are </span>
          <br />
          Transforming
        </h1>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {data.map((industry) => (
          <div
            key={industry.id}
            className="bg-gradient-to-b from-primary/20 hover:from-primary/40 to-vernoxy border-[2px] border-vernoxy hover:border-primary/40 duration-500 text-white h-[150px] rounded-lg flex items-center justify-center text-center px-4 cursor-pointer transition-transform hover:scale-y-105 ease-in-out group"
          >
            <h2 className="text-xl md:text-2xl lg:text-3xl font-Bai_Jamjuree group-hover:scale-110 duration-500 font-semibold transition-transform ease-in-out">
              {industry.name}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Industries;
