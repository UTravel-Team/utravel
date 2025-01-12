import React, { useState } from "react";
import WeatherDisplay from "../WeatherDisplay"; // Componente que muestra el clima

const ProvincesCoords= () => {
  const [coordinates, setCoordinates] = useState({ lat: 36.8381, lon: -2.4597 }); // Coordenadas por defecto de Almería

  // Función para actualizar coordenadas (puedes adaptarla para un selector dinámico)
  const changeLocation = (lat, lon) => {
    setCoordinates({ lat, lon });
  };

  return (
    <div>
      <h1>Provincias</h1>
      <button onClick={() => changeLocation(36.8381, -2.4597)}>Almería</button>
      <button onClick={() => changeLocation(37.3826, -5.996)}>Sevilla</button>
      <button onClick={() => changeLocation(36.7213, -4.4214)}>Málaga</button>

      {/* Componente que muestra el clima con las coordenadas actuales */}
      <WeatherDisplay lat={coordinates.lat} lon={coordinates.lon} />
    </div>
  );
};

export default ProvincesCoords;
