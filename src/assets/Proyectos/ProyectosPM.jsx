import React, { useContext, useEffect, useRef } from "react";
import { DataContext } from "../context/DataContext";
import { animate, scroll } from "@motionone/dom";
import useOnScreen from "../useOnScreen";

const ProyectosPM = () => {
  const { projectManager } = useContext(DataContext);
  const sectionRef = useRef(null);
  const isVisible = useOnScreen(sectionRef, 0.3);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const items = document.querySelectorAll(".img-container");
    const container = containerRef.current;

    // Anima el grupo de imágenes horizontalmente mientras se hace scroll vertical
    scroll(
      animate(".img-group", {
        transform: ["none", `translateX(-${items.length - 1}00vw)`],
      }),
      {
        target: container,
        offset: ["start start", "end end"],
      }
    );

    // Barra de progreso del scroll
    scroll(animate(".progress", { scaleX: [0, 1] }), {
      target: container,
      offset: ["start start", "end end"],
    });
  }, [projectManager]);

  return (
    <article id="gallery" className="w-full ">
      <header className="container min-w-full justify-center items-center flex flex-col p-6">
        <div
          ref={sectionRef}
          className={`${
            isVisible ? "tracking-in-expand" : "opacity-20"
          } transition-opacity duration-500 ease-out flex flex-col
          text-white p-6 `}
          id="#proyectos-dev"
        >
          <h2
            className="text-[#007be8] text-2xl md:text-4xl lg:text-4xl font-oswald font-thin
            tracking-tight text-center inline-block px-2"
          >
            Proyectos Destacados
          </h2>
          <p className="text-white text-sm lg:text-xl font-raleway font-medium px-2 ">
            Project Manager
          </p>
        </div>
      </header>

      {/* Contenedor principal del scroll */}
      <section
        ref={containerRef}
        className="img-group-container relative h-[120vh] md:h-[180vh]"
      >
        <div className="sticky top-0 overflow-hidden">
          <ul className="img-group flex">
            {projectManager.map((proyecto, index) => (
              <li
                key={proyecto.id}
                className="img-container flex w-screen h-[80vh] md:h-screen flex-none 
          items-center justify-center p-4 md:p-6"
              >
                {/* Contenedor principal optimizado */}
                <div className="relative w-full h-full max-w-[95vw] lg:max-w-[45vw] max-h-[70vh] md:max-h-[80vh] mx-auto">
                  {/* Contenedor de imagen con padding y bordes */}
                  <div className="relative w-full h-full rounded-lg overflow-hidden border-2 border-[#ff5733]/50 hover:border-[#ff5733] transition-all duration-300 p-1">
                    {/* Imagen con object-contain para evitar cortes */}
                    <img
                      src={`/imagenes/${proyecto.imagen}`}
                      className="w-full h-full object-contain bg-white rounded-lg"
                      style={{ aspectRatio: "16/9" }}
                      alt={proyecto.titulo}
                    />

                    {/* Texto sobre la imagen */}
                    <div className="absolute bottom-0 left-0 right-0 z-10 p-4 bg-gradient-to-b from-transparent to-black/80">
                      <div className="backdrop-blur-sm rounded-lg p-3">
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-oswald text-white">
                          {proyecto.titulo}
                        </h3>
                        <p className="text-white/90 text-xs md:text-sm lg:text-base font-raleway mt-1 md:mt-2">
                          {proyecto.descripcionCargo}
                        </p>
                      </div>
                    </div>

                    {/* Número de proyecto */}
                    <div className="absolute top-3 right-3 bg-[#ff5733] text-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center font-bold text-base md:text-lg shadow-md">
                      #{index + 1}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="progress h-1 bg-[#ff5733] fixed bottom-0 left-0 right-0 origin-left"></div>

      <footer className="container mx-auto px-4 py-8 text-center">
        <p className="text-white/80 text-sm md:text-base font-raleway">
          Proyectos desarrollados por{" "}
          <a
            href="https://tusitio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ff5733] hover:text-orange-300 transition-colors font-semibold"
          >
            Jhonatan Siekavizza O.
          </a>
        </p>
      </footer>
    </article>
  );
};

export default ProyectosPM;
