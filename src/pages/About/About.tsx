import PageHeader from "../../components/PageHeader/PageHeader";
import WhatWeWork from "./Sections/WhatWeWork";
import Pillars from "./Sections/Pillars";
import WhyChooseUs from "./Sections/WhyChooseUs";
import Timeline from "./Sections/Timeline";
import Cta from "../Home/Sections/Cta";

const About = () => {
  return (
    <>
      <PageHeader
        backgroundImage="/services-imgs/guide.webp"
        pageName="About Us"
        breadcrumbs={[{ label: "About Us", href: "/about" }]}
      />
      <WhatWeWork />
      <Pillars />
      <WhyChooseUs />
      <Timeline />
      <Cta
        backgroundImage={"/services-imgs/fire-spray.webp"}
        onButtonClick={() => console.log("chat clicked")}
      />
    </>
  );
};

export default About;
