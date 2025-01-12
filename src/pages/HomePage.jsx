import React, { useState } from "react";
import {Link} from 'react-router-dom';
import Cluster from "../components/Cluster/Cluster";
import HomeMapButton from "../components/HomeMap/HomeMapButton";
import Jumbotron from "../components/InPageContent/Jumbotron";
import HomeProvincesNews from "../components/News/HomeProvincesNews";
import FAQ from "../components/InPageContent/Faq";
import HomeGalleryFiles from "../components/InpageContent/GallerySections/HomeGalleryFiles";
import customImage from "../assets/images/homeImg/flowers.jpg";
import culturaIMG from "../assets/images/homeImg/cultura.jpg";
import naturalezaIMG from "../assets/images/homeimg/naturaleza.jpg";
import Wheel from "../components/Roulette/Wheel";

function HomePage() {
  const [isSpinning, setIsSpinning] = useState(false);  // Estado para controlar el giro
  const [rouletteValue, setRouletteValue] = useState(null);  // Estado para almacenar el valor seleccionado
  const andalusiaProvinces = [
    "Almería",
    "Cádiz",
    "Córdoba",
    "Granada",
    "Huelva",
    "Jaén",
    "Málaga",
    "Sevilla",
  ];

  // Data para pasar a la ruleta
  const data = andalusiaProvinces.map((province, index) => ({
    id: index,
    option: province,
    optionSize: 1,
  }));

  const handleSpin = () => {
    const randomValue = Math.floor(Math.random() * data.length);
    setRouletteValue(randomValue);  // Establecer el valor seleccionado
    setIsSpinning(true);  // Iniciar la animación
  };

  const handleFinish = () => {
    setIsSpinning(false);  // Detener la animación
    alert(`¡La provincia seleccionada es: ${data[rouletteValue].option}!`);
  };

  return (
    <div className="p-6 bg-gray-50 pb-8">
      <Jumbotron
        title="Andalucía"
        subtitle="Descubre la historia, cultura y paisajes inigualables."
        imagePath={customImage}
        phrase={<HomeProvincesNews />}
      />
      <section className="space-y-12">
        {/* Introducción */}
        <div className="text-center">
          <p className="text-lg leading-relaxed">
            Andalucía es un paraíso lleno de{" "} <strong>historia, arte y naturaleza</strong> que te enamorará. Desde las playas doradas de la{" "}<span className="font-semibold">Costa del Sol</span> hasta los majestuosos paisajes de{" "} <span className="font-semibold">Sierra Nevada</span>, esta región combina{" "} cultura milenaria, tradiciones vibrantes y una gastronomía irresistible.</p>
        </div>

        {/* ¿Qué provincia visitarás? */}
        <section className="mb-6">
        <h2 className="text-3xl font-extrabold mb-4">¿Qué provincia disfrutarás? </h2>
          <p>¡Descubre Andalucía, un paraíso lleno de historia, arte y naturaleza que te enamorará! Desde las playas doradas de la Costa del Sol hasta los majestuosos paisajes de Sierra Nevada, esta región es un destino único que combina cultura milenaria, tradiciones vibrantes y una gastronomía irresistible.</p>
          <Cluster />
        </section>

        {/* Cultura y Tradición */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
          <h2 className="text-3xl font-extrabold mb-4">Cultura y Tradición</h2>
            <p className="text-lg leading-relaxed"> Desde la{" "} <span className="font-semibold">Alhambra de Granada</span> hasta la{" "}<span className="font-semibold">Mezquita de Córdoba</span>, Andalucía es un reflejo de su rico pasado multicultural. Vive la pasión del flamenco en Sevilla y disfruta de los patios floreados en Córdoba.
            </p>
          </div>
          <img
            src={culturaIMG}
            alt="Cultura y Tradición"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* ¿Qué provincia visitarás? */}
        <section className="mb-6">
          <h2 className="text-3xl font-extrabold mb-4"> 🎲 Por si no te decides... </h2>
          <p>¡Atrévete a descubrir tu próxima aventura de forma inesperada! Andalucía tiene sorpresas que te esperan en cada rincón.</p>

          <div>
            {/* ruleta */}
            <Wheel
              mustStartSpinning={isSpinning}
              rouletteValue={rouletteValue}
              data={data}
              onStopSpinning={handleFinish}
              backgroundColors={["#f8c471", "#85c1e9"]}
              textColors={["#ffffff"]}
            />
            
          </div>
        </section>

        {/* Naturaleza */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src={naturalezaIMG}
            alt="Naturaleza en Andalucía"
            className="w-full md:w-1/2 rounded-lg shadow-lg"
          />
          <div>
          <h2 className="text-3xl font-extrabold mb-4">Naturaleza en su Máximo Esplendor</h2>
            <p className="text-lg leading-relaxed">
              Desde el <strong>Parque Natural de Doñana</strong> hasta las playas del{" "}
              <span className="font-semibold">Cabo de Gata</span>, Andalucía ofrece un
              abanico de paisajes únicos que invitan a la exploración, la
              tranquilidad y la aventura.
            </p>
          </div>
        </div>

        {/* ¿Dónde está Andalucía? */}
        <section className="mb-6">
        <h2 className="text-3xl font-extrabold mb-4">¿Dónde está Andalucía? </h2>
          <p> Quizás te preguntes dónde está Andalucía. Es imprescindible que lo ubiques en el mapa. Por eso, te traemos el mapa de Andalucía por cortesía de la Api de Google Maps. </p>
          <HomeMapButton />
        </section>

        {/* Gastronomía */}
        <div className="text-center">
        <h2 className="text-3xl font-extrabold mb-4">Gastronomía Andaluza</h2>
          <p className="text-lg leading-relaxed"> Andalucía es el hogar del{" "} <span className="font-semibold">jamón ibérico</span>, el{" "} <span className="font-semibold">gazpacho</span> y el{" "} <span className="font-semibold">salmorejo</span>. Disfruta de sus sabores únicos mientras te sumerges en una experiencia culinaria sin igual.</p>
          <HomeGalleryFiles />
        </div>

        {/* FAQ */}
        <section>
          <FAQ />
        </section>
        </section>
    </div>
  );
}

export default HomePage;
