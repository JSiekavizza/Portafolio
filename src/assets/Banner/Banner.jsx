import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import useOnScreen from "../useOnScreen";
import Skills from "../Skills/Skills.jsx";

const Banner = () => {
  const sectionRef = useRef(null);
  const isVisible = useOnScreen(sectionRef, 0.3);

  return (
    <div
      className="relative bg-blue-700/30 backdrop-blur-sm flex flex-col md:flex-row justify-between items-center 
      min-h-full w-full p-6 md:p-8"
    >
      <div
        ref={sectionRef}
        className={`${
          isVisible ? "tracking-in-expand" : "opacity-20"
        } transition-opacity duration-500 ease-out flex flex-col items-center
          p-4 w-full md:w-auto text-center md:text-left`}
        id="banner"
      >
        <Link to="/">
          <h1
            className="rounded-md text-[#007be8] text-2xl sm:text-3xl md:text-4xl 
          font-oswald font-thin mx-auto md:mx-0"
          >
            Jhonatan Siekavizza O.
          </h1>
        </Link>
        <div
          className="flex flex-col sm:flex-row items-center justify-center
         md:justify-start "
        >
          <h2
            className="text-white text-sm sm:text-base md:text-xl font-raleway 
          font-medium "
          >
            Diseñador Web /
          </h2>
          <h2 className="text-[#ff5733] text-sm sm:text-base md:text-xl font-raleway font-medium ml-1">
            Project Manager
          </h2>
        </div>
        <Skills />
      </div>
    </div>
  );
};

export default Banner;
