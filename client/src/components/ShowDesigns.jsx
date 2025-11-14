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
      link: "https://www.figma.com/design/djAnPBNRJBvSrJxSpo0zlw/Chatapp-Personal-project?node-id=0-1&t=rHIlTlgWMc1p2WmV-1"
    },
    {
      id: 2,
      title: "Beatroot logo",
      img: `${assets.beatroot}`,
      text: "A creative logo designed for Beatroots Creatives, reflecting simplicity and artistic identity.",
      background: "bg-white",
      button: "lime-primary",
      buttonText: "black",
      link: "https://www.figma.com/design/lm2Z5kp43Yo16ysP2JtSbB/Beatroots-Logo?node-id=0-1&t=LN0oJGIzQYC7dP34-1"
    },
    {
      id: 3,
      title: "forest app",
      img: `${assets.forestapp}`,
      text: "An app to create and preserve digital memories in a forest-inspired capsule.",
      background: "bg-lime-primary",
      button: "black",
      buttonText: "white",
      link: "https://www.figma.com/proto/ziOcVdYmc8kptIvAavT4l8/Forest-Chronicle?page-id=0%3A1&team_id=1468192116754706540&node-id=32-37&starting-point-node-id=32%3A37&t=DDiPINsKcwHus5VG-1"
    },
    {
      id: 4,
      title: "Portfolio Design",
      img: `${assets.portfolio}`,
      text: "Clean and modern single-page portfolio highlighting creativity through simple design.",
      background: "bg-lime-primary",
      button: "black",
      buttonText: "white",
      link: "https://www.figma.com/design/thkIs3Xnbt2b96K8CXScTb/Portfolio-Website?node-id=155-1722&t=8yvsSApmbWDnJjJJ-1"
    },

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
            <div className=" h-[50%] mt-2 mx-6 mb-3">
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
              <a href={item.link} className="w-full h-full flex justify-center cursor-pointer" target="_blank">
                <button
                className={`w-1/2 py-2 bg-${item.button} text-${item.buttonText} text-[12px] sm:text-[14px] cursor-pointer`}
              >
                Figma
              </button>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center ">
        <button
          className="w-30 h-10 bg-white my-10 cursor-pointer"
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
