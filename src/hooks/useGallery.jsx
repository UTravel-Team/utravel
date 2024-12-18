import { useState } from "react";

export const useGallery = (initialPhotos) => {
  const [photos, setPhotos] = useState(initialPhotos || []);

  const addPhoto = (photo) => setPhotos((prev) => [...prev, photo]);
  const removePhoto = (index) =>
    setPhotos((prev) => prev.filter((_, i) => i !== index));

  return { photos, addPhoto, removePhoto };
};
