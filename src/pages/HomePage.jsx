import React from "react"; // Cambia "react" por "React"
import Cluster from "../components/Cluster/Cluster"; // Asegúrate de que la ruta es correcta
import HomeMapButton from "../components/HomeMap/HomeMapButton"; // Importa el botón


function HomePage() {
  return (
 
<div className="p-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">Home</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🗺️ ¿Qué provincia visitarás? </h2>
        <p>¡Descubre Andalucía, un paraíso lleno de historia, arte y naturaleza que te enamorará! Desde las playas doradas de la Costa del Sol hasta los majestuosos paisajes de Sierra Nevada, esta región es un destino único que combina cultura milenaria, tradiciones vibrantes y una gastronomía irresistible. Déjate cautivar por la pasión del flamenco, los imponentes monumentos como la Alhambra y la Mezquita de Córdoba, y el calor de su gente. Andalucía te espera con los brazos abiertos para que vivas experiencias inolvidables y te sumerjas en la magia del sur de España. ¿A qué esperas para descubrirla?</p>
        <Cluster />
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🎲 Échalo a suertes</h2>
        <p>blablablablabalbalba</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2"> Andalucía </h2>
        <p>blablablablabalbalba</p>
        <HomeMapButton></HomeMapButton>
        
       
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Comentario</h2>
        <p>blablablablabalbalba</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">FAQ</h2>
        <p>blablablablabalbalba</p>
      </section>
    </div>
  );
}

export default HomePage;
