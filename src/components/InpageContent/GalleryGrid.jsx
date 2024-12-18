import React from "react";

const GalleryGrid = ({ photos, title }) => {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      {title && <h2 className="text-2xl font-bold mb-6 text-center">{title}</h2>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo, index) => (
          <div key={index} className="relative group">
            <img
              src={photo.url}
              alt={photo.alt || `Photo ${index + 1}`}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
            {photo.caption && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-sm">{photo.caption}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryGrid;