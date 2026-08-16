import PageHeader from "../../components/PageHeader/PageHeader";
import Services from "./Sections/Services";
import WhatWeWork from "./Sections/WhatWeWork";
import WhatWeDo from "./Sections/WhatWeDo";
import Advantage from "./Sections/Advantage";
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
      {/* <Services /> */}
      {/* <WhatWeDo /> */}
      {/* <Advantage /> */}
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
