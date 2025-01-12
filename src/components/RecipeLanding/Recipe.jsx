// src/components/RecipeLanding/Recipe.js
import React from "react";

const Recipe = ({ image, title, ingredients, steps }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Imagen y Título */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover sm:h-80 lg:h-96"
        />
        <h1 className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white text-xl sm:text-2xl lg:text-3xl font-bold px-4 py-2 rounded-md">
          {title}
        </h1>
      </div>

      {/* Contenido */}
      <div className="p-6 space-y-8">
        {/* Ingredientes */}
        <div>
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4">
            Ingredientes:
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {ingredients.map((ingredient, index) => (
              <li key={index} className="text-sm sm:text-base lg:text-lg">
                {ingredient}
              </li>
            ))}
          </ul>
        </div>

        {/* Pasos */}
        <div>
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4">
            Pasos:
          </h2>
          <ol className="list-decimal list-inside space-y-4 text-gray-700">
            {steps.map((step, index) => (
              <li key={index} className="text-sm sm:text-base lg:text-lg">
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
