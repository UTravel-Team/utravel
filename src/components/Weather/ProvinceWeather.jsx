// src/components/Weather/ProvinceWeather.jsx
import React from "react";

const ProvinceWeather = ({ provinceName, weatherData, loading, error, description }) => {
  return (
    <div className="p-6 flex flex-col gap-8 md:flex-row md:items-start">
      {/* Columna del 30% */}
      <div className="w-full md:w-3/12 flex flex-col items-center md:items-start bg-white p-4 rounded-md shadow-md">
        <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">
          Clima en {provinceName}
        </h3>
        {loading ? (
          <p className="text-blue-500 text-center md:text-left">Cargando clima...</p>
        ) : error ? (
          <p className="text-red-500 text-center md:text-left">
            Error al cargar los datos del clima: {error}
          </p>
        ) : (
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            {/* Información del clima */}
            <div className="mb-4">
              <p>
                <strong>Fecha:</strong>{" "}
                {weatherData?.location?.localtime.split(" ")[0]}
              </p>
              <p>
                <strong>Hora:</strong>{" "}
                {weatherData?.location?.localtime.split(" ")[1]}
              </p>
              <p>
                <strong>Temperatura:</strong>{" "}
                {weatherData?.current?.temp_c}°C
              </p>
              <p>
                <strong>Condición:</strong>{" "}
                {weatherData?.current?.condition?.text}
              </p>
            </div>

            {/* Icono del clima */}
            <div className="flex justify-center items-center h-full">
              <img
                src={weatherData?.current?.condition?.icon}
                alt={weatherData?.current?.condition?.text}
                className="w-16 h-16"
              />
            </div>
          </div>
        )}
      </div>

      {/* Texto descriptivo de la provincia */}
      <div className="w-full md:w-9/12">
        <h3 className="text-2xl font-semibold mb-4 text-center md:text-left">
          Descubre {provinceName}
        </h3>
        <p className="text-gray-700 text-justify">{description}</p>
      </div>
    </div>
  );
};

export default ProvinceWeather;
