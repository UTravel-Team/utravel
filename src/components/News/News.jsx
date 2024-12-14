import React, { useState, useEffect } from "react";

function News() {
  const andaluciaPhrases = [
    "Andalucía, cuna del flamenco y tierra de arte 💃🎶",
    "Disfruta del sol en las costas de Andalucía, ¡más de 300 días al año! ☀️",
    "Explora los pueblos blancos, un tesoro escondido entre montañas 🏘️",
    "Prueba el gazpacho y el salmorejo, auténticos sabores andaluces 🍅🥄",
    "Camina por el histórico barrio de la Judería, ¡presente en varias provincias! 🕍",
    "Andalucía, tierra de olivos, ¡el mejor aceite del mundo te espera! 🫒",
    "Visita la Alhambra de Granada y el Alcázar de Sevilla, ¡joyas del patrimonio mundial! 🏰",
    "Disfruta de la Semana Santa andaluza, un espectáculo de devoción y arte ⛪🎺",
    "Desde Sierra Nevada hasta las playas de la Costa del Sol, Andalucía lo tiene todo 🌄🏖️",
    "Descubre las historias de Al-Ándalus en cada rincón andaluz 🕌✨",
    "El Parque Nacional de Doñana, un paraíso para la biodiversidad 🦜",
    "Degusta el pescaíto frito en Cádiz o el jamón ibérico en Huelva, ¡sabores inolvidables! 🍤🍖",
    "Las ferias andaluzas son sinónimo de alegría, color y tradición 🎡🎠",
    "Andalucía tiene el mayor número de espacios naturales protegidos de España 🌳",
    "Pasea por la Plaza de España en Sevilla o el Paseo de los Tristes en Granada, ¡te enamorarás! ❤️",
    "Enamórate de la Sierra de Cazorla, un pulmón verde en el corazón de Jaén 🌲",
    "Andalucía: historia, gastronomía y naturaleza en cada esquina 🌍",
    "Disfruta de los carnavales de Cádiz y la alegría de sus calles 🎭",
    "Sube al Caminito del Rey en Málaga, ¡una experiencia emocionante! 🏞️",
    "Descubre la magia de los patios de Córdoba en primavera 🌸",
  ];

  const [currentPhrase, setCurrentPhrase] = useState("");

  const getRandomPhrase = () => {
    const randomIndex = Math.floor(Math.random() * andaluciaPhrases.length);
    return andaluciaPhrases[randomIndex];
  };

  useEffect(() => {
    setCurrentPhrase(getRandomPhrase());

    const interval = setInterval(() => {
      setCurrentPhrase(getRandomPhrase());
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="news" style={{ textAlign: "center", marginTop: "20px" }}>
      
      <p style={{ fontStyle: "italic", fontSize: "1.2rem" }}>{currentPhrase}</p>
     
    </div>
  );
}

export default News;
