import { useScrollReveal } from "./hooks/useScrollReveal";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import { useTheme } from "./hooks/useTheme";

/**
 * Single-page portfolio for Chetan Nagoriya.
 * Sections: Home, About, Achievements, Projects, Skills, Contact.
 */
export default function App() {
  useScrollReveal();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="theme-page min-h-screen antialiased">
      <Loader />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Certificates />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
