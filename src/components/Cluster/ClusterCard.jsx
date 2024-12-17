import React from "react";
import { Link } from "react-router-dom";

const ClusterCard = ({ title, link, imagePath }) => {
  return (
    <div className="bg-white shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 relative group rounded-lg">
      {/* Imagen */}
      <img
        src={imagePath || "https://via.placeholder.com/150"} // Fallback si no existe la imagen
        alt={title}
        className="w-full h-60 object-cover"
      />

      {/* Contenido */}
      <div className="p-4 text-center">
        <Link
          to={link}
          className="inline-block text-xl font-bold text-gray-700 hover:text-blue-500 transition-colors duration-200"
        >
          {title}
        </Link>
      </div>
    </div>
  );
};

export default ClusterCard;
