import { useState, useEffect } from "react";
import AmbientBackground from "./components/AmbientBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = ["home", "about", "services", "projects", "team", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      style={{
        backgroundColor: "var(--bg-canvas)",
        minHeight: "100vh",
        color: "var(--text-primary)",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      {/* Subtle ambient light background */}
      <AmbientBackground />

      {/* Navigation */}
      <Navbar active={activeSection} />

      {/* Main Sections */}
      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Team />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
