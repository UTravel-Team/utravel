import React from "react";

function TwoColumnSection({ title, description, imagePath, altText, reverse }) {
  return (
    <div
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center gap-0 m-0 p-0 overflow-hidden`}
    >
      <img
        src={imagePath}
        alt={altText}
        className="w-full md:w-1/2 shadow-lg rounded-none border-4 border-white"
      />
      <div className="w-full md:w-1/2 p-10">
        <h2 className="text-3xl font-bold pb-4 m-0">{title}</h2>
        <p className="text-lg leading-relaxed m-0">{description}</p>
      </div>
    </div>
  );
}

export default TwoColumnSection;
