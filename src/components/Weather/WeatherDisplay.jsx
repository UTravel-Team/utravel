import React from "react";
import { useFetchWeather } from "../../hooks/useFetchWeather";

const WeatherDisplay = ({ lat, lon }) => {
  const { weatherData, loading, error } = useFetchWeather(lat, lon);

  if (loading) return <p>Cargando clima...</p>;
  if (error) return <p>Error: {error}</p>;

  // Mostramos los datos del clima si están disponibles
  return (
    <div>
      <h2>Clima en las coordenadas ({lat}, {lon}):</h2>
      <p>Temperatura: {weatherData?.current?.temp_c}°C</p>
      <p>Condición: {weatherData?.current?.condition?.text}</p>
      <img
        src={weatherData?.current?.condition?.icon}
        alt={weatherData?.current?.condition?.text}
      />
    </div>
  );
};

export default WeatherDisplay;
