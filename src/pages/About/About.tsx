import { PageHeader } from "../../components/PageHeader/PageHeader";
import Services from "./Sections/Services";
import WhatWeDo from "./Sections/WhatWeDo";
import Advantage from "./Sections/Advantage";
import Faq from "./Sections/Faq";
const About = () => {
  return (
    <>
      <PageHeader />
      <Services />
      <WhatWeDo />
      <Advantage />
      <Faq />
    </>
  );
};

export default About;
