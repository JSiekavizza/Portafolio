import "./App.css";
import Banner from "./assets/Banner/Banner";
import Proyectos from "./assets/Proyectos/Proyectos";
import Skills from "./assets/Skills/Skills";
import ProyectosPM from "./assets/Proyectos/ProyectosPM";
import Formacion from "./assets/Formación/Formacion";
import Footer from "./assets/Footer/Footer";

function App() {
  return (
    <>
      <div className="">
        <h1 className="font-oswald text-3xl font-bold underline p-1.5">
          Hello world!
        </h1>
        <Banner />
        <Proyectos />
        <Skills />
        <ProyectosPM />
        <Formacion />
        <div className="bottom-0 mb-0">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
