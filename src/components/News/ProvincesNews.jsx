import React, { useState, useEffect } from "react";

function ProvincePage({ title, phrases }) {
  const [currentPhrase, setCurrentPhrase] = useState("");

  const getRandomPhrase = () => {
    if (!phrases || phrases.length === 0) return "No hay frases disponibles.";
    const randomIndex = Math.floor(Math.random() * phrases.length);
    return phrases[randomIndex];
  };

  useEffect(() => {
    setCurrentPhrase(getRandomPhrase());

    const interval = setInterval(() => {
      setCurrentPhrase(getRandomPhrase());
    }, 10000);

    return () => clearInterval(interval);
  }, [phrases]);

  return (
    <div className="provincePage">
      <h1 className="title" style={{ textAlign: "center" }}>¡Bienvenidos a {title}!</h1>
      <div className="news" style={{ textAlign: "center", marginTop: "20px" }}>
        <p style={{ fontStyle: "italic", fontSize: "1.2rem" }}>{currentPhrase}</p>
      </div>
    </div>
  );
}

export default ProvincePage;