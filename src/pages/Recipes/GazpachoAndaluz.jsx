// src/pages/GazpachoAndaluz.jsx
import React from "react";
import Recipe from "../../components/RecipeLanding/Recipe";
import gazpacho from "../../assets/images/homeImg/gazpacho.jpg";

const GazpachoAndaluz = () => {
  const recipeData = {
    title: "Gazpacho Andaluz",
    image: gazpacho, // Cambia a una URL real
    ingredients: [
      "1 kg de tomates maduros",
      "1 pepino",
      "1 pimiento verde",
      "1 diente de ajo",
      "50 g de pan duro",
      "100 ml de aceite de oliva virgen extra",
      "30 ml de vinagre de vino",
      "Sal al gusto",
    ],
    steps: [
      "Lava y corta los tomates, el pepino y el pimiento verde.",
      "Añade los vegetales al vaso de la batidora junto con el ajo y el pan duro.",
      "Tritura hasta obtener una mezcla homogénea.",
      "Incorpora el aceite de oliva, el vinagre y la sal. Vuelve a batir.",
      "Pasa la mezcla por un colador para eliminar los restos sólidos.",
      "Refrigera durante al menos 2 horas antes de servir.",
    ],
  };
};

export default GazpachoAndaluz;