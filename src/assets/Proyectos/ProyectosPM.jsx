import React, { useRef } from "react";
import useOnScreen from "../useOnScreen";

const ProyectosPM = () => {
  const sectionRef = useRef(null);
  const isVisible = useOnScreen(sectionRef, 0.2);
  return (
    <>
      <div
        ref={sectionRef}
        className="section drop-shadow-2xl relative overflow-hidden"
      >
        <h2
          className={`${
            isVisible ? "tracking-in-expand" : "opacity-0"
          } transition-opacity duration-500 ease-out flex justify-end 
          font-oswald font-thin text-blue-700 text-2xl  p-3 mr-3`}
          id="#project-manager"
        >
          project__manager--
        </h2>
        <div className="grid grid-cols-2  lg:flex rounded-md gap-2 gap-y-12 p-6 pb-9">
          <div className="relative rounded-lg hover:-translate-y-5 duration-500 easy-out z-10">
            <img
              className="w-full h-auto rounded-lg"
              src="./imagenes/FeriaManizales.png"
              alt="feria-manizales"
            />
          </div>
          <div className="relative rounded-lg hover:-translate-y-5 duration-500 easy-out z-10">
            <img
              className="w-full h-auto rounded-lg"
              src="./imagenes/FeriaManizales2.png"
              alt=""
            />
          </div>
          <div className="relative rounded-lg hover:-translate-y-5 duration-500 easy-out z-10">
            <img
              className="w-full h-auto rounded-lg"
              src="./imagenes/INCOIngenieria.png"
              alt="inco"
            />
          </div>
          <div className="relative rounded-lg hover:-translate-y-5 duration-500 easy-out z-10">
            <img
              className="w-full h-auto rounded-lg"
              src="./imagenes/solanacoffe.jpg"
              alt="solana-coffee"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProyectosPM;
