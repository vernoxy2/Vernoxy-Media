import Logo from "../assets/Logo.svg";
import bg from "../assets/BigBG.svg";
import { Link } from "react-router-dom";
import PrimaryBtn from "./PrimartyBtn";
import { LuMapPin } from "react-icons/lu";
import { MdAddCall } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { RiTwitterXFill } from "react-icons/ri";
import PrimaryBg from "./PrimaryBg";
import { IoLocationOutline } from "react-icons/io5";

const Links = [
  { id: 1, name: "Home", Link: "/" },
  { id: 2, name: "About us", Link: "/about-us" },
  // { id: 3, name: "Products", Link: "/products" },
  { id: 4, name: "Global Presence", Link: "/global-presence" },
];

const SerLinkd = [
  { id: 1, name: "Application Development", Link: "/services/app_development" },
  { id: 2, name: "Web Development", Link: "/services/web_development" },
  { id: 3, name: "Digital Marketing", Link: "/services/digital_marketing" },
  { id: 4, name: "Customized CRM", Link: "/services/customized_crm" },
];

const Soical = [
  {
    id: 1,
    icon: <FaWhatsapp />,
    Link: "https://api.whatsapp.com/send/?phone=919624150967&text&type=phone_number&app_absent=0",
  },
  {
    id: 2,
    icon: <FaFacebookF />,
    Link: "https://www.facebook.com/profile.php?id=61577085965987",
  },
  {
    id: 3,
    icon: <TiSocialInstagram />,
    Link: "https://www.instagram.com/",
  },
  {
    id: 4,
    icon: <RiTwitterXFill />,
    Link: "https://twitter.com/",
  },
];

const Footer = () => {
  return (
    <section className="overflow-hidden pb-10">
      {/* Main Container */}
      <div className="container  mx-auto grid grid-cols-1 lg:grid-cols-6 gap-y-8 gap-x-6">
        {/* First column */}
        <div className="text-start space-y-5 col-span-2 ">
          <img src={Logo} alt="Logo" className="w-32" />
          <p className="font-Mulish ">
            Transforming Ideas into Digital Excellence. Elevate your online
            presence with our innovative solutions and strategic digital
            services.
          </p>
          <div className="flex gap-3">
            <MdAddCall className="text-5xl text-primary" />
            <h1 className="font-bold text-xl lg:text-2xl font-Bai_Jamjuree">
              +91 96241 50967
            </h1>
          </div>
          <div className="flex gap-3">
            <MdAddCall className="text-5xl text-primary" />
            <h1 className="font-bold text-xl lg:text-2xl font-Bai_Jamjuree">
              +1 (437) 559-8317
            </h1>
          </div>
          <div className="flex gap-3">
            <HiOutlineMail className="text-5xl text-primary" />
            <p className="font-Mulish ">
              vernoxy2@gmail.com <br /> Any queries? Mail Now.
            </p>
          </div>
        </div>

        {/* Second column */}
        <div className="text-start space-y-5 lg:mx-auto  col-span-2 lg:col-span-1 ">
          <h1 className="font-extrabold text-3xl text-primary font-Bai_Jamjuree">
            Quick Links
          </h1>
          <ul className="font-Mulish font-semibold flex flex-col space-y-2 list-none">
            {Links.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.Link}
                  className="hover:text-primary/80 transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Third column */}
        <div className="text-start space-y-5 mx-auto  w-full">
          <h1 className="font-extrabold text-3xl text-primary font-Bai_Jamjuree">
            Services
          </h1>
          <ul className="font-Mulish font-semibold flex flex-col space-y-2 list-none">
            {SerLinkd.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.Link}
                  className="hover:text-primary/80 transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Fourth column */}
        <div className="text-start space-y-4 lg:w-[90%] lg:ml-auto col-span-2">
          <h1 className="font-extrabold text-3xl  md:text-2xl text-primary font-Bai_Jamjuree">
            Subscribe Our Newsletter
          </h1>
          <input
            type="text"
            placeholder="Enter your email"
            className="bg-[#D9D9D9]/10 p-4 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <PrimaryBtn type="submit" className="w-full">
            Subscribe
          </PrimaryBtn>
          <div className="flex items-start gap-1 md:gap-3 ">
            <LuMapPin className="min-h-12 min-w-12 text-primary flex items-center  " />
            <p className="font-Mulish ">
              513, KBC Complex , Dharampur Chokdi, Valsad, Gujarat 396001
            </p>
          </div>
          <div className="flex items-center justify-start gap-1 md:gap-3 ">
            <LuMapPin className="min-w-12 min-h-12 text-primary flex items-center  justify-center " />
            <p className="font-Mulish ">London, Ontario, Canada.</p>
          </div>
        </div>
      </div>
      <div className="relative z-10">
        {/* Gradient divider line */}
        <div className="bg-gradient-to-r from-primary/50 via-black to-primary/50 h-[3px]" />

        {/* Floating social icons */}
        <div
          className="flex gap-5 justify-center absolute w-full -top-[18px] md:-top-6 left-1/2 -translate-x-1/2 
                px-4 py-2 rounded-lg z-20"
        >
          {Soical.map((item) => (
            <Link
              to={item.Link}
              key={item.id}
              className=" text-2xl md:text-4xl text-primary hover:text-white duration-300 transition-colors"
            >
              {item.icon}
            </Link>
          ))}
        </div>
        
        <p className="text-center pt-8 sm:pt-8 md:pt-10 text-white  mt-auto text-sm md:text-base">
            © {new Date().getFullYear()} Developed by @Vernoxy
          </p>

        {/* Background image centered at bottom */}
        <div className="absolute -bottom-[460px] left-1/2 -translate-x-1/2 z-0">
          <img
            src={bg}
            alt="Background Blur"
            className="object-cover rotate-180"
          />
        </div>
      </div>
    </section>
  );
};

export default Footer;
