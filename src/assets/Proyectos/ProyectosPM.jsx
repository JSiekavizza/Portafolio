import React from "react";

const ProyectosPM = () => {
  return (
    <>
      <div className="section mt-8 ">
        <h2
          className="flex font-oswald font-thin text-3xl  p-3 mb-9"
          id="#project-manager"
        >
          project__manager--
        </h2>
        <div className="grid lg:inline-grid grid-cols-2 gap-8 mt-6">
          <div>
            <img
              className="shadow-lg"
              src="./imagenes/FeriaManizales.png"
              alt="feria-manizales"
            />
          </div>
          <div>
            <img
              className="shadow-lg"
              src="./imagenes/FeriaManizales2.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="shadow-lg"
              src="./imagenes/INCOIngenieria.png"
              alt="inco"
            />
          </div>
          <div>
            <img
              className="shadow-lg"
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
