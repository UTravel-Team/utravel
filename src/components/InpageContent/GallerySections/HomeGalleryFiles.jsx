import React, { useState } from "react";
import { Link } from "react-router-dom";
import salmorejo from "../../../assets/images/homeImg/salmorejo.jpg";
import gazpacho from "../../../assets/images/homeImg/gazpacho.jpg";
import jamon from "../../../assets/images/homeImg/jamonserrano.jpg";
import espetos from "../../../assets/images/homeImg/espetos.jpg";
import tortilla from "../../../assets/images/homeImg/tortilla.jpg";
import aove from "../../../assets/images/homeImg/aove.jpg";

const HomeGalleryFiles = () => {
  const recipes = [
    {
      id: 1,
      url: salmorejo,
      link:"/Salmorejo-Cordobes",
      alt:"salmorejo-cordobes",
      caption: "Salmorejo Cordobés",
      description: "Una deliciosa sopa fría típica de Córdoba.",
    },
    {
      id: 2,
      url: gazpacho,
      link: "/gazpachoandaluz",
      alt: "Gazpacho Andaluz",
      caption: "Gazpacho Andaluz",
      description: "Refrescante y tradicional, perfecto para el verano.",
    },
    {
      id: 3,
      url: jamon,
      link: "/recipes/jamonserrano",
      alt: "Jamón Serrano",
      caption: "Jamón del bueno",
      description: "El mejor jamón serrano, ideal para acompañar pan con tomate.",
    },
    {
      id: 4,
      url: espetos,
      link: "/recipes/espetos",
      alt: "Espetos",
      caption: "Espetos",
      description: "Un clásico malagueño, sardinas al fuego en la playa.",
    },
    {
      id: 5,
      url: tortilla,
      link: "/tortilla-patatas",
      alt: "Tortilla de Patatas",
      caption: "Tortilla de Patatas",
      description: "Un icono de la gastronomía española.",
    },
    {
      id: 6,
      url: aove,
      link: "/recipes/aove",
      alt: "Aceite de Oliva Virgen Extra",
      caption: "AOVE",
      description: "El oro líquido de Andalucía, perfecto para cualquier plato.",
    },
  ];

  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const openModal = (recipe) => setSelectedRecipe(recipe);
  const closeModal = () => setSelectedRecipe(null);

  return (
    <div>
      {/* Galería de Recetas */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card text-center">
            <img
              src={recipe.url}
              alt={recipe.alt}
              className="w-full h-48 object-cover rounded-lg shadow-lg"
            />
            <h3 className="text-xl font-bold mt-4">{recipe.caption}</h3>
            <button
              onClick={() => openModal(recipe)}
              className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors duration-200"

            >
              Ver Más
            </button>
          </div>
        ))}
      </div>

      {/* Modal Dinámico */}
      {selectedRecipe && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-3/4 md:w-1/2 relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              ✖
            </button>
            <h2 className="text-2xl font-bold mb-4">{selectedRecipe.caption}</h2>
            <img
              src={selectedRecipe.url}
              alt={selectedRecipe.alt}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <p className="text-gray-600 mb-4">{selectedRecipe.description}</p>
            <Link
              to={selectedRecipe.link}
              className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
            >
              Cómo hacer esta receta
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeGalleryFiles;
