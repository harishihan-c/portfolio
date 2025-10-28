import React from "react";

const Home = () => {
  return (
    <div className=" flex flex-col justify-center ml-14">
      <p className="font-integral-extra-bold text-6xl sm:text-7xl mt-6 ">
        Hello,
      </p>

      <p className="font-integral-extra-bold text-6xl sm:text-7xl mt-6">
        I'm{" "}
        <span className=" bg-black text-[#D7FF00] px-5 pb-4 pt-0 inline-block ">

          Harry,
        </span>
      </p>

      <div className="font-integral-extra-bold text-6xl sm:text-7xl mt-6 text-center"><p >A FullStack </p>
      <p>Developer, Designer</p> <p> and an Artist</p></div>
    </div>
  );
};

export default Home;
