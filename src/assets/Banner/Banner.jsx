import React from "react";

const Banner = () => {
  return (
    <>
      <div
        className="relative bg-cover bg-center rounded-sm text-white 
      flex flex-col items-center justify-center p-6 h-56 mt-3"
        style={{
          backgroundImage: "url('./imagenes/banner.png')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-sm "></div>
        <div className="relative z-10 text-center font-oswald font-semibold space-y-2">
          <h1 className="text-2xl lg:text-4xl">Jhonatan Siekavizza O.</h1>
          <h2 className="text-lg lg:text-2xl font-raleway font-medium">
            Project Manager / Desarrollador Web Junior
          </h2>
          <p className="text-sm lg:text-lg font-roboto font-thin">
            Ejecuto eficazmente estrategias de creación y difusión de contenido
            en canales digitales, monitoreo e informes mensuales. Desarrollo
            interfaces web, creativas y fáciles de usar para el usuario.
          </p>
        </div>
      </div>
    </>
  );
};

export default Banner;
