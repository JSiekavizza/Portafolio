import React from "react";
import MenuApp from "/imagenes/Menu.png";

const ProyectosDev = () => {
  return (
    <>
      <div className="section relative  text-white drop-shadow-2xl p-3  z-50">
        <div className="grid grid-cols-2  lg:flex rounded-md gap-2 gap-y-12 p-6 pb-9 ">
          <div className="relative rounded-lg  hover:-translate-y-5 duration-500 easy-out z-10">
            <img src={MenuApp} className="w-full h-auto rounded-lg  "></img>
            <div
              className="bg-white absolute bottom-0 text-md  text-black
            transform -translate-x-1 translate-y-1/2 rounded-md cursor-pointer p-1 px-2"
            >
              Ver Demo
            </div>
          </div>
          <div className="relative rounded-lg hover:-translate-y-5 duration-500 easy-out z-10">
            <img src={MenuApp} className="w-full h-auto rounded-lg"></img>
            <div
              className="bg-white absolute bottom-0 text-md text-black
            transform -translate-x-1 translate-y-1/2 rounded-md cursor-pointer p-1 px-2"
            >
              Ver Demo
            </div>
          </div>
          <div className="relative rounded-lg hover:-translate-y-5 duration-500 easy-out z-10">
            <img src={MenuApp} className="w-full h-auto rounded-lg"></img>
            <div
              className="bg-white absolute bottom-0 text-md text-black
            transform -translate-x-1 translate-y-1/2 rounded-md cursor-pointer p-1 px-2"
            >
              Ver Demo
            </div>
          </div>
          <div className="relative rounded-lg hover:-translate-y-5 duration-500 easy-out z-10">
            <img src={MenuApp} className="w-full h-auto rounded-lg "></img>
            <div
              className="bg-white absolute bottom-0 text-md text-black
            transform -translate-x-1 translate-y-1/2 rounded-md cursor-pointer p-1 px-2"
            >
              Ver Demo
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProyectosDev;
