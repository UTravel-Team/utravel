import React, { useEffect, useState } from "react";
import provincesNewsData from "./NewsData/ProvincesNewsData.json";

const ProvincesNews = ({ provinceName }) => {
  const [currentPhrase, setCurrentPhrase] = useState("");

  useEffect(() => {
    // Encontrar la provincia específica en el nuevo formato
    const province = provincesNewsData.Andalucia.find(
      prov => prov.province === provinceName
    );

    if (!province || !province.phrases) {
      console.error(`No se encontraron frases para la provincia: ${provinceName}`);
      return;
    }

    const getRandomPhrase = () => {
      const randomIndex = Math.floor(Math.random() * province.phrases.length);
      return province.phrases[randomIndex];
    };

    setCurrentPhrase(getRandomPhrase());

    const interval = setInterval(() => {
      setCurrentPhrase(getRandomPhrase());
    }, 10000);

    return () => clearInterval(interval);
  }, [provinceName]);

  return (
    <div className="province-news text-center">
      <h2 className="text-bold mb-4">🌟 Datos curiosos</h2>
      <p className="text-sm">{currentPhrase}</p>
    </div>
  );
};

export default ProvincesNews;