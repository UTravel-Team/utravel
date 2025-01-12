import React from "react";

const GalleryGrid = ({ photos, onPhotoClick }) => {
  return (
    <div className="grid grid-cols-3 gap-4 p-6">
      {photos.map((photo, index) => (
        <div key={index} className="rounded-lg shadow-lg overflow-hidden">
          <img
            src={photo.url}
            alt={photo.alt}
            className="w-full h-48 object-cover cursor-pointer"
            onClick={() => onPhotoClick(photo)}
          />
          <div className="p-4">
            <h2 className="text-lg font-bold">{photo.caption}</h2>
            <button
              onClick={() => onPhotoClick(photo)}
              className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
            >
              Ver info
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GalleryGrid;
