import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DataProvider, DataContext } from "./assets/context/DataContext.jsx";
import Home from "../src/Home/Home.jsx";
import Blog from "../src/assets/Blog/Blog.jsx";
import Loader from "./assets/Loader/Loader.jsx"; // Asegurar ruta correcta
import { useContext } from "react";

function App() {
  return (
    <DataProvider>
      <AppContent />
    </DataProvider>
  );
}

function AppContent() {
  const { isLoading } = useContext(DataContext);

  return isLoading ? (
    <Loader />
  ) : (
    <BrowserRouter>
      <div className="relative min-h-screen w-full ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<Blog />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
