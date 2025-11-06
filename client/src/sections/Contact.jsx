import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <div className="flex items-center justify-center mt-30 w-full h-full">
        <div className="font-integral-extra-bold text-[40px] sm:text-5xl lg:text-7xl w-[60%]  sm:w-full  mx-auto text-center mb-10">
          <p>Let's Built something</p>
          <span className=" bg-black text-[#D7FF00] px-5 pb-4 pt-0 inline-block mt-4">
            Built
          </span>{" "}
        </div>
      </div>
      <div className='bg-lime-primary'>
        <div className="flex">
          <div className="w-full"></div>
          <div className='w-full flex flex-col items-center justify-center gap-y-10 '>
            <h1 className="font-integral-extra-bold text-7xl mb-10">Reach Me</h1>
            <input type="text" placeholder="Name" className="w-1/2 bg-white px-3 py-2 text-sm"/>
            <input type="email" placeholder="Email" className="w-1/2 bg-white px-3 py-2 text-sm" />
            <textarea placeholder="Leave a Message" className="w-1/2 bg-white px-3 py-2 h-32 text-sm"/>
            <button className="w-1/2 bg-black text-lime-primary py-2 text-sm">Send</button>
          </div>
        </div>
        <div>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
