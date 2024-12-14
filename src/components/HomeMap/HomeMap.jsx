/*import React from "react";
import GoogleMapReact from "google-map-react";

// Componente Marker para los marcadores
const Marker = ({ text }) => (
  <div className="bg-red-500 text-white px-2 py-1 rounded-full">{text}</div>
);

const GoogleHomeMap = () => {
  const defaultProps = {
    center: {
      lat: 37.5443, // Centro aproximado de Andalucía
      lng: -4.7278,
    },
    zoom: 7, // Nivel de zoom adecuado para Andalucía
  };
  
  return (
    <div className="w-full h-[500px] border border-gray-200 rounded-lg shadow-md">
  <GoogleMapReact
        bootstrapURLKeys={{ key: import.meta.env.AIzaSyCLgagHK0UX4g3n3bq2HpGe3c4fmLA4zW8 }} 
        //Reemplaza con tu clave de API
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >

        <Marker lat={37.3886} lng={-5.9823} text="Sevilla" />
        <Marker lat={36.5271} lng={-6.2886} text="Cádiz" />
        <Marker lat={36.7213} lng={-4.4214} text="Málaga" />
        <Marker lat={37.8853} lng={-4.7761} text="Córdoba" />
        <Marker lat={37.1773} lng={-3.5986} text="Granada" />
        <Marker lat={36.8340} lng={-2.4637} text="Almería" />
        <Marker lat={37.7796} lng={-3.7849} text="Jaén" />
        <Marker lat={37.2614} lng={-6.9447} text="Huelva" />
      </GoogleMapReact>
    </div>
  );
};
*/