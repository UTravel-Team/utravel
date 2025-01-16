import React, { useEffect, useState } from "react";
import provincesNewsData from "./NewsData/ProvincesNewsData.json";

const HomeProvincesNews = () => {
  const [currentPhrase, setCurrentPhrase] = useState("");

  useEffect(() => {
    // Extraer todas las frases del nuevo formato
    const allPhrases = provincesNewsData.Andalucia.flatMap(province => province.phrases);

    const getRandomPhrase = () => {
      const randomIndex = Math.floor(Math.random() * allPhrases.length);
      return allPhrases[randomIndex];
    };

    setCurrentPhrase(getRandomPhrase());

    const interval = setInterval(() => {
      setCurrentPhrase(getRandomPhrase());
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-provinces-news text-center">
      <p className="text-sm">{currentPhrase}</p>
    </div>
  );
};

export default HomeProvincesNews;