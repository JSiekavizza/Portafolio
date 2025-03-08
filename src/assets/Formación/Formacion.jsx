import React, { useRef } from "react";
import useOnScreen from "../useOnScreen.jsx";

const Formacion = () => {
  const sectionRef = useRef(null);
  const isVisible = useOnScreen(sectionRef, 0.2);

  return (
    <>
      <div ref={sectionRef} className="relative p-6  mt-6">
        <h2
          className={`${
            isVisible ? "tracking-in-expand" : "opacity-0"
          } transition-opacity duration-500 ease-out flex justify-start 
          font-oswald font-thin text-blue-700 text-2xl  p-3 mr-3`}
          id="#formación"
        >
          --Formación
        </h2>

        <div
          className="flex justify-center 
        items-center overflow-hidden"
        >
          <div className="relative bg-blue-700 text-center p-3 ">
            <div
              className="relative flex flex-col justify-around items-center 
            "
            >
              <img
                className="bg-center bg-cover rounded-full size-24"
                src="./imagenes/sena_logo.png"
                alt="sena"
              />
              <h4 className="font-raleway text-sm text-white/50 font-semibold mt-4">
                SENA - Cundinamarca - 2017
              </h4>
              <p className="font-roboto text-xs text-white/50 font-extralight">
                Tecnólogo Especialista en Marketing y Modelos de Negocio Online
              </p>
            </div>
          </div>
          <div className="relative bg-violet-950 text-center p-3">
            <div
              className="flex flex-col justify-around items-center 
            "
            >
              <img
                className="bg-white bg-center bg-cover rounded-full size-24 p-1"
                src="./imagenes/alura_logo.png"
                alt="sena"
              />
              <h4 className="font-raleway text-sm text-white/50 font-semibold mt-4">
                Oracle Next Education - 2023
              </h4>
              <p className="font-roboto text-xs text-white/50 font-extralight">
                Desarrollador Frot-End Junior
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Formacion;
