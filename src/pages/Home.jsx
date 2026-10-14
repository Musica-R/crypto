import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Token from "../components/Token";
import Roadmap from "../components/Roadmap";
import Profit from "../components/Profit";
import Team from "../components/Team";
import Documents, { Partners } from "../components/Documents";
import Faq from "../components/Faq";
import Ratings from "../components/Ratings";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Token />
      <Roadmap />
      <Profit />
      <Team />
      <Documents />
      <Partners />
      <Faq />
      <Ratings />
      <Contact />
    </>
  );
}
