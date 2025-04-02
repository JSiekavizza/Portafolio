import React from "react";
import Banner from "../assets/Banner/Banner";
import ProyectosDev from "../assets/Proyectos/ProyectosDev";
import ProyectosPM from "../assets/Proyectos/ProyectosPM";
import Formacion from "../assets/Formación/Formacion";

import Footer from "../assets/Footer/Footer.jsx";
import FondoB from "/imagenes/fondo-b.png";

const Home = () => {
  return (
    <>
      <div className="relative min-h-screen bg-cover bg-center bg-no-repeat z-0">
        <div
          className="absolute  inset-0 bg-cover bg-center bg-no-repeat
           "
          style={{
            backgroundImage: `url(${FondoB})`,
            filter: "grayscale(100%)",
          }}
        ></div>
        <div className="relative  backdrop-blur-sm  z-10">
          <Banner />
          <ProyectosDev />
          <ProyectosPM />
          <Formacion />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
