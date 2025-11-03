import React from "react";
import {assets} from '../assets/images/assets.js'

const Languages = () => {
  const languageArray = ["java", "javaScript"];
  return (
    <div className="w-[70%]  grid grid-cols-1 lg:grid-cols-2  gap-y-8  gap-10 mx-auto ">
      {languageArray.map((id) => (
        <div className="h-14 sm:h-16 relative flex ">
          <div className="w-4 bg-lime-primary"></div>
          <img src={assets[id]} alt="" className="ml-3 w-11 sm:w-13 mr-8" />
          <div
            className="w-80 absolute left-7 h-full bg-lime-primary
                 [clip-path:inset(25%_55%_20%_23%)]"
          ></div>
          <span className=" font-integral-demi-bold my-auto text-xl sm:text-2xl z-10">
            {id}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Languages;
