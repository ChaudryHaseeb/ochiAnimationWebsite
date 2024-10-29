import React from "react";
import { GiBurningEye } from "react-icons/gi";

function About() {
  <React />;
  return (
    <div className="w-full rounded-t-2xl pt-20 pb-20 bg-[#ff0f98] text-black">
      <h1 className="text-[4vw] mx-10 pb-20 mb-2 border-b-2 border-[#f44eb2] font-medium  leading-none tracking-tight font-[Courier-New] ">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className="w-full flex mt-5 pl-12 overflow-hidden">
        <div className="w-1/2">
          <h1 className="text-[4vw] font-semibold font-[Courier-New]">Our approach:</h1>
          <button className="flex justify-between items-center font-[Courier-New] gap-3 hover:bg-zinc-500 px-8 py-3 rounded-3xl font-semibold bg-zinc-950 mt-4 text-white">
            Read More <GiBurningEye />
          </button>
        </div>
        <div className="w-1/2">
          <img
            className="rounded-3xl"
            height={1500}
            width={500}
            src="Haseeb.jpg"
            alt="Haseeb"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
