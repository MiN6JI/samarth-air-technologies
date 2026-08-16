import PageHeader from "../../components/PageHeader/PageHeader";
import WhatWeWork from "./Sections/WhatWeWork";
import Cta from "../Home/Sections/Cta";
const About = () => {
  return (
    <>
      <PageHeader
        backgroundImage="https://demo.awaikenthemes.com/coolify/demo2/wp-content/uploads/2025/07/page-header-bg.jpg"
        pageName="About Us"
        breadcrumbs={[{ label: "About Us", href: "/about" }]}
      />
      <WhatWeWork />
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
