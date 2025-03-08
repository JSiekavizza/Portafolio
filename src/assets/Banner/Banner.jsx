import React, { useEffect, useRef } from "react";
import useOnScreen from "../useOnScreen";

const Banner = () => {
  const sectionRef = useRef(null);
  const isVisible = useOnScreen(sectionRef, 0.3);

  return (
    <>
      <div
        className="relative bg-blue-700 flex justify-center  
      min-h-full w-full"
      >
        <div
          ref={sectionRef}
          className={`${
            isVisible ? "tracking-in-expand" : "opacity-0"
          } transition-opacity duration-500 ease-out flex flex-col 
           text-start text-white p-6 my-3`}
          id="#banner"
        >
          <h1
            className="bg-white rounded-md text-blue-700 text-2xl lg:text-4xl 
          font-oswald font-thin  
          inline-block  px-[3px] py-[2px] w-fit"
          >
            Jhonatan Siekavizza O.
          </h1>
          <div className="flex items-center">
            <h2 className="text-sm lg:text-xl font-raleway font-medium ">
              Project Manager /
            </h2>
            <h2
              className="text-white 
          text-sm lg:text-xl font-raleway font-medium "
            >
              Diseñador UX/UI
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
