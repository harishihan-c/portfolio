import React from "react";
import NavBar from "./components/NavBar";
import Home from "./sections/Home/Home";
import About from "./sections/About/About";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Projects/Projects";
import Contact from "./sections/Contact/Contact";

const App = () => {
  return (
    <div>
      <NavBar />
      <section id="home" className="h-screen">
        <Home />
      </section>
      <section id="about" className="h-screen">
        <About />
      </section>
      <section id="skills" className="h-screen">
        <Skills />
      </section>
      <section id="projects" className="h-screen">
        <Projects />
      </section>
      <section id="contact" className="h-screen">
        <Contact />
      </section>
    </div>
  );
};

export default App;
