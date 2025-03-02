import Home from "../src/Home/Home.jsx";
import Footer from "./assets/Footer/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <div className="bottom-0 mb-0">
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

<div class="absolute top-0 -z-10 h-full w-full bg-white">
  <div class="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
</div>;
