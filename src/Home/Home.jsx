import React from "react";
import Banner from "../assets/Banner/Banner";
import Proyectos from "../assets/Proyectos/Proyectos.jsx";
import Skills from "../assets/Skills/Skills";
import ProyectosPM from "../assets/Proyectos/ProyectosPM";
import Formacion from "../assets/Formación/Formacion";

const Home = () => {
  return (
    <>
      <Banner />
      <Proyectos />
      <Skills />
      <ProyectosPM />
      <Formacion />
    </>
  );
};

export default Home;
