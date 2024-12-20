import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom"; 

const provinces = [
  { name: "Granada", url: "/granada" },
  { name: "Sevilla", url: "/sevilla" },
  { name: "Córdoba", url: "/cordoba" },
  { name: "Cádiz", url: "/cadiz" },
  { name: "Málaga", url: "/malaga" },
  { name: "Jaén", url: "/jaen" },
  { name: "Almería", url: "/almeria" },
  { name: "Huelva", url: "/huelva" },
];

function ProvSearchBar() {
  const [text, setText] = useState(""); // Texto ingresado por el usuario
  const [matches, setMatches] = useState([]); // Coincidencias filtradas
  const navigate = useNavigate(); // Inicializa useNavigate

  // Maneja el cambio en el input
  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);

    if (value === "") {
      setMatches([]); // Vacía las coincidencias si no hay texto
    } else {
      // Filtrar las provincias según el texto ingresado (ignorando mayúsculas/minúsculas cambiando todo con tolowercase)
      const filtered = provinces.filter((province) =>
        province.name.toLowerCase().includes(value.toLowerCase())
      );
      setMatches(filtered);
    }
  };

  // Redirigir a la URL seleccionada
  const handleSelect = (url) => {
    navigate(url); // Se usa navigate() para cambiar la ruta
  };

  return (
    <div className="flex flex-col items-start gap-2 px-4 py-2">
      <div className="relative w-full shadow-md">
        {/* Input de búsqueda */}
        <input
          type="text"
          className="border border-gray-300 
          rounded-full p-3 pl-12 w-full  focus:ring-2 focus:ring-green-500 text-gray-900"
          placeholder="Busca tu provincia"
          value={text}
          onChange={handleChange}
          aria-label="Buscar"
        />
        {/* Ícono de lupa */}
        <span className="absolute inset-y-0 left-4 flex items-center text-gray-500">
          <MagnifyingGlassIcon className="h-6 w-6" />
        </span>
      </div>
      {/* Lista desplegable de coincidencias */}
      {matches.length > 0 && (
        <ul className="border border-gray-300 rounded-lg w-full shadow-md max-h-60 overflow-y-auto">
          {matches.map((match) => (
            <li
              key={match.name}
              className="p-2 text-black hover:bg-green-800 cursor-pointer"
              onClick={() => handleSelect(match.url)}
            >
              {match.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProvSearchBar;