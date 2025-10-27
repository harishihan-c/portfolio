import React, { useState } from "react";

const NavBar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const activeColor = "bg-[#D7FF00] w-28 px-2 py-3 rounded-full"
  return (
    <div className="w-2xl  mx-auto mt-5 px-10 py-2 flex justify-between items-center rounded-full border text-center ">
      <a
        onClick={() => setActiveSection("home")}
        className={`${activeSection === "home" ? activeColor : ""} `}
        href="#home"
      >
        Home
      </a>
      <a
        onClick={() => setActiveSection("about")}
        href="#about"
        className={`${activeSection === "about" ? activeColor : ""}`}
      >
        About
      </a>
      <a
        onClick={() => setActiveSection("skills")}
        className={`${activeSection === "skills" ? activeColor : ""}`}
        href="#skills"
      >
        Skills
      </a>
      <a
        onClick={() => setActiveSection("projects")}
        className={`${activeSection === "projects" ? activeColor : ""}  `}
        href="#projects"
      >
        Projects
      </a>
      <a
        onClick={() => setActiveSection("contact")}
        className={`${activeSection === "contact" ? activeColor : ""}`}
        href="#contact"
      >
        Contact
      </a>
    </div>
  );
};

export default NavBar;
