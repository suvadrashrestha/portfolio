import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
