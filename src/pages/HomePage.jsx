import React from "react";
import Cluster from "../components/Cluster/Cluster";
import HomeMapButton from "../components/HomeMap/HomeMapButton";
import HomeComments from "../components/BestComments/HomeComments";
import AndaluciaWeather from "../components/Weather/AndaluciaWeather";
import Jumbotron from "../components/InPageContent/Jumbotron";
import HomeProvincesNews from "../components/News/HomeProvincesNews";
import FAQ from "../components/InPageContent/Faq";
import HomeGalleryFiles from "../components/InPageContent/GallerySections/HomeGalleryFiles";
import customImage from "../assets/images/homeImg/flowers.jpg";
import culturaIMG from "../assets/images/homeImg/cultura.jpg";
import naturalezaIMG from "../assets/images/homeimg/naturaleza.jpg";

function HomePage() {
  return (
    <div className="p-6 bg-gray-50 pb-8"> {/* Padding abajo añadido */}
      {/* Jumbotron con frase */}
      <Jumbotron
        title="Andalucía"
        subtitle="Descubre la historia, cultura y paisajes inigualables."
        imagePath={customImage}
        phrase={<HomeProvincesNews />}
      />

      {/* Sección principal */}
      <section className="space-y-12">
        {/* Introducción */}
        <div className="text-center">
          <p className="text-lg leading-relaxed">
            Andalucía es un paraíso lleno de{" "}
            <strong>historia, arte y naturaleza</strong> que te enamorará. Desde
            las playas doradas de la{" "}
            <span className="text-blue-500">Costa del Sol</span>{" "}
            hasta los majestuosos paisajes de{" "}
            <span className="text-blue-500">Sierra Nevada</span>, esta región combina{" "}
            <em>cultura milenaria</em>, tradiciones vibrantes y una gastronomía irresistible.
          </p>
        </div>

        {/* ¿Qué provincia visitarás? */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">🗺️ ¿Qué provincia visitarás? </h2>
          <p>
            ¡Descubre Andalucía, un paraíso lleno de historia, arte y naturaleza que te enamorará! Desde las playas doradas
            de la Costa del Sol hasta los majestuosos paisajes de Sierra Nevada, esta región es un destino único que
            combina cultura milenaria, tradiciones vibrantes y una gastronomía irresistible.
          </p>
          <Cluster />
        </section>

        {/* Cultura y Tradición */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Cultura y Tradición</h2>
            <p className="text-lg leading-relaxed">
              Desde la{" "}
              <span className="font-semibold">Alhambra de Granada</span> hasta la{" "}
              <span className="font-semibold">Mezquita de Córdoba</span>, Andalucía
              es un reflejo de su rico pasado multicultural. Vive la pasión del
              flamenco en Sevilla y disfruta de los patios floreados en Córdoba.
            </p>

          </div>
          <img
            src={culturaIMG}
            alt="Cultura y Tradición"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Échalo a suertes */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">🎲 Échalo a suertes</h2>
          <p>¡Atrévete a descubrir tu próxima aventura de forma inesperada! Andalucía tiene sorpresas que te esperan en cada rincón.</p>
        </section>

        {/* Naturaleza */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src={naturalezaIMG}
            alt="Naturaleza en Andalucía"
            className="w-full md:w-1/2 rounded-lg shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">Naturaleza en su Máximo Esplendor</h2>
            <p className="text-lg leading-relaxed">
              Desde el <strong>Parque Natural de Doñana</strong> hasta las playas del{" "}
              <span className="text-blue-500">Cabo de Gata</span>, Andalucía ofrece un
              abanico de paisajes únicos que invitan a la exploración, la
              tranquilidad y la aventura.
            </p>
          </div>
        </div>

        {/* ¿Dónde está Andalucía? */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2"> ¿Dónde está Andalucía? </h2>
          <p>
            Quizás te preguntes dónde está Andalucía. Es imprescindible que lo ubiques en el mapa. Por eso, te traemos el
            mapa de Andalucía por cortesía de la Api de Google Maps.
          </p>
          <HomeMapButton />
          <AndaluciaWeather />
        </section>

        {/* Gastronomía */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Una Gastronomía para los Sentidos</h2>
          <p className="text-lg leading-relaxed">
            Andalucía es el hogar del{" "}
            <span className="font-semibold">jamón ibérico</span>, el{" "}
            <span className="text-blue-500">gazpacho</span> y el{" "}
            <span className="text-blue-500">salmorejo</span>. Disfruta de sus
            sabores únicos mientras te sumerges en una experiencia culinaria sin igual.
          </p>
          <HomeGalleryFiles />
        </div>

        {/* Comentarios */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Comentarios</h2>
          <p>
            Descubre las opiniones más destacadas de nuestros visitantes sobre las maravillas de Andalucía. Desde sus
            monumentos históricos hasta su vibrante vida nocturna, aquí encontrarás comentarios que reflejan la experiencia
            única de explorar esta región. ¡Consulta lo que otros tienen que decir!
          </p>
          <HomeComments />
        </section>

        {/* FAQ */}
        <section>
          <FAQ />
        </section>

      </section>
    </div>
  );
}

export default HomePage;
