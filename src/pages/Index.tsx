import { ThemeProvider } from "@/components/ThemeProvider";
import AnimatedBackground from "@/components/AnimatedBackground";
import FloatingElements from "@/components/FloatingElements";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import AdditionalProjects from "@/components/AdditionalProjects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <AnimatedBackground />
        <FloatingElements />
        <Navigation />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <AdditionalProjects />
        <Skills />
        <Education />
        <Certificates />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
