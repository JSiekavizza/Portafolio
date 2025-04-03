import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [proyectos, setProyectos] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [projectManager, setProjectManager] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/Data/db.json")
      .then((res) => {
        setProyectos(res.data.proyectos);
        setBlogs(res.data.blogs);
        setProjectManager(res.data.projectManager);
      })
      .catch((error) => console.error("Error al cargar datos: ", error))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <DataContext.Provider
      value={{ proyectos, blogs, projectManager, isLoading }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
