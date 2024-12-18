import { useState, useEffect } from "react";
import provincesNewsData from "../components/News/NewsData/ProvincesNewsData.json";

export const useFetchNews = (province) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      setLoading(true);

      if (!province || !provincesNewsData[province]) {
        throw new Error(`No se encontraron datos para la provincia: ${province}`);
      }

      setData(provincesNewsData[province]); // Frases de la provincia
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [province]);

  return { data, error, loading };
};

export default useFetchNews;
