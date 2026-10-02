import Hero from "./Sections/Hero";
import Features from "./Sections/Features";
import About from "./Sections/About";
import StatsBar from "./Sections/StatsBar";
import Cta from "./Sections/Cta";

import Faq from "./Sections/Faq";
import SectorWeServe from "../../components/SectorWeServe";

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <About />
      <StatsBar />
      <SectorWeServe />
      <Faq />
      <Cta
        backgroundImage={"/services-imgs/electrical-variant.webp"}
        onButtonClick={() => console.log("chat clicked")}
      />
    </>
  );
};

export default Home;
