import React, { useState } from "react";
import { assets } from "../assets/images/assets.js";

const ShowDesigns = () => {
  const projectData = [
    {
      id: 1,
      title: "Chat App",
      img: `${assets.chatapp}`,
      text: "A modern and responsive chat interface design.",
      background: "bg-black",
      button: "white",
      butonText: "black",
    },
    {
      id: 2,
      title: "Beatroot logo",
      img: `${assets.beatroot}`,
      text: "A creative logo designed for Beatroots Creatives, reflecting simplicity and artistic identity.",
      background: "bg-white",
      button: "lime-primary",
      buttonText: "black",
    },
    {
      id: 3,
      title: "forest app",
      img: `${assets.forestapp}`,
      text: "An app to create and preserve digital memories in a forest-inspired capsule.",
      background: "bg-lime-primary",
      button: "black",
      buttonText: "white",
    },
    // {
    //   id: 4,
    //   title: "",
    //   img: "",
    //   text: "",
    //   background: "bg-lime-primary",
    //   button: "black",
    //   buttonText: "white",
    // },

    // {
    //   id: 5,
    //   title: "",
    //   img: "",
    //   text: "",
    //   background: "bg-white",
    //   button: "lime-primary",
    //   buttonText: "black",
    // },
    // {
    //   id: 6,
    //   title: "Movie App",
    //   img: "",
    //   text: "",
    //   background: "",
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
            <h1
              className={`text-center font-integral-medium text-2xl pt-4 ${
                item.background === "bg-black" ? "text-white" : ""
              }`}
            >
              {item.title}
            </h1>
            <div className="bg-amber-300 h-[50%] mt-2 mx-6 mb-3">
              <img
                src={item.img}
                alt=""
                className="object-cover aspect-video w-full h-full"
              />
            </div>
            <div>{item.icons}</div>
            <p
              className={`h-[15%] text-[10px] sm:text-[13px] text-center  mx-6  ${
                item.background === "bg-black" ? "text-white" : ""
              }`}
            >
              {item.text}
            </p>
            <div className="flex items-center justify-center mt-4 max-w-full mx-6 gap-3">
              <button
                className={`w-1/2 py-2 bg-${item.button} text-${item.buttonText} text-[12px] sm:text-[14px]`}
              >
                Figma
              </button>
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

export default ShowDesigns;
