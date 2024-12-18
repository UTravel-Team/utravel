import React from "react";
import GalleryGrid from "../GalleryGrid";
import { useGallery } from "../../../hooks/useGallery";
import salmorejo from "../../../assets/images/homeImg/salmorejo.jpg";
import gazpacho from "../../../assets/images/homeImg/gazpacho.jpg";
import jamon from "../../../assets/images/homeImg/jamonserrano.jpg";
import espetos from "../../../assets/images/homeImg/espetos.jpg";
import tortillapatatas from "../../../assets/images/homeImg/tortilla-patatas.jpg";
import aove from "../../../assets/images/homeImg/aove.jpg";


const HomeGalleryFiles = () => {
  const initialPhotos = [
    {
      url: salmorejo,
      alt: "Salmorejo cordobés",
      caption: "Salmorejo cordobés",
    },
    {
      url: gazpacho,
      alt: "Gazpacho-andaluz",
      caption: "Gazpacho andaluz",
    },

    
    {
      url: jamon, 
      alt: "jamon-serrano",
      caption: "Jamón del bueno",
    },
    {
      url: espetos,
      alt: "Espetos",
      caption: "Espetos",
    },
    {
      url: tortillapatatas,
      alt: "Tortilla-patatas",
      caption: "Tortilla de Patatas",
    },
    {
      url: aove,
      alt: "Aceite-oliva-virgen-extra",
      caption: "AOVE",
    },

  ];

  const { photos } = useGallery(initialPhotos);

  return (
    <div>
      <GalleryGrid photos={photos} title="Galería de Andalucía" />
    </div>
  );
};

export default HomeGalleryFiles;
