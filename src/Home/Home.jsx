import React from "react";
import Banner from "../assets/Banner/Banner";
import ProyectosDev from "../assets/Proyectos/ProyectosDev";
import Skills from "../assets/Skills/Skills";
import ProyectosPM from "../assets/Proyectos/ProyectosPM";
import Formacion from "../assets/Formación/Formacion";

const Home = () => {
  return (
    <>
      <div className="">
        <Banner />
        <ProyectosDev />
        <Skills />
        <ProyectosPM />
        <Formacion />
      </div>
    </>
  );
};

export default Home;
