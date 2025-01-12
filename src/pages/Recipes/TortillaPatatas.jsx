// src/pages/TortillaPatatas.jsx
import React from "react";
import Recipe from "../../components/RecipeLanding/Recipe";
import Tortilla from "../../assets/images/homeImg/tortilla.jpg";


const TortillaPatatas = () => {
  const recipeData = {
    title: "Tortilla de Patatas",
    image: Tortilla, 
    ingredients: [
      "4 patatas medianas",
      "1 cebolla (opcional)",
      "6 huevos",
      "Aceite de oliva virgen extra",
      "Sal al gusto",
    ],
    steps: [
      "Pela las patatas y córtalas en rodajas finas.",
      "Pica la cebolla (si la usas) en trozos pequeños.",
      "Calienta aceite en una sartén y fríe las patatas y la cebolla a fuego medio hasta que estén tiernas.",
      "Bate los huevos en un bol grande y añade las patatas y la cebolla fritas. Mezcla bien.",
      "Calienta una sartén antiadherente con un poco de aceite y vierte la mezcla.",
      "Cocina a fuego medio-bajo hasta que la parte inferior esté dorada. Voltea la tortilla con cuidado usando un plato.",
      "Cocina el otro lado durante unos minutos hasta que esté lista. Sirve caliente o fría.",
    ],
  };

  return <Recipe {...recipeData} />;
};

export default TortillaPatatas;
