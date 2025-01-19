import React, { useRef } from "react";
import useOnScreen from "../useOnScreen";

const Skills = () => {
  const sectionRef = useRef(null);
  const isVisible = useOnScreen(sectionRef, 0.2);

  return (
    <>
      <div ref={sectionRef} className="section  rounded-sm p-6 mt-6">
        <h2
          className={`${
            isVisible ? "tracking-in-expand" : "opacity-0"
          } transition-opacity duration-500 ease-out flex justify-start font-oswald font-thin text-3xl  p-3 mr-3`}
          id="#formación"
        >
          --skills__dev
        </h2>
        <div className="flex justify-around py-6 mt-6 ">
          <div className="p-3 w-28 lg:w-56">
            <div className="flex justify-around">
              <div>
                <img src="./imagenes/html-1.png" alt="lenguaje_html" />
              </div>
              <div>
                <img src="./imagenes/css-1.png" alt="lenguaje_html" />
              </div>
            </div>
            <h2 className="font-roboto font-medium  mt-3">Lenguajes</h2>
          </div>
          <div className="p-3  lg:w-56">
            <div className="flex justify-around  items-center">
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
          <div className="p-4 w-28 lg:w-56">
            <div className="flex justify-around">
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
