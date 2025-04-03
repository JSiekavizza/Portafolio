const Loader = () => {
  return (
    <div
      className="fixed inset-0 flex justify-center items-center bg-cover bg-center z-50"
      style={{ backgroundImage: "url(/imagenes/fondo-b.png)" }}
    >
      <div className="text-center text-white">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
        <p className="mt-4 text-lg font-semibold">Cargando...</p>
      </div>
    </div>
  );
};

export default Loader;
