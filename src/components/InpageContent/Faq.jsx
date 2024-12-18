import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const questions = [
    {
      question: "¿Cuál es la mejor época para visitar Andalucía?",
      answer:
        "La primavera (abril y mayo) y el otoño (septiembre y octubre) son ideales por su clima agradable y eventos culturales.",
    },
    {
      question: "¿Qué actividades se pueden realizar en Sierra Nevada?",
      answer:
        "Puedes practicar senderismo, esquí en invierno y disfrutar de vistas panorámicas impresionantes durante todo el año.",
    },
    {
      question: "¿Cómo puedo llegar a las playas de Almería?",
      answer:
        "Puedes llegar en coche, autobús o tren. También hay vuelos directos al aeropuerto de Almería desde varias ciudades.",
    },
    {
      question: "¿Qué platos típicos debo probar en Andalucía?",
      answer:
        "Prueba el gazpacho, el salmorejo, las tapas de pescado frito y, por supuesto, el jamón ibérico.",
    },
  ];

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto my-8 p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Preguntas Frecuentes</h2>
      <ul>
        {questions.map((item, index) => (
          <li key={index} className="mb-4">
            <button
              onClick={() => toggleDropdown(index)}
              className="flex justify-between items-center w-full p-4 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none"
            >
              <span className="text-lg font-medium">{item.question}</span>
              <svg
                className={`w-5 h-5 transform ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                } transition-transform duration-200`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openIndex === index && (
              <div className="p-4 text-gray-700 border-t border-gray-200">
                {item.answer}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;