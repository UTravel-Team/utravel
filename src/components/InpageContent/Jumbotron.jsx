import React from "react";
import homeImage from "../../assets/images/homeImg/flowers.jpg"; // Importa la imagen correctamente al inicio

function Jumbotron({ title, subtitle, imagePath, phrase }) {
  return (
    <div
      className="relative w-full h-[40vh] md:h-[50vh] bg-cover bg-center mb-12"
      style={{
        backgroundImage: `url(${imagePath || homeImage})`, // Usa `imagePath` o un valor predeterminado
      }}
    >
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-6 py-12">
        {/* Título */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4">
          {title}
        </h1>
        {/* Subtítulo */}
        <p className="text-lg md:text-2xl text-white drop-shadow-md mb-4">
          {subtitle}
        </p>
        {/* Frase */}
        {phrase && (
          <p className="text-md md:text-lg italic text-gray-300 drop-shadow-sm">
            {phrase}
          </p>
        )}
      </div>
    </div>
  );
}

export default Jumbotron;
