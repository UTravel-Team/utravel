import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cluster from "../components/Cluster/Cluster";
import Jumbotron from "../components/InPageContent/Jumbotron";
import HomeProvincesNews from "../components/News/HomeProvincesNews";
import FAQ from "../components/InPageContent/Faq";
import HomeGalleryFiles from "../components/InpageContent/GallerySections/HomeGalleryFiles";
import customImage from "../assets/images/homeImg/flowers.jpg";
import culturaIMG from "../assets/images/homeImg/cultura.jpg";
import naturalezaIMG from "../assets/images/homeimg/naturaleza.jpg";
import Wheel from "../components/Roulette/Wheel";
import HomeMap from "../components/HomeMap/HomeMap";

function HomePage() {
  const [isSpinning, setIsSpinning] = useState(false); // Estado para controlar el giro
  const [rouletteValue, setRouletteValue] = useState(null); // Estado para almacenar el valor seleccionado
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
    setRouletteValue(randomValue); // Establecer el valor seleccionado
    setIsSpinning(true); // Iniciar la animación
  };

  const handleFinish = () => {
    setIsSpinning(false); // Detener la animación
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


      {/* ¿Qué provincia visitarás? */}
      <section className="mb-6">
        <h2 className="text-4xl font-extrabold mb-8 mt-16 ag-text text-center ">
          ¿Qué provincia disfrutarás?{" "}
        </h2>
        <p className="text-xl mb-4 ag-text text-center">
          ¡Descubre Andalucía, un paraíso lleno de historia, arte y naturaleza
          que te enamorará! Desde las playas doradas de la Costa del Sol hasta
          los majestuosos paisajes de Sierra Nevada, esta región es un destino
          único que combina cultura milenaria, tradiciones vibrantes y una
          gastronomía irresistible.
        </p>
        <Cluster />
      </section>
      <div className="p-10 mx-auto max-w-7xl">
  <h2 className="text-3xl font-extrabold mb-4">Cultura y Tradición</h2>
  <div className="relative">
    <img
      src={culturaIMG}
      alt="Cultura y Tradición"
      className="w-1/3 float-right ml-4 mb-4 rounded-lg shadow-lg"
    />
    <p className="text-lg leading-relaxed">
      Desde la <span className="font-semibold">Alhambra de Granada</span> hasta la{" "}
      <span className="font-semibold">Mezquita de Córdoba</span>, Andalucía es un
      reflejo de su rico pasado multicultural. Vive la pasión del flamenco en
      Sevilla y disfruta de los patios floreados en Córdoba.
    </p>
    <p className="text-lg leading-relaxed">
      Cada rincón de Andalucía cuenta una historia única, tejida con influencias
      romanas, árabes y cristianas que han dejado su huella en la arquitectura, el
      arte y las tradiciones. En cada feria y romería se vive la esencia del
      folclore andaluz, con coloridos trajes, música vibrante y un ambiente que
      une generaciones.
    </p>
    <p className="text-lg leading-relaxed">
      Descubre el encanto de las procesiones de Semana Santa, un espectáculo
      religioso y cultural que conmueve tanto a locales como a visitantes. No
      solo se trata de preservar el pasado, sino también de celebrar un estilo de
      vida lleno de alegría, comunidad y creatividad que hace de Andalucía un
      lugar inolvidable.
    </p>
  </div>
</div>


      {/* ¿Qué provincia visitarás? */}
      <section className="mb-6">
      <div className="p-10">
        <h2 className="text-3xl font-extrabold ag-text text-center">
          {" "}
          🎲 Por si no te decides...{" "}
        </h2>
        <p className="text-xl mb-4 ag-text text-center">
          ¡Atrévete a descubrir tu próxima aventura de forma inesperada!
          Andalucía tiene sorpresas que te esperan en cada rincón.
        </p>
</div>
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

      <div className="p-10 mx-auto max-w-7xl gap-4">
  <h2 className="text-3xl font-extrabold mb-4 ag-text text-center">Naturaleza en su Máximo Esplendor</h2>
  <div className="relative">
    <img
      src={naturalezaIMG}
      alt="Naturaleza en Andalucía"
      className="w-1/3 float-left mr-4 mb-4 rounded-lg" 
    />
    <p className="text-lg leading-relaxed ">
      Desde el <strong>Parque Natural de Doñana</strong> hasta las playas
      del <span className="font-semibold">Cabo de Gata</span>, Andalucía
      ofrece un abanico de paisajes únicos que invitan a la exploración,
      la tranquilidad y la aventura.
    </p>
    <p className="text-lg leading-relaxed">
      Con más de veinte parques naturales, montañas imponentes y un
      litoral inigualable, esta región es un refugio para los amantes de
      la naturaleza. Sumérgete en la biodiversidad de{" "}
      <span className="font-semibold">Sierra de Grazalema</span>, un
      paraíso para los senderistas, o contempla el atardecer sobre las
      dunas del
      <strong> Parque Natural del Estrecho</strong>. Andalucía también es
      el hogar de especies únicas como el lince ibérico, que habita en los
      bosques y marismas. Ya sea recorriendo acantilados, navegando por
      ríos o descansando en playas de aguas cristalinas, la conexión con
      la naturaleza aquí es simplemente mágica e inolvidable.
    </p>
  </div>
</div>


      {/* ¿Dónde está Andalucía? */}
      <section className="mb-6">
        <h2 className="text-3xl font-extrabold mb-4 text-center ag-text ">
          ¿Dónde está Andalucía?{" "}
        </h2>
        <p className="text-xl mb-4 ag-text text-center">
          {" "}
          Quizás te preguntes dónde está Andalucía. Es imprescindible que lo
          ubiques en el mapa. Por eso, te traemos el mapa de Andalucía por
          cortesía de la Api de Google Maps.{" "}
        </p>
        <div className="flex items-center justify-center pt-4">
          <HomeMap />
        </div>
      </section>

      {/* Gastronomía */}
      <div className="text-center bg-gray-100 p-10 p">
        <h2 className="text-3xl font-extrabold mb-4 mt-2">Gastronomía Andaluza</h2>
        <p className="text-lg leading-relaxed">
          {" "}
          Andalucía es el hogar del{" "}
          <span className="font-semibold">jamón ibérico</span>, el{" "}
          <span className="font-semibold">gazpacho</span> y el{" "}
          <span className="font-semibold">salmorejo</span>. Disfruta de sus
          sabores únicos mientras te sumerges en una experiencia culinaria sin
          igual.
        </p>
        <HomeGalleryFiles />
      </div>


      {/* FAQ */}
      <section>
        <FAQ />
      </section>
    </div>
  );
}

export default HomePage;
