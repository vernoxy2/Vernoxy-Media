import React from "react";
import ContHero from "./Sections/ContHero";
import Form from "./Sections/Form";
import Video from "./Sections/Video";
import Map from "./Sections/Map";
import PrimaryHero from "../../Components/PrimaryHead";

const ContactUs = () => {
  return (
    <div>
      <section className="pb-0">
        <PrimaryHero title={"Contacts"} subtitle={"Get in Touch with us"} />
      </section>
      <Form />
      <Video />
      <Map />
    </div>
  );
};

export default ContactUs;
