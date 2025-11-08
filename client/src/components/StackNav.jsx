import React, { useState, useRef } from "react";
import All from "./All";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Languages from "./Languages";
import Tools from "./Tools";
import { useRefs } from "../context/RfsContext";

const StackNav = () => {
  const { skillsContainerRef, navRef } = useRefs();

  const [active, setActive] = useState("All");

  const nameArray = ["All", "Frontend", "Backend", "Languages", "Tools"];

  const handleOnClick = (index) => {
    setActive(() => nameArray[index]);
  };

  return (
    <div
      
      className="h-screen w-screen flex flex-col relative perspective-distant"
    >
      <nav
        ref={navRef}
        className="flex z-9999 items-center justify-center gap-8 sm:h-[30%] w-ful flex-wrap py-10"
      >
        {nameArray.map((id, index) => (
          <button
            key={id}
            onClick={() => handleOnClick(index)}
            className={`${
              active === id ? "text-lime-primary bg-black" : ""
            } px-6  py-1.5 cursor-pointer`}
          >
            {id}
          </button>
        ))}
      </nav>

      <div>
        {active === "All" && <All key={"all"} />}
        {active === "Frontend" && <Frontend key={"frontend"} />}
        {active === "Backend" && <Backend key={"backend"} />}
        {active === "Languages" && <Languages key={"language"} />}
        {active === "Tools" && <Tools key={"tools"} />}
      </div>
    </div>
  );
};

export default StackNav;
