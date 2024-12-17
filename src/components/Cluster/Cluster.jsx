import React from "react";
import { Link } from "react-router-dom";
import ClusterCard from "./ClusterCard";

// Importa las imágenes automáticamente desde la carpeta correcta
const images = import.meta.glob("../../assets/images/cluster/*.jpg", { eager: true, import: "default" });

const Cluster = () => {
  const cards = [
    { id: 1, title: "Huelva", link: "/huelva" },
    { id: 2, title: "Cadiz", link: "/cadiz" },
    { id: 3, title: "Cordoba", link: "/cordoba" },
    { id: 4, title: "Granada", link: "/granada" },
    { id: 5, title: "Almeria", link: "/almeria" },
    { id: 6, title: "Sevilla", link: "/sevilla" },
    { id: 7, title: "Malaga", link: "/malaga" },
    { id: 8, title: "Jaen", link: "/jaen" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {cards.map((card) => {
        // Construye la ruta de la imagen basada en el título de la tarjeta en minúsculas
        const imagePath = images[`../../assets/images/cluster/${card.title.toLowerCase()}.jpg`];

        return (
          <ClusterCard
            key={card.id}
            title={card.title}
            link={card.link}
            imagePath={imagePath || "https://via.placeholder.com/150"} // Fallback si no existe la imagen
          />
        );
      })}
    </div>
  );
};

export default Cluster;
