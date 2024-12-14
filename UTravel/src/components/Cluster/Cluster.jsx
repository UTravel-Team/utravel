import React from "react";
import img1 from "../../assets/images/logo/logo.jpg";
import img2 from "../../assets/images/logo/logo.jpg";
import img3 from "../../assets/images/logo/logo.jpg";
import img4 from "../../assets/images/logo/logo.jpg";

const Cluster = () => {
    const images = [img1, img2, img3, img4]; // Rutas de las imágenes locales

    return (
        <div className="flex space-x-4 p-4 bg-gray-100 overflow-x-auto sm:flex-wrap sm:space-x-2">
            {images.map((src, index) => (
                <img
                    key={index}
                    src={src}
                    alt={`Imagen ${index + 1}`}
                    className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300 animate-fade-in w-32 h-32 object-cover" // Ajuste de tamaño
                />
            ))}
        </div>
    );
};

export default Cluster;
