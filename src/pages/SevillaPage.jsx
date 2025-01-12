import React from "react";
import Jumbotron from "../components/InPageContent/Jumbotron";
import TwoColumnSection from "../components/InPageContent/TwoCols";
import CTA from "../components/InPageContent/CTA";
import ProvincesNews from "../components/News/ProvincesNews";
import sevillaimg from "../assets/images/Landings/sevilla/sevilla.jpg";
import giraldaimg from "../assets/images/Landings/sevilla/giralda.jpg";
import flamencoimg from "../assets/images/Landings/sevilla/flamenco.jpg";
import feriaimg from "../assets/images/Landings/sevilla/feria.jpg";
import { useFetchWeather } from "../hooks/useFetchWeather";
import ProvinceWeather from "../components/Weather/ProvinceWeather";


function SevillaPage() {
  const lat = 37.3886; // Latitud de Sevilla
  const lon = -5.9823; // Longitud de Sevilla

  const { weatherData, loading, error } = useFetchWeather(lat, lon);

  const SevillaDescription = `La Plaza de España, con su arquitectura renacentista y decoraciones cerámicas, es uno de los lugares 
más fotografiados de la ciudad. A su alrededor, el Parque de María Luisa invita a disfrutar de la 
naturaleza en un ambiente tranquilo y romántico.

Sevilla es también el alma del flamenco, con numerosos tablaos y espectáculos en cada rincón. El barrio 
de Triana, cuna de este arte, ofrece una experiencia auténtica para quienes buscan conocer la cultura 
sevillana desde sus raíces.

La Semana Santa y la Feria de Abril son celebraciones únicas que llenan las calles de vida, tradición y 
color. Durante estos eventos, Sevilla muestra su espíritu más festivo y acogedor.

La gastronomía sevillana no se queda atrás. Las tapas son protagonistas en cada bar y restaurante. 
Prueba platos icónicos como el gazpacho, el "pescaíto frito" o las espinacas con garbanzos mientras 
disfrutas de un buen vino de Jerez o una refrescante cerveza.

Con un clima cálido, una arquitectura que enamora y un ambiente lleno de alegría, Sevilla es mucho más 
que una ciudad; es una experiencia para los sentidos.`;

  return (
    <div className="space-y-12 px-6 py-8 mx-auto max-w-7xl bg-gray-100 text-gray-800">
      {/* Jumbotron */}
      <div>
        <Jumbotron
          title="Sevilla"
          subtitle="Arte, historia y pasión a orillas del Guadalquivir."
          imagePath={sevillaimg}
        />
      </div>

      <ProvinceWeather
        provinceName="Sevilla"
        weatherData={weatherData}
        loading={loading}
        error={error}
        description={SevillaDescription}
      />

      <TwoColumnSection
        title="La Historia de Sevilla"
        description="Descubre la majestuosa Catedral y la Giralda, testigos del esplendor de una ciudad que ha sido crisol de culturas. Su Alcázar, declarado Patrimonio de la Humanidad, es una joya que no puedes perderte."
        imagePath={giraldaimg}
        altText="Historia de Sevilla"
        reverse={false}
      />

      <TwoColumnSection
        title="El Arte del Flamenco"
        description="Sevilla es la cuna del flamenco, un arte que expresa la esencia del alma andaluza. Disfruta de espectáculos inolvidables en los tablaos más emblemáticos de la ciudad."
        imagePath={flamencoimg}
        altText="Flamenco en Sevilla"
        reverse={true}
      />
      <ProvincesNews provinceName="Sevilla" />

      <TwoColumnSection
        title="La Feria de Abril"
        description="La Feria de Abril de Sevilla es una explosión de color, música y tradición. Pasea por las casetas, disfruta de la música y déjate llevar por el ambiente único de esta celebración."
        imagePath={feriaimg}
        altText="Feria de Abril en Sevilla"
        reverse={false}
      />

      

      <CTA
        quote="En Sevilla, cada rincón es un poema escrito con historia, arte y pasión."
        buttonText="Botón a patrocinado"
        buttonLink="#"
      />
    </div>
  );
}

export default SevillaPage;
