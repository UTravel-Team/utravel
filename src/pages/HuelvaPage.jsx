import React from "react";
import Jumbotron from "../components/InPageContent/Jumbotron";
import TwoColumnSection from "../components/InPageContent/TwoCols";
import CTA from "../components/InPageContent/CTA";
import ProvincesNews from "../components/News/ProvincesNews";
import huelvaimg from "../../src/assets/images/landings/huelva/huelva.jpg";
import doñanaimg from "../../src/assets/images/landings/huelva/donana.jpeg";
import colombinosimg from "../../src/assets/images/landings/huelva/moguer.jpg";
import jamonimg from "../../src/assets/images/landings/huelva/jamon.jpg";
import { useFetchWeather } from "../hooks/useFetchWeather";
import ProvinceWeather from "../components/Weather/ProvinceWeather";
import Cluster from "../components/Cluster/Cluster";

function HuelvaPage() {
  const lat = 37.2610; // Latitud de Huelva
  const lon = -6.9497; // Longitud de Huelva

  const { weatherData, loading, error } = useFetchWeather(lat, lon);

  const HuelvaDescription = `Huelva, la tierra del descubrimiento, combina naturaleza, historia y tradición en un entorno único. 
Es conocida por ser el punto de partida de Cristóbal Colón hacia el Nuevo Mundo, un hecho que se 
conmemora en lugares emblemáticos como el Monasterio de La Rábida y los muelles de las Carabelas.

La provincia destaca por su riqueza natural. El Parque Nacional de Doñana, Patrimonio de la Humanidad, 
es un paraíso para los amantes de la biodiversidad, con marismas, dunas y una fauna única, que incluye 
al icónico lince ibérico. Las playas vírgenes de la Costa de la Luz, con sus extensos arenales y aguas 
cristalinas, son perfectas para quienes buscan tranquilidad.

En el interior, Huelva sorprende con la Sierra de Aracena y Picos de Aroche, una región de paisajes verdes, 
pueblos blancos y una gastronomía excepcional. Es aquí donde se produce el famoso jamón ibérico de Jabugo, 
un manjar reconocido internacionalmente.

La tradición marinera está presente en cada rincón de Huelva. Su gastronomía es un reflejo de esta herencia, 
destacando las gambas blancas, el choco frito y los pescados frescos. Además, sus vinos del Condado de Huelva 
complementan una experiencia culinaria inolvidable.`;

  return (
    <div className="space-y-12 px-6 py-8 mx-auto max-w-7xl bg-gray-100 text-gray-800">
      {/* Jumbotron */}
      <div>
        <Jumbotron
          title="Huelva"
          subtitle="Naturaleza, historia y los sabores únicos del Atlántico."
          imagePath={huelvaimg}
        />
      </div>
      <ProvinceWeather
        provinceName="Huelva"
        weatherData={weatherData}
        loading={loading}
        error={error}
        description={HuelvaDescription}
      />

      <TwoColumnSection
        title="El Parque Nacional de Doñana"
        description="Doñana es uno de los humedales más importantes de Europa. Este paraíso natural alberga una biodiversidad única, siendo hogar de especies emblemáticas como el lince ibérico y el águila imperial."
        imagePath={doñanaimg}
        altText="Parque Nacional de Doñana"
        reverse={false}
      />

      <TwoColumnSection
        title="El Legado Colombino"
        description="Huelva fue testigo del inicio de la gran aventura que cambió el mundo. Lugares como La Rábida y Palos de la Frontera son cuna de la historia de los viajes de Cristóbal Colón."
        imagePath={colombinosimg}
        altText="Legado Colombino"
        reverse={true}
      />
      
      <ProvincesNews provinceName="Huelva" />

      <TwoColumnSection
        title="Sabores de la Sierra"
        description="El jamón ibérico de Huelva, con Denominación de Origen Jabugo, es un manjar reconocido mundialmente. Cada bocado refleja la tradición y la calidad de esta tierra única."
        imagePath={jamonimg}
        altText="Jamón Ibérico de Huelva"
        reverse={false}
      />

      
      <CTA
        quote="En Huelva, la historia, la naturaleza y la gastronomía se unen para ofrecerte una experiencia inolvidable."
        buttonText="Botón a patrocinado"
        buttonLink="#"
      />

      <h2 className="text-3xl font-extrabold mb-4">¿A dónde irás ahora?</h2>
      <Cluster />
    </div>
  );
}

export default HuelvaPage;
