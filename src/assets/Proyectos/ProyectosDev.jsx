import React, { useState, useContext, useEffect, useRef } from "react";
import { DataContext } from "../context/DataContext";
import { Link } from "react-router-dom";
import useOnScreen from "../useOnScreen";

import Fondo from "/imagenes/fondo.png";

const ProyectosDev = () => {
  const sectionRef = useRef(null);
  const isVisible = useOnScreen(sectionRef, 0.3);
  const { proyectos } = useContext(DataContext);
  const [isExpanded, setIsExpanded] = useState(1);
  const [activeBorder, setActiveBorder] = useState(null);

  // Al cargar el componente, establecer el primer producto con el borde activo
  useEffect(() => {
    if (proyectos.length > 0) {
      setActiveBorder(proyectos[0].id);
    }
  }, [proyectos]);

  const handleExpand = (id) => {
    if (isExpanded === id) {
      setIsExpanded(null);
      setActiveBorder(proyectos[0].id); // Si se colapsa, vuelve al primer producto
    } else {
      setIsExpanded(id);
      setActiveBorder(id);
    }
  };

  return (
    <>
      {/*  
      <header className="justify-center items-end flex flex-col p-6">
        <div
          ref={sectionRef}
          className={`${
            isVisible ? "tracking-in-expand" : "opacity-20"
          } transition-opacity duration-500 ease-out flex flex-col
          text-white p-6 my-3`}
          id="#proyectos-dev"
        >
          <h2 className="text-[#007be8] text-2xl lg:text-4xl font-oswald font-thin inline-block px-2 tracking-tight text-center">
            Proyectos Destacados
          </h2>
          <p className="text-white text-sm lg:text-xl font-raleway font-medium px-2">
            Diseñador Web
          </p>
        </div>
      </header>
        */}
      <div className="section relative flex-col items-center bg-cover bg-center bg-no-repeat z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${Fondo})`,
            filter: "grayscale(100%)",
          }}
        ></div>

        <div className="relative grid grid-cols-2 lg:grid-cols-3 gap-4 p-6 py-16">
          {proyectos.map((proyecto) => (
            <div
              key={proyecto.id}
              className={`border col-span-2 lg:col-span-1 p-3 transition-all 
                duration-500 cursor-pointer flex flex-col items-center justify-center
                 text-white rounded-md 
                ${
                  isExpanded === proyecto.id
                    ? "max-h-screen w-full border-[#ff5733]"
                    : "min-h-20 lg:min-h-80 w-auto"
                }
                ${
                  activeBorder === proyecto.id
                    ? "border-[#ff5733]"
                    : "border-white"
                }`}
              onClick={() => {
                if (isExpanded !== proyecto.id) {
                  handleExpand(proyecto.id);
                }
              }}
            >
              {isExpanded === proyecto.id ? (
                <div className="backdrop-blur-sm bg-cover flex flex-col items-center text-center gap-3">
                  <h2 className="text-2xl font-oswald font-thin p-2">
                    {proyecto.tituloLargo}
                  </h2>
                  <img
                    src={proyecto.img}
                    alt={proyecto.tituloLargo}
                    className="min-w-full max-h-screen object-contain rounded-md shadow-md"
                  />
                  <div className="bg-blue-700/10 gap-2 p-4 -mt-3 w-full rounded-md">
                    <div className="flex flex-col justify-center p-3">
                      <p className="text-lg lg:text-xl font-raleway font-medium text-gray-300 p-2">
                        {proyecto.descripcion}
                      </p>
                      <Link
                        to={`/blog/${proyecto.id}`}
                        className="bg-[#ff5733] px-4 py-2 rounded-md text-white
                         hover:bg-[#ff4500] transition-colors"
                      >
                        Leer más
                      </Link>
                    </div>
                    {proyecto.linkDemo && (
                      <div className="text-center">
                        <a
                          href={proyecto.linkDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mx-auto inline-block border-2 w-48 border-[#ff5733] text-[#ff5733] 
                                     hover:bg-[#ff5733] hover:text-white px-6 py-2 rounded 
                                     transition-colors duration-300 font-medium"
                        >
                          Ver Demo
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center text-center gap-3">
                  <h2 className="text-xl text-white underline underline-offset-8 font-oswald font-thin">
                    {proyecto.tituloCorto}
                  </h2>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProyectosDev;
