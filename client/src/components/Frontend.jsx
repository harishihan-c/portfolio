import React from "react";
import { assets } from "../assets/images/assets.js";

const Frontend = () => {
  const frontendArray = [
    "css 3",
    "html 5",
    "javaScript",
    "tailwind css",
    "react",
  ];

  return (
    <div className="w-[70%] grid grid-cols-1 md:grid-cols-2  gap-y-8 gap-10 mx-auto">
      {frontendArray.map((id) => (
        <div className=" h-16 relative flex ">
          <div className="w-4 bg-lime-primary"></div>
          <img src={assets[id]} alt="" className="ml-3 w-13 mr-8" />
          <div
            className="w-full absolute h-full bg-lime-primary
         [clip-path:inset(25%_55%_20%_23%)]"
          ></div>
          <span className=" font-integral-demi-bold my-auto text-2xl z-10">
            {id}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Frontend;
