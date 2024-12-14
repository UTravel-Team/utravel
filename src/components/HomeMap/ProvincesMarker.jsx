import React from "react";
import { Marker } from "@react-google-maps/api";

const provinces = [
  { name: "Sevilla", lat: 37.3886, lng: -5.9823 },
  { name: "Cádiz", lat: 36.5271, lng: -6.2886 },
  { name: "Málaga", lat: 36.7213, lng: -4.4214 },
  { name: "Córdoba", lat: 37.8853, lng: -4.7761 },
  { name: "Granada", lat: 37.1773, lng: -3.5986 },
  { name: "Almería", lat: 36.8340, lng: -2.4637 },
  { name: "Jaén", lat: 37.7796, lng: -3.7849 },
  { name: "Huelva", lat: 37.2614, lng: -6.9447 },
];

const ProvincesMarker = () => {
  return (
    <>
      {provinces.map((province, index) => (
        <Marker
          key={index}
          position={{ lat: province.lat, lng: province.lng }}
          label={province.name}
        />
      ))}
    </>
  );
};

export default ProvincesMarker;
