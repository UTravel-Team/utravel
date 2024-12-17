import React from "react";
import Cluster from "../components/Cluster/Cluster";
import HomeMapButton from "../components/HomeMap/HomeMapButton";
import HomeComments from "../components/BestComments/HomeComments";
import AndaluciaWeather from "../components/Weather/AndaluciaWeather";
//import { useFetchWeather } from "../hooks/useFetchWeather";
import Jumbotron from "../components/InpageContent/Jumbotron"; // Ajusta la ruta según tu estructura
import homeImage from "../assets/images/homeImg/flowers.jpg"; // Importa la imagen que usarás en el Jumbotron

function HomePage() {

  return (
  
  <div className="p-6 bg-gray-50">
  <Jumbotron
        title="Bienvenidos a Andalucía"
        subtitle="Descubre la historia, cultura y paisajes inigualables de nuestra tierra."
        imagePath={homeImage} // Ruta de la imagen importada
      />
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
        <h2 className="text-xl font-semibold mb-2"> ¿Dónde está Andalucía? </h2>
        <p>Quizás te preguntes dónde está Andalucía. Es imprescindible que lo ubiques en el mapa. Por eso, te traemos el mapa de Andalucía por cortesía de la Api de Google Maps. Click en el botón para verlo. Así nos ahorramos en peticiones al servidor para que no se utilice la API cada vez que cargamos la home guiño guiño. </p>
        <HomeMapButton />
        <AndaluciaWeather/>
        
      </section>
      

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Comentarios</h2>
        <p>Descubre las opiniones más destacadas de nuestros visitantes sobre las maravillas de Andalucía. Desde sus monumentos históricos hasta su vibrante vida nocturna, aquí encontrarás comentarios que reflejan la experiencia única de explorar esta región. ¡Consulta lo que otros tienen que decir!</p>
        <HomeComments />

      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">FAQ</h2>
        <p>blablablablabalbalba</p>
      </section>
    </div>
  );
}

export default HomePage;
