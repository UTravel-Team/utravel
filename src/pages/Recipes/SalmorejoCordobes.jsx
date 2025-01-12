// src/pages/SalmorejoCordobes.jsx
import React from "react";
import Recipe from "../../components/RecipeLanding/Recipe";
import SalmorejoCordobes from "../../assets/images/homeImg/salmorejo-cordobes.jpg";

const Salmorejo = () => {
  const recipeData = {
    title: "Salmorejo Cordobés",
    image: SalmorejoCordobes, 
    ingredients: [
      "1 kg de tomates maduros",
      "200 g de pan del día anterior",
      "100 ml de aceite de oliva virgen extra",
      "1 diente de ajo",
      "Sal al gusto",
      "Huevos cocidos (para acompañar)",
      "Jamón serrano (para acompañar)",
    ],
    steps: [
      "Lava y corta los tomates en trozos grandes.",
      "Añade los tomates al vaso de la batidora junto con el ajo y el pan troceado.",
      "Tritura hasta obtener una mezcla homogénea.",
      "Añade el aceite de oliva y la sal. Bate nuevamente hasta que esté bien emulsionado.",
      "Pasa la mezcla por un colador para eliminar las pieles y semillas.",
      "Refrigera el salmorejo durante al menos 2 horas antes de servir.",
      "Sirve frío acompañado de huevos cocidos picados y jamón serrano.",
    ],
  };

  return <Recipe {...recipeData} />;
};

export default Salmorejo;
