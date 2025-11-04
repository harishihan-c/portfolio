import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useState } from "react";

const NavBar = () => {
  const [activeSection, setActiveSection] = useState("home");

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const sectionArray = ["home", "about", "skills", "projects", "contact"];

    const triggers = sectionArray.map((id) => {
      const section = document.getElementById(id);

      if (!section) return null;

      return ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActiveSection(id),
        onEnterBack: () => setActiveSection(id),
      });
    });

    //Show when scroll up
    let lastScroll = window.scrollY;

    const handleNavVisible = () => {
      let currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleNavVisible);

    return () => {
      triggers.forEach((t) => t && t.kill());
    };
  }, []);
  return (
    <div
      className={`fixed z-9999 left-1/2 -translate-x-1/2 w-2xl mt-2 px-10 py-1 flex justify-between items-center rounded-full text-center backdrop-blur-3xl  ${
        isVisible
          ? "translate-y-0 duration-500 "
          : "-translate-y-[200%] duration-500"
      }`}
    >
      <a
        onClick={() => setActiveSection("home")}
        className={`${
          activeSection === "home"
            ? "line-through decoration-lime-primary decoration-4 "
            : ""
        } w-28 px-2 py-2 `}
        href="#home"
      >
        Home
      </a>
      <a
        onClick={() => setActiveSection("about")}
        href="#about"
        className={`${
          activeSection === "about"
            ? "line-through decoration-lime-primary decoration-4 "
            : ""
        } w-28 px-2 py-2`}
      >
        About
      </a>
      <a
        onClick={() => setActiveSection("skills")}
        className={`${
          activeSection === "skills"
            ? "line-through decoration-lime-primary decoration-4 "
            : ""
        }w-28 px-2 py-2`}
        href="#skills"
      >
        Skills
      </a>
      <a
        onClick={() => setActiveSection("projects")}
        className={`${
          activeSection === "projects"
            ? "line-through decoration-lime-primary decoration-4 "
            : ""
        } w-28 px-2 py-2 `}
        href="#projects"
      >
        Projects
      </a>

      <a
        onClick={() => setActiveSection("contact")}
        className={`${
          activeSection === "contact"
            ? "line-through decoration-lime-primary decoration-4 "
            : ""
        } w-28 px-2 py-2`}
        href="#contact"
      >
        Contact
      </a>
    </div>
  );
};

export default NavBar;
