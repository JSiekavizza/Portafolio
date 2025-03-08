import React from "react";

const Footer = () => {
  return (
    <>
      <div className="section min-height: 100vh bg-blue-700 opacity-90 text-white">
        <div className="grid grid-cols-3 items-start p-6">
          <div>
            <h2 className="text-sm lg:text-lg font-oswald font-semibold">
              <a href="">Jhonatan Siekavizza O.</a>
            </h2>
          </div>

          <div className="space-y-2">
            <h3
              className="text-sm lg:text-lg font-oswald font-semibold
            "
            >
              Proyectos_dev
            </h3>
            <div className="text-sm">
              <p>
                <a href="proyectos_dev">Menu App Web</a>
              </p>
              <p>
                <a href="proyectos_dev">Landing Page Agency</a>
              </p>
              <p>
                <a href="proyectos_dev">Secret Code</a>
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm lg:text-lg font-oswald font-semibold">
              Project Manager
            </h3>
            <div className="text-sm">
              <a href="project-manager">
                <p>Feria de Manizales</p>
              </a>
              <a href="project-manager">
                <p>INCO Ingenieria y Construcción</p>
              </a>
              <a href="project-manager">
                <p>Solana Coffee</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
