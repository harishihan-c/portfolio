import React from "react";

const NavBar = () => {
  return (
    <div className="w-2xl  mx-auto mt-2 px-10 py-4 flex justify-between items-center rounded-full border ">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </div>
  );
};

export default NavBar;
