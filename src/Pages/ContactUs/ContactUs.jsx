import Form from "./Sections/Form";
import Map from "./Sections/Map";
import PrimaryHero from "../../Components/PrimaryHead";
import { useMetaTags } from "../../hooks/useMetaTags";

const ContactUs = () => {
  useMetaTags({
    title: "Contact Us - Vernoxy Media",
    description: "Ready to transform your business? Contact Vernoxy Media for AI-powered digital marketing solutions. Let's discuss your project and grow together.",
    keywords: "vernoxymedia, social media management, digital marketing, web development, Valsad, ERP solutions ",
    image: "../../../public/favicon.svg",
    url: "https://vernoxymedia.com/contact",
  })
  return (
    <div>
      {/* SEO Meta Tags */}
      <title>Contact Us - Get in Touch | Vernoxy Media</title>
      <meta name="description" content="Ready to transform your business? Contact Vernoxy Media for AI-powered digital marketing solutions. Let's discuss your project and grow together." />
      <meta name="keywords" content="contact Vernoxy, digital marketing consultation, get quote, Vernoxy contact, business inquiry" />
      
      <div className="pb-0">
        <PrimaryHero title={"Contact Us"} subtitle={"Get in Touch with us"} />
      </div>
      <Form />
      <Map />
    </div>
  );
};

export default ContactUs;
