import React, { useState } from "react";
import { assets } from "../assets/images/assets";

const ShowArts = () => {
  const projectData = [
    {
      id: 1,
      img: `${assets.hamilton}`,
      background: "bg-black",
      button: "white",
      butonText: "black",
    },
    {
      id: 2,
      img: `${assets.girlFace}`,
      background: "bg-white",
      button: "lime-primary",
      buttonText: "black",
    },
    {
      id: 3,
      img: `${assets.girlSide}`,
      background: "bg-lime-primary",
      button: "black",
      buttonText: "white",
    },
    {
      id: 4,
      img: `${assets.witcher}`,
      background: "bg-black",
      button: "white",
      butonText: "black",
    },
    {
      id: 5,
      img: `${assets.girl}`,
      background: "bg-white",
      button: "lime-primary",
      buttonText: "black",
    },
    // {
    //   id: 6,
    //   img: "",
    //   background: "bg-lime-primary",
    //   button: "black",
    //   buttonText: "white",
    // },
  ];

  const [visible, setVisible] = useState(3);
  return (
    <div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 gap-y-9 ">
        {projectData.slice(0, visible).map((item) => (
          <div key={item.id} className={`min-h-96 ${item.background} `}>
            <div className=" h-[80%] mb-3">
              <img
                src={item.img}
                alt=""
                className="object-cover aspect-video w-full h-full"
              />
            </div>

            <div className="flex items-center justify-center mt-4 max-w-full mx-6 gap-3">
              <a
                href={item.img}
                target="_blank"
                rel="noopener noreferrer"
                className="w-1/2 py-1 "
              >
                <button
                  className={`w-full py-2 bg-${item.button} text-${item.buttonText} text-[12px] sm:text-[14px] cursor-pointer`}
                >
                  View
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center ">
        <button
          className="w-30 h-10 bg-white my-10 "
          onClick={() => {
            if (visible <= 3) {
              setVisible(visible + 3);
            } else {
              setVisible(visible - 3);
            }
          }}
        >
          {visible <= 3 ? "Show More" : "Show Less"}
        </button>
      </div>
    </div>
  );
};

export default ShowArts;
