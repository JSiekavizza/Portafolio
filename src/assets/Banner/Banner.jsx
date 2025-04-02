import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import useOnScreen from "../useOnScreen";

import Skills from "../Skills/Skills.jsx";

const Banner = () => {
  const sectionRef = useRef(null);
  const isVisible = useOnScreen(sectionRef, 0.3);

  return (
    <>
      <div
        className="relative bg-blue-700/30 backdrop-blur-sm flex justify-between items-center 
      min-h-full w-full p-8"
      >
        <div
          ref={sectionRef}
          className={`${
            isVisible ? "tracking-in-expand" : "opacity-20"
          } transition-opacity duration-500 ease-out flex flex-col 
            text-white p-6 my-3`}
          id="#banner"
        >
          <Link to="/">
            <h1
              className="rounded-md text-[#007be8] text-3xl md:text-4xl lg:text-4xl 
          font-oswald font-thin  
          inline-block  px-[3px] py-[2px] w-fit"
            >
              Jhonatan Siekavizza O.
            </h1>
          </Link>
          <div className="flex items-center">
            <h2
              className="text-white 
          text-sm lg:text-xl font-raleway font-medium "
            >
              Diseñador Web /
            </h2>
            <h2 className="text-[#ff5733] text-sm lg:text-xl font-raleway font-medium ">
              Project Manager
            </h2>
          </div>
          <Skills />
        </div>
      </div>
    </>
  );
};

export default Banner;
