const Skills = () => {
  return (
    <>
      <div
        className="section 
       relative flex justify-start items-end"
      >
        <div
          className=" rounded-md relative
          flex justify-start items-center gap-3 overflow-hidden z-10"
        >
          <div className="py-4 w-16 lg:w-24">
            <div className="flex justify-around z-10">
              <div className="">
                <img src="/imagenes/html-1.png" alt="lenguaje_html" />
              </div>
              <div>
                <img src="/imagenes/css-1.png" alt="lenguaje_html" />
              </div>
            </div>
          </div>
          <div className="py-4 w-16 lg:w-24">
            <div className="flex justify-around z-10">
              <div>
                <img src="/imagenes/react-jsx-1.png" alt="lenguaje_html" />
              </div>
              <div>
                <img src="/imagenes/react_icon.png" alt="lenguaje_html" />
              </div>
              <div>
                <img src="/imagenes/Bootstrap-1.png" alt="lenguaje_html" />
              </div>
            </div>
          </div>
          <div className="py-4 w-16 lg:w-24">
            <div className="flex justify-around z-10">
              <div>
                <img src="/imagenes/git-1.png" alt="lenguaje_html" />
              </div>
              <div>
                <img src="/imagenes/psd.png" alt="lenguaje_html" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
