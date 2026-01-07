import React from "react";
import Heading from "../Components/Heading";
import BgImg from ".././assets/GlobalPresence/BgImg.png";
import svg1 from ".././assets/GlobalPresence/svg1.svg";
import svg2 from ".././assets/GlobalPresence/svg2.svg";
import svg3 from ".././assets/GlobalPresence/svg3.svg";
import svg4 from ".././assets/GlobalPresence/svg4.svg";
import svg5 from ".././assets/GlobalPresence/svg5.svg";
import svg6 from ".././assets/GlobalPresence/svg6.svg";
import { useNavigate } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import Gujarat from "../assets/StateImg/Gujrat.jpg";
import Maharashtra from "../assets/StateImg/Maharashtra.jpg";
import LeftTop from "../assets/ContactPageImg/LeftTop.svg";

const PrimaryPresence = ({ boldText, normalText, description }) => {
  const navigate = useNavigate();
  const CountryData = [
    { id: 1, image: svg1, contry: "India" },
    { id: 2, image: svg2, contry: "Canada" },
    { id: 3, image: svg3, contry: (<>New <br /> Zealand</>) },
    { id: 4, image: svg4, contry: "USA" },
    { id: 5, image: svg5, contry: "UAE" },
    { id: 6, image: svg6, contry: "Vietnam" },
  ];
  const [activeCountry, setActiveCountry] = React.useState("India");
  const [mobileDrawerCountry, setMobileDrawerCountry] = React.useState(null);
  const presenceData = {
    India: [
      {
        id: 1,
        name: "Gujarat",
        text: "Strategic regional presence across Gujarat's key industrial and tech hubs.",
        image: Gujarat,
        cities: [
          "Ahmedabad",
          "Surat",
          "Vapi",
          "Vadodara",
          "Gandhinagar",
          "Anand",
          "Sachin",
          "Dahej",
          "Valsad",
          "Sarigam",
          "Silvassa",
          "Umabergaon",
        ],
      },
      {
        id: 2,
        name: "Maharashtra",
        text: "Strategic regional presence across Maharashtra's key industrial and tech hubs.",
        image: Maharashtra,
        cities: ["Mumbai", "Pune", "Nashik", "Aurangabad"],
      },
    ],

    Canada: [
      {
        id: 1,
        name: "Ontario",
        text: "Strategic regional presence across Ontario's key industrial and tech hubs.",
        image: Gujarat,
        cities: ["Toronto", "Mississauga", "Ottawa", "Brampton"],
      },
    ],

    USA: [
      {
        id: 1,
        name: "New York City",
        text: "Strategic regional presence across New York's key industrial and tech hubs.",
        image: Gujarat,
        cities: ["Queens", "Brooklyn", "Manhattan", "Staten Island"],
      },
    ],

    "New Zealand": [
      {
        id: 1,
        name: "Auckland",
        text: "Strategic regional presence across Auckland's key hubs.",
        image: Gujarat,
        cities: ["Devonport", "Waiuku", "Auckland"],
      },
    ],

    UAE: [
      {
        id: 1,
        name: "Dubai",
        text: "Strategic regional presence across Dubai.",
        image: Gujarat,
        cities: ["Dubai"],
      },
    ],

    Vietnam: [
      {
        id: 1,
        name: "Hanoi",
        text: "Strategic regional presence across Hanoi.",
        image: Gujarat,
        cities: ["Hanoi"],
      },
    ],
  };

  const handleCityClick = (city) => {
    const citySlug = city.toLowerCase().replace(/\s+/g, "-");
    navigate(`/${citySlug}`);
  };

  const handleCountryClick = (countryName) => {
    setActiveCountry(countryName);
    if (window.innerWidth < 768) {
      setMobileDrawerCountry(
        mobileDrawerCountry === countryName ? null : countryName
      );
    }
  };
  const currentStateData = presenceData[activeCountry] || [];
  const shouldShowStateSection =
    currentStateData && currentStateData.length > 0;

  return (
    <section
      className="relative z-10 bg-no-repeat bg-top"
      style={{ backgroundImage: `url(${BgImg})` }}
    >
      <div className="container space-y-7 md:space-y-10">
        <div className="space-y-5">
          <Heading
            boldText={boldText}
            normalText={normalText}
            className="font-Bai_Jamjuree text-xl md:text-5xl capitalize text-center"
          />
          <p className="mx-auto w-full leading-relaxed xl:w-[40%]">
            {description}
          </p>
        </div>

        {/* COUNTRY GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-7">
          {CountryData.map((country) => {
            const countryName =
              typeof country.contry === "string"
                ? country.contry
                : "New Zealand";

            const isActive = activeCountry === countryName;
            return (
              <div key={country.id}>
                {/* COUNTRY CARD */}
                <div
                  onClick={() => handleCountryClick(countryName)}
                  className={`flex md:h-full flex-col group relative items-center justify-start text-center gap-2 rounded-xl bg-[#464646]/60 md:pt-12 p-10 md:p-5 transition-all duration-300 border-2 cursor-pointer ${
                    isActive
                      ? "border-primary"
                      : "border-transparent hover:border-primary"
                  }`}
                >
                  <img src={country.image} alt="" className="w-16 h-16" />
                  <p className="xl:text-3xl font-BaiJamjuree font-bold">
                    {country.contry}
                  </p>
                  <GoArrowRight
                    className={`p-2.5 absolute text-4xl top-3 right-3 rounded-full transition-all duration-500 ${
                      isActive
                        ? "bg-gradient-to-r from-primary to-white text-[#1168B5] -rotate-45"
                        : "bg-white/20 text-white group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-white group-hover:-rotate-45 group-hover:text-[#1168B5]"
                    }`}
                  />
                </div>

                {/* 📱 MOBILE STATE STACK */}
                {mobileDrawerCountry === countryName && (
                  <div className="md:hidden mt-4 space-y-10">
                    {presenceData[countryName]?.map((state) => (
                      <div
                        key={state.id}
                        className="bg-[#464646]/50 rounded-xl p-5 space-y-6 flex flex-col"
                      >
                        {/* IMAGE — order 1 on mobile */}
                        <img
                          src={state.image}
                          alt={state.name}
                          className="w-full rounded-lg object-cover order-1"
                        />

                        {/* CONTENT — order 2 on mobile */}
                        <div className="space-y-6 order-2">
                          <h2 className="text-3xl font-bold flex items-center gap-3">
                            <span className="w-2 h-2 bg-primary rounded-full"></span>
                            {state.name}
                          </h2>

                          <p className="text-start w-full">{state.text}</p>

                          <div className="flex flex-wrap gap-3">
                            {state.cities.map((city) => (
                              <button
                                key={city}
                                onClick={() => handleCityClick(city)}
                                className="border px-3 py-1 rounded-lg border-primary hover:bg-primary"
                              >
                                {city}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* DESKTOP STATE SECTION (UNCHANGED) */}
        {shouldShowStateSection && (
          <div className="hidden md:block space-y-20 pt-16">
            <Heading
              boldText="Our Presence"
              normalText={`In ${activeCountry}`}
              className="font-Bai_Jamjuree text-xl md:text-5xl capitalize text-center"
            />

            {currentStateData.map((state, index) => (
              <div key={state.id} className="relative z-10">
                <img
                  src={LeftTop}
                  alt=""
                  className="absolute md:left-[-24px] md:top-[-24px] -z-10"
                />

                <div className="grid grid-cols-1 xl:grid-cols-2 bg-[#464646]/50">
                  {/* TEXT SECTION */}
                  <div
                    className={`m-16 ${
                      index % 2 === 0
                        ? "order-2 xl:order-1"
                        : "order-2 xl:order-2"
                    }`}
                  >
                    <div className="space-y-6">
                      <h2 className="text-5xl font-bold flex items-center gap-3">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        {state.name}
                      </h2>

                      <p className="text-start w-full xl:w-[95%] ">
                        {state.text}
                      </p>

                      <div className="flex flex-wrap gap-4">
                        {state.cities.map((city) => (
                          <button
                            key={city}
                            onClick={() => handleCityClick(city)}
                            className="border px-3 py-1 rounded-lg border-primary hover:bg-primary"
                          >
                            {city}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* IMAGE SECTION */}
                  <div
                    className={`h-full ${
                      index % 2 === 0
                        ? "order-1 xl:order-2"
                        : "order-1 xl:order-1"
                    }`}
                  >
                    <img
                      src={state.image}
                      alt={state.name}
                      className="h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PrimaryPresence;
