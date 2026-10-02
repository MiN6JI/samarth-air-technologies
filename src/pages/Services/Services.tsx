import PageHeader from "../../components/PageHeader/PageHeader";
import Facilities from "./Sections/Facilities";
import Cta from "../Home/Sections/Cta";

const Services = () => {
  return (
    <>
      <PageHeader
        backgroundImage="/services-imgs/guide.webp"
        pageName="Services"
        breadcrumbs={[{ label: "Services", href: "/services" }]}
      />

      <Facilities />
      <Cta
        backgroundImage={"/services-imgs/fire-spray.webp"}
        onButtonClick={() => console.log("Chat Clicked")}
      />
    </>
  );
};

export default Services;
