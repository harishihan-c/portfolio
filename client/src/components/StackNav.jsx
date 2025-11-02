import React, { useState } from "react";
import All from "./All";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Languages from "./Languages";
import Tools from "./Tools";

const StackNav = () => {
  const [active, setActive] = useState("all");

  const nameArray = ["all", "frontend", "backend", "languages", "tools"];

  const handleOnClick = (index) => {
    setActive(() => nameArray[index]);
  };

  return (
    <div className="h-screen flex flex-col">
      <nav className="flex items-center justify-center gap-8 h-[30%] ">
        <button
          onClick={() => handleOnClick(0)}
          className={`${
            active === nameArray[0] ? "text-lime-primary bg-black" : ""
          } px-6  py-1.5`}
        >
          All
        </button>
        <button
          onClick={() => handleOnClick(1)}
          className={`${
            active === nameArray[1] ? "text-lime-primary bg-black" : ""
          } px-6 py-1.5`}
        >
          Frontend
        </button>
        <button
          onClick={() => handleOnClick(2)}
          className={`${
            active === nameArray[2] ? "text-lime-primary bg-black" : ""
          }  px-6 py-1.5`}
        >
          Backend
        </button>
        <button
          onClick={() => handleOnClick(3)}
          className={`${
            active === nameArray[3] ? "text-lime-primary bg-black" : ""
          }  px-6 py-1.5`}
        >
          Languages
        </button>
        <button
          onClick={() => handleOnClick(4)}
          className={`${
            active === nameArray[4] ? "text-lime-primary bg-black" : ""
          }  px-6 py-1.5`}
        >
          Tools
        </button>
      </nav>

      <div>
        {active === "all" && <All />}
        {active === "frontend" && <Frontend />}
        {active === "backend" && <Backend />}
        {active === "languages" && <Languages />}
        {active === "tools" && <Tools />}
      </div>
    </div>
  );
};

export default StackNav;
