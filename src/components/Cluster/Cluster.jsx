import React from "react";
import { Link } from "react-router-dom";

const Cluster = () => {
  const cards = [
    {
      id: 1,
      image: "https://via.placeholder.com/150",
      title: "Huelva",
      link: "/huelva",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      title: "Cadiz",
      link: "/cadiz",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/150",
      title: "Cordoba",
      link: "/cordoba",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/150",
      title: "Granada",
      link: "/granada",
    },
    {
      id: 5,
      image: "https://via.placeholder.com/150",
      title: "Almeria",
      link: "/almeria",
    },
    {
      id: 6,
      image: "https://via.placeholder.com/150",
      title: "Cordoba",
      link: "/sevilla",
    },
    {
      id: 7,
      image: "https://via.placeholder.com/150",
      title: "Malaga",
      link: "/malaga",
    },
    {
      id: 8,
      image: "https://via.placeholder.com/150",
      title: "Jaen",
      link: "/jaen",
    },
  ];

  return (
    <div className="grid grid-cols-8 gap-4 p-4">
      {cards.map((card) => (
        <div
          key={card.id}
          className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 relative group"
        >
          {/* Imagen alargada */}
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-96 object-cover" // Cambiado h-48 por h-72
          />
           {/* Botón siempre visible */}
           <div className="p-4 text-center">
              <Link
                to={card.link}
                className="inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-400 transition"
              >
                {card.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cluster;
