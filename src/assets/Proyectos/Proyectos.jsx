import React, { useState } from "react";

import { MdNavigateBefore } from "react-icons/md";
import { MdNavigateNext } from "react-icons/md";

const ProjectSlider = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-6">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 "
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="min-w-full flex flex-col items-center p-2"
            >
              <h3 className="text-3xl font-raleway font-medium mb-2">
                {project.title}
              </h3>
              <p className="text-2xl font-roboto font-light mb-4 text-center">
                {project.description}
              </p>
              <span className="text-jg font-roboto font-thin mb-8 text-center">
                * {project.estado}
              </span>
              <img
                src={project.image}
                alt={`${project.title}-preview`}
                className="rounded-md w-full h-72 bg-center object-cover
                 mb-4"
              />
              <button className="bg-black text-white p-2 lg:p-3 rounded-xl hover:scale-110">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver demo
                </a>
              </button>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-6 transform -translate-y-1/2 
         text-white text-4xl p-2 rounded-full hover:bg-black"
      >
        <MdNavigateBefore />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-6 transform -translate-y-1/2 
         text-white text-4xl p-2 rounded-full hover:bg-black"
      >
        <MdNavigateNext />
      </button>
      <div className="flex justify-center mt-4">
        {projects.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 mx-2 rounded-full cursor-pointer ${
              currentIndex === index ? "bg-black" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

const Proyectos = () => {
  const projects = [
    {
      title: "Menú App Web",
      description:
        "Menu App Web es una aplicación interactiva diseñada para gestionar pedidos desde la comodidad de tu mesa, ofreciendo una experiencia ágil y moderna para usuarios y restaurantes.",
      estado:
        "Diseño escalable y adaptable para futuras actualizaciones y personalización según las necesidades del cliente.",
      image: "./imagenes/Menu.png",
      demoLink: "https://app-menu-sigma.vercel.app/",
    },
    {
      title: "Landing Page Agency",
      description:
        "Landing Page Agency es una página de aterrizaje moderna y totalmente funcional que organiza y presenta contenido en una sola página para una navegación rápida y eficiente.",
      estado:
        "Diseño responsive, optimizado para ofrecer una experiencia consistente en dispositivos móviles, tablets y desktops.",
      image: "./imagenes/Agency.png",
      demoLink: "https://landing-page-agencia-rouge.vercel.app/",
    },
    {
      title: "Secret Code",
      description:
        "Secret Code es una aplicación web diseñada para encriptar texto de forma simple y efectiva. Ideal para quienes buscan una herramienta rápida para proteger o codificar mensajes de manera básica.",
      estado:
        "Ideal para uso personal o como demostración de técnicas básicas de manipulación de texto.",
      image: "./imagenes/secretcode_print.png",
      demoLink: "https://jsiekavizza.github.io/Encriptador-de-texto/",
    },
  ];

  return (
    <div className="section mt-6">
      <h2
        className="flex font-oswald font-thin text-3xl p-3"
        id="#proyectos_dev"
      >
        proyectos__dev--
      </h2>
      <ProjectSlider projects={projects} />
    </div>
  );
};

export default Proyectos;
