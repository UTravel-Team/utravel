import { useState, useEffect } from "react";

export const useFetchWeather = (lat, lon) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const apiKey = import.meta.env.VITE_WEATHER_API_KEY; // Clave API desde .env
      const baseUrl = import.meta.env.VITE_WEATHER_API_BASE_URL; // URL base desde .env
      const url = `${baseUrl}/current.json?key=${apiKey}&q=${lat},${lon}&aqi=no`; // URL completa

      try {
        console.log("Fetching weather data for:", lat, lon);
        setLoading(true); // Comienza la carga
        const response = await fetch(url);

        if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
        
        const data = await response.json(); // Respuesta JSON de la API

        // Comprobamos si los datos fueron recibidos correctamente
        if (data && data.current) {
          setWeatherData(data); // Guardamos los datos del clima en el estado
        } else {
          throw new Error("No se encontraron datos del clima.");
        }
      } catch (err) {
        console.error("Error al cargar el clima:", err.message);
        setError(err.message); // Si ocurre un error, lo guardamos en el estado
      } finally {
        setLoading(false); // Finaliza la carga, independientemente del resultado
      }
    };

    fetchWeather(); // Llamamos a la función para obtener el clima
  }, [lat, lon]); // Solo se vuelve a ejecutar si cambian las coordenadas

  return { weatherData, loading, error }; // Retornamos el estado
};
