import Form from "./Sections/Form";
import Map from "./Sections/Map";
import PrimaryHero from "../../Components/PrimaryHead";

const ContactUs = () => {
  return (
    <div>
      <div className="pb-0">
        <PrimaryHero title={"Contacts"} subtitle={"Get in Touch with us"} />
      </div>
      <Form />
      <Map />
    </div>
  );
};

export default ContactUs;
