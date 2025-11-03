import React from "react";
import {assets} from "../assets/images/assets.js"

const Frontend = () => {

  const frontendArray = [
    
  ]

  return (
    <div className="w-full h-[70vh] bg-amber-400 flex  gap-20 justify-center items-center ">
      <div className="w-[25%] h-16 relative bg-blue-200 flex ">
        <div className="w-4 bg-lime-primary"></div>
        <img src={assets.html} alt="" className='ml-3 w-13 mr-8' />
        <div className='w-full absolute h-full bg-lime-primary
         [clip-path:inset(25%_40%_20%_30%)]'></div>
        <span className=" font-integral-demi-bold my-auto text-2xl z-10">HTML 5</span>
      </div>
      
    </div>
  );
};

export default Frontend;
