import { ThemeProvider } from "@/components/ThemeProvider";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <Navigation />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Certificates />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
