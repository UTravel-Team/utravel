import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const HomeMap = () => {
  // Configuración del mapa
  const mapContainerStyle = {
    width: '80%',
    height: '500px',
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center',
  };

  const center = {
    lat: 37.5443, // Centro aproximado de Andalucía
    lng: -4.7278,
  };

  const mapOptions = {
    mapId: '8f86bad6ecdf6390', // Tu ID de mapa personalizado
  };

  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={7}
        options={mapOptions}
      >
        {/* Aquí puedes agregar marcadores, polígonos u otros elementos del mapa */}
      </GoogleMap>
    </LoadScript>
  );
};

export default HomeMap;
