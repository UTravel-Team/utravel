import { useState, useEffect } from "react";

export const useFetchWeather = (lat, lon) => {
  const [weatherData, setWeatherData] = useState(null); // Estado para guardar datos del clima
  const [loading, setLoading] = useState(true); // Estado para indicar si está cargando
  const [error, setError] = useState(null); // Estado para manejar errores

  const buildUrl = (lat, lon, apiKey, baseUrl) => {
    return `${baseUrl}/current.json?key=${apiKey}&q=${lat},${lon}&aqi=no`;
  };

  useEffect(() => {
    const fetchWeather = async () => {
      const apiKey = import.meta.env.VITE_WEATHER_API_KEY; // Clave API desde .env
      const baseUrl = import.meta.env.VITE_WEATHER_API_BASE_URL; // URL base desde .env

      // Validación inicial de configuración y coordenadas
      if (!apiKey || !baseUrl) {
        console.error("Faltan API Key o Base URL en el archivo .env.");
        setError("Configuración inválida. Revisa tu archivo .env.");
        setLoading(false);
        return;
      }

      if (!lat || !lon || isNaN(lat) || isNaN(lon)) {
        console.warn("Coordenadas inválidas proporcionadas:", { lat, lon });
        setError("Coordenadas inválidas. Proporcione latitud y longitud válidas.");
        setLoading(false);
        return;
      }

      const url = buildUrl(lat, lon, apiKey, baseUrl);

      try {
        setLoading(true);
        console.log("Solicitando datos del clima a:", url);

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Error en la respuesta: ${response.status} ${response.statusText}`);
        }

        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error("Respuesta no es JSON válida.");
        }

        const data = await response.json();

        if (data && data.current) {
          console.log("Datos del clima recibidos:", data);
          setWeatherData(data);
        } else {
          throw new Error("Datos del clima incompletos o inválidos.");
        }
      } catch (err) {
        console.error("Error al obtener datos del clima:", err.message);
        setError("No se pudo obtener el clima. Intenta más tarde.");
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [lat, lon]);

  return { weatherData, loading, error };
};
