import PageHeader from "../../components/PageHeader/PageHeader";
import Facilities from "./Sections/Facilities";
import Cta from "../Home/Sections/Cta";

const Services = () => {
  return (
    <>
      <PageHeader
        backgroundImage="https://demo.awaikenthemes.com/coolify/demo2/wp-content/uploads/2025/07/page-header-bg.jpg"
        pageName="Services"
        breadcrumbs={[{ label: "Services", href: "/services" }]}
      />

      <Facilities />
      <Cta
        backgroundImage={
          "https://demo.awaikenthemes.com/coolify/demo2/wp-content/uploads/2025/07/what-we-do-image.jpg"
        }
        onButtonClick={() => console.log("Chat Clicked")}
      />
    </>
  );
};

export default Services;
