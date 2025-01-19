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

<div class="absolute top-0 -z-10 h-full w-full bg-white">
  <div class="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
</div>;
