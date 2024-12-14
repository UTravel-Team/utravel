import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim() !== "") {
      navigate(`/search?q=${search}`); // Redirige al usuario a una página de búsqueda con el término
    } else {
      navigate("/"); // Si el input está vacío, vuelve a la página principal
    }
  };

  return (
    <div className="flex flex-col items-center  h-screen bg-gray-100">
    <h1 className="text-4xl font-bold text-gray-800 mt-4">Error 404 ¡No puedorr!</h1>
      <div style={{ width: "30%", height: 0, paddingBottom: "16.25%", position: "relative" }}>
        <iframe
          src="https://www.youtube.com/embed/2OUnuE8lATs?start=0&end=17&autoplay=1"
          width="100%"
          height="100%"
          style={{ position: "absolute" }}
          frameBorder="0"
          allowFullScreen
          title="404-video"
        ></iframe>
      </div>
      <p className="text-gray-600 mt-2">
        ¡No puedorrr, pecador de la pradera! Parece que la página que buscabas ha salido por patas. Pero no te preocupes, que aquí tienes un buscador apañao pa' volverte al redil, ¡al ataqueeer!
      </p>

      <form onSubmit={handleSearch} className="mt-4 w-full max-w-md">
        <div className="relative">
          <input
            type="text"
            placeholder="Busca aquí..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
          />
          <button
            type="submit"
            className="absolute right-2 top-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
          >
            Buscar
          </button>
        </div>
      </form>

      <button
        onClick={() => navigate("/")}
        className="mt-4 bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
      >
        Volver al inicio
      </button>
    </div>
  );
};

export default NotFoundPage;
