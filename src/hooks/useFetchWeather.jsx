import { useState, useEffect } from "react";

export const useFetchWeather = (lat, lon) => {
  const [weatherData, setWeatherData] = useState(null); // Estado para guardar los datos del clima
  const [loading, setLoading] = useState(true); // Estado para indicar si está cargando
  const [error, setError] = useState(null); // Estado para manejar errores

  useEffect(() => {
    const fetchWeather = async () => {
      const apiKey = import.meta.env.VITE_WEATHER_API_KEY; // Clave API desde .env
      const baseUrl = import.meta.env.VITE_WEATHER_API_BASE_URL; // URL base desde .env

      // Validamos que las variables de entorno estén configuradas
      if (!apiKey || !baseUrl) {
        console.error("API Key o Base URL no configuradas en .env.");
        setError("Configuración de API inválida.");
        setLoading(false);
        return;
      }

      // Validamos latitud y longitud
      if (!lat || !lon || isNaN(lat) || isNaN(lon)) {
        console.warn("Latitud o longitud inválidas:", { lat, lon });
        setError("Latitud o longitud inválidas.");
        setLoading(false);
        return;
      }

      // Construimos la URL de la API
      const url = `${baseUrl}/current.json?key=${apiKey}&q=${lat},${lon}&aqi=no`;

      try {
        console.log("Fetching weather data from:", url);
        setLoading(true); // Inicia el indicador de carga

        const response = await fetch(url);

        // Verificamos si el contenido de la respuesta es JSON
        const contentType = response.headers.get("content-type");
        if (!response.ok || !contentType.includes("application/json")) {
          throw new Error(
            `Error en la respuesta: ${response.status} ${response.statusText}`
          );
        }

        const data = await response.json(); // Convertimos la respuesta a JSON

        // Comprobamos si los datos están completos
        if (data && data.current) {
          console.log("Weather data received:", data);
          setWeatherData(data); // Guardamos los datos en el estado
        } else {
          throw new Error("No se encontraron datos del clima en la respuesta.");
        }
      } catch (err) {
        console.error("Error al cargar el clima:", err.message);
        setError(err.message); // Guardamos el error en el estado
      } finally {
        setLoading(false); // Finalizamos la carga
      }
    };

    fetchWeather(); // Llamamos a la función si hay coordenadas válidas
  }, [lat, lon]); // Se vuelve a ejecutar si cambian las coordenadas

  return { weatherData, loading, error }; // Retornamos los estados
};
