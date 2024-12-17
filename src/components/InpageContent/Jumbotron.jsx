import React from "react";

function Jumbotron({ title, subtitle, imagePath }) {
  return (
    <div
      className="relative w-full h-[40vh] md:h-[50vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${imagePath})` }}
    >
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-6 py-12">
        {/* Título */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4">
          {title}
        </h1>
        {/* Subtítulo */}
        <p className="text-lg md:text-2xl text-white drop-shadow-md">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

export default Jumbotron;