import React from "react";
import { useFetchWeather } from "../../hooks/useFetchWeather";
import  ProvincesCoords  from "../Weather/WeatherData/ProvincesCoords";

const AndaluciaWeather = () => {
  return (
    <div className="p-6">
      <h1 className="text-4xl text-center mb-6"></h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {ProvincesCoords.map((province) => {
          const { weatherData, loading, error } = useFetchWeather(province.lat, province.lon);

          return (
            <div key={province.name} className="p-4 bg-white rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-center">{province.name}</h2>
              {loading && <p className="text-blue-500">Cargando...</p>}
              {error && <p className="text-red-500">Error: {error}</p>}
              {weatherData && (
                <div className="text-center">
                  <p className="text-lg">{weatherData.current.temp_c}°C</p>
                  <p className="text-gray-500">{weatherData.current.condition.text}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AndaluciaWeather;