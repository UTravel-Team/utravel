import React from "react";

const GalleryGrid = ({ photos, title }) => {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      {title && <h2 className="text-2xl font-bold mb-6 text-center">{title}</h2>}
      <div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-0"
        style={{
          gridAutoRows: "1fr", // Asegura filas uniformes
        }}
      >
        {photos.map((photo, index) => (
          <div key={index} className="relative overflow-hidden">
            <img
              src={photo.url}
              alt={photo.alt || `Photo ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {photo.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs p-1">
                {photo.caption}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryGrid;
