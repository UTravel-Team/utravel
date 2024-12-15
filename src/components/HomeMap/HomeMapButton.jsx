import React, { useState } from "react";
import HomeMap from "./HomeMap"; // Importa el componente del mapa
import { Link } from "react-router-dom";navigator

const HomeMapButton = () => {
  const [showMap, setShowMap] = useState(false); // Estado para controlar la visibilidad del mapa

  const toggleMap = () => {
    setShowMap((prev) => !prev); // Cambia el estado de visible/invisible
  };

  return (
    <div className="p-6">
      {/* Botón para activar/desactivar el mapa */}
      <button
        onClick={toggleMap}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-400 transition"
      >
        {showMap ? "Ocultar Mapa" : "Mostrar Mapa"}
      </button>

      {/* Renderiza el componente del mapa solo si `showMap` es true */}
      {showMap && (
        <div className="mt-6">
          <HomeMap />
        </div>
      )}
    </div>
  );
};

export default HomeMapButton;