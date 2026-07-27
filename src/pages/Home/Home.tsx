import Hero from "./Sections/Hero";
import Stats from "./Sections/Stats";
import Trust from "./Sections/Trust";
import Calculator from "./Sections/Calculator";
import Comparison from "./Sections/comparision";
import MonitoringApp from "./Sections/MonitoringApp";
import TrueSection from "./Sections/TrustSection";
import Faq from "./Sections/Faq";
import GoodZeroBanner from "./Sections/GoodZero";
import Blogs from "./Sections/Blogs";
const Home = () => {
  return (
    <>
      <Hero />
      <Stats />
      <Trust />
      <Comparison />
      <Calculator />
      <MonitoringApp />
      <TrueSection />
      <Faq />
      <GoodZeroBanner />
      <Blogs />
    </>
  );
};

export default Home;
