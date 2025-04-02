import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DataProvider } from "./assets/context/DataContext.jsx";
import Home from "../src/Home/Home.jsx";
import Blog from "../src/assets/Blog/Blog.jsx";
import Footer from "./assets/Footer/Footer";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <div className="relative min-h-screen w-full ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog/:id" element={<Blog />} />
          </Routes>
        </div>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
