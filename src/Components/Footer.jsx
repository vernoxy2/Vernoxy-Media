import Logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import PrimaryBtn from "./PrimartyBtn";
import { LuMapPin } from "react-icons/lu";
import { MdAddCall } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";

const Links = [
  { id: 1, name: "Home", Link: "/" },
  { id: 2, name: "About us", Link: "/about-us" },
  { id: 3, name: "Projects", Link: "/projects" },
];

const SerLinkd = [
  { id: 1, name: "UI/UX", Link: "/services" },
  { id: 2, name: "Web Development", Link: "/services" },
  { id: 3, name: "Graphics Designer", Link: "/services" },
  { id: 4, name: "Video Editing", Link: "/services" },
];

const Footer = () => {
  return (
    <section>
      {/* Main Container */}
      <div className="container  mx-auto grid grid-cols-1 lg:grid-cols-4 gap-y-8 gap-x-6">
        {/* First column */}
        <div className="text-start space-y-4">
          <img src={Logo} alt="Logo" className="w-32" />
          <p className="font-Mulish ">
            Transforming Ideas into Digital Excellence. Elevate your online
            presence with our innovative solutions and strategic digital
            services.
          </p>
          <div className="flex gap-3">
            <MdAddCall className="text-5xl text-primary" />
            <h1 className="font-bold text-lg">+91 96241 50967</h1>
          </div>
          <div className="flex gap-3">
            <HiOutlineMail className="text-5xl text-primary" />
            <p className="font-Mulish ">
              vernoxy2@gmail.com <br /> Any queries? Mail Now.
            </p>
          </div>
        </div>

        {/* Second column */}
        <div className="text-start space-y-4 lg:mx-auto">
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
        <div className="text-start space-y-4">
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
        <div className="text-start space-y-4">
          <h1 className="font-extrabold text-2xl text-primary font-Bai_Jamjuree">
            Subscribe Our Newsletter
          </h1>
          <input
            type="text"
            placeholder="Enter your email"
            className="bg-[#D9D9D9]/10 p-4 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <PrimaryBtn className="w-full">Subscribe</PrimaryBtn>
          <div className="flex items-center gap-4">
            <LuMapPin className="text-9xl text-primary " />
            <p className="font-Mulish  text-sm">
              Kalaji Business Center, Dharampur Chokdi, NH8, near Saurashtra
              Kadva Patidar Samaj Vadi, Abrama Village, Valsad, Gujarat 396001
            </p>
          </div>
        </div>
      </div>
            <div className="bg-gradient-to-r from-vernoxy via-primary/50 to-vernoxy text-white h-[1px]"></div>
      
    </section>
  );
};

export default Footer;
