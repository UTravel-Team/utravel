import React from "react";
import { Link } from "react-router-dom";


const RecipeModal = ({ photo, onClose, link }) => {
  // Si no hay foto seleccionada, no renderiza nada
  if (!photo) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300">
      <div className="bg-white rounded-lg shadow-lg p-6 w-3/4 md:w-1/2 relative transform transition-transform duration-300">
        <button
          onClick={onClose}
          aria-label="Cerrar modal"
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✖
        </button>
        <h2 className="text-2xl font-bold mb-4">{photo.caption}</h2>
        <img
          src={photo.url}
          alt={photo.alt}
          className="w-full h-48 object-cover rounded mb-4"
          onError={(e) => (e.target.src = "/fallback-image.jpg")}
        />
        <p className="text-gray-600 mb-4">{photo.description}</p>
        
        {/* Botón dinámico con enlace */}
        {link && (
          <Link
            to={link}
            className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
          >
            Ver más info
          </Link>
        )}
      </div>
    </div>
  );
};

export default RecipeModal;