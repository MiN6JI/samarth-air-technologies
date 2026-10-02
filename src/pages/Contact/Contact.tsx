import PageHeader from "../../components/PageHeader/PageHeader";
import ContactForm from "./Sections/ContactForm";
import WhatHappensNext from "./Sections/WhatHappensNext";

const Contact = () => {
  return (
    <>
      <PageHeader
        backgroundImage={"/services-imgs/guide.webp"}
        pageName="Contact Us"
        breadcrumbs={[{ label: "Contact Us", href: "/contact" }]}
      />
      <ContactForm />
      <WhatHappensNext />
    </>
  );
};

export default Contact;
