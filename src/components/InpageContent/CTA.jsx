import React from "react";

function CTA({ quote, buttonText, buttonLink }) {
  return (
    <div className="text-center mt-12">
      <p className="text-2xl font-semibold text-gray-700 mb-6">{quote}</p>
      <a
        href={buttonLink}
        className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg shadow-md transition"
      >
        {buttonText}
      </a>
    </div>
  );
}

export default CTA;
