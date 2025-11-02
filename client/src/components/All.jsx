import React, { useRef } from "react";
import {assets} from "../assets/images/assets.js"

const All = () => {
  const mainContainer = useRef(null);

  return (
    <div ref={mainContainer}>
        <div className="font-integral-extra-bold text-[40px] sm:text-7xl  w-[70%] mx-auto text-center">
          The{" "}
          <span className=" bg-black text-[#D7FF00] px-5 pb-4 pt-0 inline-block ">
            Stack
          </span>{" "}
          <p>Behind My Work</p>
        </div>
        <div className="absolute w-[5%] flex">
            <img src={assets.css} alt="" />
            <img src={assets.express} alt="" />
            <img src={assets.figma} alt="" />
            <img src={assets.firebase} alt="" />
            <img src={assets.git} alt="" />
            <img src={assets.github} alt="" />
            <img src={assets.html} alt="" />
            <img src={assets.idea} alt="" />
            <img src={assets.java} alt="" />
            <img src={assets.js} alt="" />
            <img src={assets.mongodb} alt="" />
            <img src={assets.mysql} alt="" />
            <img src={assets.node} alt="" />
            <img src={assets.postman} alt="" />
            <img src={assets.tailwind} alt="" />
            <img src={assets.vite} alt="" />
            <img src={assets.vscode} alt="" />
            <img src={assets.webstrom} alt="" />   
        </div>
    </div>
  );
};

export default All;
