import PageHeader from "../../components/PageHeader/PageHeader";
import ContactForm from "./Sections/ContactForm";
import WhatHappensNext from "./Sections/WhatHappensNext";

const Contact = () => {
  return (
    <>
      <PageHeader
        backgroundImage={
          "https://demo.awaikenthemes.com/coolify/demo2/wp-content/uploads/2025/07/what-we-do-image.jpg"
        }
        pageName="Contact Us"
        breadcrumbs={[{ label: "Contact Us", href: "/contact" }]}
      />
      <ContactForm />
      <WhatHappensNext />
    </>
  );
};

export default Contact;
