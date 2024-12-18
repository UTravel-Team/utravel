import { useState, useEffect } from "react";

export const useFetchWeather = (lat, lon) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const url = `https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=${lat}&lon=${lon}&units=metric&lang=es`;
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY || "clave-no-configurada",
          "X-Rapidapi-Host": import.meta.env.VITE_RAPIDAPI_HOS || "host-no-configurado",
        },
      };

      try {
        console.log("Fetching weather data for:", lat, lon);
        setLoading(true);
        const response = await fetch(url, options);
        if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
        const data = await response.json();
        setWeatherData(data);
      } catch (err) {
        console.error("Error al cargar el clima:", err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [lat, lon]);

  return { weatherData, loading, error };
};
