import React, { useState } from "react";
import All from "./All";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Languages from "./Languages";
import Tools from "./Tools";

const StackNav = () => {
  const [active, setActive] = useState("all");

  return (
    <div>
      <nav>
        <button onClick={() => setActive("all")}>All</button>
        <button onClick={() => setActive("frontend")}>Frontend</button>
        <button onClick={() => setActive("backend")}>Backend</button>
        <button onClick={() => setActive("languages")}>Languages</button>
        <button onClick={() => setActive("tools")}>Tools</button>
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
