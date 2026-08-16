import Hero from "./Sections/Hero";
import Features from "./Sections/Features";
import About from "./Sections/About";
import StatsBar from "./Sections/StatsBar";
import Cta from "./Sections/Cta";

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
      <Features />
      <About />
      <StatsBar />
      <Faq />
      <Cta
        backgroundImage={"https://craftin.in/images/electrical-sample.jpg"}
        onButtonClick={() => console.log("chat clicked")}
      />
    </>
  );
};

export default Home;
