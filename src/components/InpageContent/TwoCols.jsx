import React from "react";

function TwoColumnSection({ title, description, imagePath, altText, reverse }) {
  
  return (
    <div
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center gap-8`}
    >
      <img
        src={imagePath}
        alt={altText}
        className="w-full md:w-1/2 rounded-lg shadow-lg"
      />
      <div>
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-lg leading-relaxed">{description}</p>
      </div>
    </div>
  );
  
}

export default TwoColumnSection;
