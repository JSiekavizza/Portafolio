import React, { useEffect, useRef } from "react";
import useOnScreen from "../useOnScreen";

const Banner = () => {
  const sectionRef = useRef(null);
  const isVisible = useOnScreen(sectionRef, 0.2);

  return (
    <>
      <div
        className=" relative flex items-center justify-center
        rounded-sm mt-3"
      >
        <div
          ref={sectionRef}
          className={`${
            isVisible ? "tracking-in-expand" : "opacity-0"
          } transition-opacity duration-500 ease-out flex flex-col
          font-oswald font-thin text-3xl  p-3`}
          id="#banner"
        >
          <h1 className="text-2xl lg:text-4xl">Jhonatan Siekavizza O.</h1>
          <h2 className="text-lg lg:text-2xl font-raleway font-medium">
            Project Manager / Desarrollador Web Junior
          </h2>
        </div>
      </div>
    </>
  );
};

export default Banner;
