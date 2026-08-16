import Hero from "./Sections/Hero";
import Features from "./Sections/Features";
import About from "./Sections/About";
import StatsBar from "./Sections/StatsBar";
import Cta from "./Sections/Cta";

import Faq from "./Sections/Faq";

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
