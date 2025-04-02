import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800/50 py-8 text-center text-gray-400 text-sm">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} Todos los derechos reservados</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
