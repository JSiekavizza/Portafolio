import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { DataContext } from "../context/DataContext";

import Banner from "../Banner/Banner";
import Fondo from "/imagenes/fondo.png";
import { div } from "framer-motion/client";

const Blog = () => {
  const { id } = useParams();
  const { blogs } = useContext(DataContext);
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <p className="text-white text-xl">Cargando...</p>
      </div>
    );

  return (
    <>
      <div className="min-h-screen bg-gray-900 text-white">
        <div className="relative">
          <div
            className="absolute  inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{
              backgroundImage: `url(${Fondo})`,
              filter: "grayscale(100%)",
            }}
          ></div>
          <Banner className="relative z-10" />
        </div>

        {/* Botón de regreso */}
        <div className="container mx-auto px-4 py-6">
          <Link
            to="/blogs"
            className="inline-flex items-center text-[#ff5733] hover:text-[#ff5750] transition-colors mb-6"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Volver a todos los blogs
          </Link>
        </div>

        {/* Contenido principal del blog */}
        <main className="container mx-auto px-4 pb-12 max-w-4xl">
          {/* Encabezado */}
          <header className="mb-10 text-center">
            <h1 className="text-3xl md:text-4xl font-oswald font-light mb-6">
              {blog.titulo}
            </h1>
            <div className="w-20 h-1 bg-[#ff5733] mx-auto mb-6"></div>
          </header>

          {/* Imagen destacada */}
          <div className="mb-10 rounded-lg overflow-hidden shadow-xl">
            <img
              src={blog.img1}
              alt={blog.titulo}
              className="w-full h-auto object-cover"
            />
          </div>

          {/*Link demo*/}
          {blog.linkDemo && (
            <div className="text-center mb-8">
              <a
                href={blog.linkDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-auto inline-block border-2 w-48 border-[#ff5733] text-[#ff5750] 
                 hover:bg-[#ff5733] hover:text-white px-6 py-2 rounded 
                 transition-colors duration-300 font-medium"
              >
                Ver Demo
              </a>
            </div>
          )}

          {/* Contenido del blog */}
          <article className="prose prose-invert max-w-none">
            <section className="mb-10 text-center">
              <p className="text-lg leading-relaxed font-raleway text-gray-300">
                {blog.contenido}
              </p>
            </section>

            {/* Imagen caracteristicas */}
            {blog.img2 && (
              <div className="mb-10 rounded-lg overflow-hidden shadow-xl">
                <img
                  src={blog.img2}
                  alt={blog.titulo}
                  className="w-full h-auto object-cover"
                />
              </div>
            )}

            {/* Características principales */}
            <section className="mb-10 bg-blue-900/20 backdrop-blur-sm rounded-lg p-6 border border-blue-800/50">
              <h2 className="text-2xl font-semibold mb-4 text-blue-300">
                Características Principales
              </h2>
              <p className="text-gray-300">{blog.característicasPrincipales}</p>
            </section>

            {/* Tecnologías utilizadas */}
            <section className="mb-10 border border-orange-500/30 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-[#ff5733]">
                Tecnologías Utilizadas
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  blog.tecnologia1,
                  blog.tecnologia2,
                  blog.tecnologia3,
                  blog.tecnologia4,
                ]
                  .filter((tech) => tech)
                  .map((tech, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-[#ff5733] rounded-full mr-3"></span>
                      <span className="text-gray-300">{tech}</span>
                    </li>
                  ))}
              </ul>
            </section>

            {/* Estado actual */}
            {blog.estadoActual && (
              <section className="bg-gray-800/50 rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-4">Estado Actual</h2>
                <p className="text-gray-300">{blog.estadoActual}</p>
              </section>
            )}

            <p className="text-center mt-9">{blog.span}</p>
          </article>
        </main>
        {/* Footer */}
        <footer className="bg-gray-800/50 py-8 text-center text-gray-400 text-sm">
          <div className="container mx-auto px-4">
            <p>© {new Date().getFullYear()} Todos los derechos reservados</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Blog;
