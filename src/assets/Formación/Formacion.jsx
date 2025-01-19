import React, { useRef } from "react";
import useOnScreen from "../useOnScreen.jsx";

const Formacion = () => {
  const sectionRef = useRef(null);
  const isVisible = useOnScreen(sectionRef, 0.2);

  return (
    <>
      <div ref={sectionRef} className="section mt-6">
        <h2
          className={`${
            isVisible ? "tracking-in-expand" : "opacity-0"
          } transition-opacity duration-500 ease-out flex justify-start font-oswald font-thin text-3xl  p-3 mr-3`}
          id="#formación"
        >
          --Formación
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div
            className="flex flex-col justify-center items-center space-y-4  p-8 
          "
          >
            <img
              className="size-min"
              src="./imagenes/sena_logo.png"
              alt="sena"
            />
            <h4 className="font-raleway text-xl font-light">
              SENA - Cundinamarca - 2017
            </h4>
            <p className="font-roboto font-extralight">
              Tecnólogo Especialista en Marketing y Modelos de Negocio Online
            </p>
          </div>
          <div
            className="flex flex-col justify-center items-center space-y-4  p-8 
          "
          >
            <img
              className="bg-center bg-cover size-min"
              src="./imagenes/alura_logo.png"
              alt="sena"
            />
            <h4 className="font-raleway text-xl font-light">
              ALURA - Oracle Next Education - 2023
            </h4>
            <p className="font-roboto font-extralight">
              Desarrollador Frot-End Junior
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Formacion;
