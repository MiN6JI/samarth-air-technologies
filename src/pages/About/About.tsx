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
        backgroundImage="../public/services/guide.webp"
        pageName="About Us"
        breadcrumbs={[{ label: "About Us", href: "/about" }]}
      />
      <WhatWeWork />
      <Pillars />
      <WhyChooseUs />
      <Timeline />
      <Cta
        backgroundImage={
          "https://demo.awaikenthemes.com/coolify/demo2/wp-content/uploads/2025/07/what-we-do-image.jpg"
        }
        onButtonClick={() => console.log("chat clicked")}
      />
    </>
  );
};

export default About;
