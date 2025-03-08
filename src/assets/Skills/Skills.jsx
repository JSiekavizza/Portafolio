import React, { useRef } from "react";

const Skills = () => {
  return (
    <>
      <div className="section relative p-6 overflow-hidden">
        <div
          className="relative h-32 flex justify-center 
        items-center overflow-hidden z-10"
        >
          <div className="p-3 w-24">
            <div className="flex justify-around hover:scale-125 duration-500 easy-out z-10">
              <div className="">
                <img src="./imagenes/html-1.png" alt="lenguaje_html" />
              </div>
              <div>
                <img src="./imagenes/css-1.png" alt="lenguaje_html" />
              </div>
            </div>
            <h2 className="font-roboto font-medium  mt-3">Lenguajes</h2>
          </div>
          <div className="p-3 w-24">
            <div className="flex justify-around hover:scale-125 duration-500 easy-out z-10">
              <div>
                <img src="./imagenes/react-jsx-1.png" alt="lenguaje_html" />
              </div>
              <div>
                <img src="./imagenes/react_icon.png" alt="lenguaje_html" />
              </div>
              <div>
                <img src="./imagenes/Bootstrap-1.png" alt="lenguaje_html" />
              </div>
            </div>
            <h2 className="font-roboto font-medium  mt-3">Frameworks</h2>
          </div>
          <div className="p-3 w-24">
            <div className="flex justify-around hover:scale-125 duration-500 easy-out z-10">
              <div>
                <img src="./imagenes/git-1.png" alt="lenguaje_html" />
              </div>
              <div>
                <img src="./imagenes/psd.png" alt="lenguaje_html" />
              </div>
            </div>
            <h2 className="font-roboto font-medium  mt-3">Herramientas</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
