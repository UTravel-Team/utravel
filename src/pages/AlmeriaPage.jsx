// imports básicos
import React from "react";
// imports de componentes de estructura de contenidos
import Jumbotron from "../components/InPageContent/Jumbotron";
import TwoColumnSection from "../components/InPageContent/TwoCols";
import CTA from "../components/InPageContent/CTA";
// import del componente para el titular de datos curiosos o noticias
import ProvincesNews from "../components/News/ProvincesNews";
// Mediateca
import almeriaimg from "../../src/assets/images/landings/almeria/almeria.jpg";
import aventuraimg from "../../src/assets/images/landings/almeria/aventuraimg.jpg";
import almeriaHollywood from "../../src/assets/images/landings/almeria/almeria-holliwood.jpg";
import { useFetchWeather } from "../hooks/useFetchWeather";
import ProvinceWeather from "../components/Weather/ProvinceWeather";
import Cluster from "../components/Cluster/Cluster";

// empieza la fiesta
function AlmeriaPage() {
  const lat = 36.8381; // Latitud de Almería
  const lon = -2.4597; // Longitud de Almería

  const { weatherData, loading, error } = useFetchWeather(lat, lon);

  const almeriaDescription = `Almería, una joya mediterránea, es conocida por su combinación única de paisajes. Desde el desierto de Tabernas, el único en Europa, hasta el litoral del Parque Natural de Cabo de Gata, 
  la provincia ofrece una amplia variedad de actividades para todos los gustos. Es el lugar ideal para los amantes del senderismo, los deportes acuáticos y la observación de estrellas. En Almería también se encuentran auténticos pueblos blancos que conservan su esencia tradicional, como Mojácar, un destino lleno de encanto. Su gastronomía es otro de sus grandes atractivos: el gazpacho andaluz, los espetos de sardinas y el pescado fresco destacan como delicias locales.`;

  return (
    <div className="space-y-12 px-6 py-8 mx-auto max-w-7xl bg-gray-100 text-gray-800">
      {/* Jumbotron */}
      <div>
        <Jumbotron
          title="Almería"
          subtitle="Playas vírgenes, historia milenaria y paisajes que desafían la imaginación."
          imagePath={almeriaimg}
        />
      </div>
      {/* Clima y descripción */}
      <ProvinceWeather
        provinceName="Almería"
        weatherData={weatherData}
        loading={loading}
        error={error}
        description={almeriaDescription}
      />

      <TwoColumnSection
        title="Historia Viva en Cada Rincón"
        description="Almería ha sido testigo de civilizaciones milenarias que dejaron su huella. Desde los restos prehistóricos de Los Millares y el Argar hasta la esplendorosa herencia árabe, reflejada en castillos, fortalezas y el majestuoso legado de la época musulmana."
        imagePath={almeriaimg}
        altText="Historia de Almería"
        reverse={false}
      />

      <TwoColumnSection
        title="El Escenario Perfecto del Cine"
        description="La singularidad de su paisaje indomable y su clima cálido han hecho de Almería el plató natural de grandes producciones cinematográficas. Hollywood encontró aquí su inspiración, rodando en sus desiertos y costas películas legendarias."
        imagePath={almeriaHollywood}
        altText="Cine en Almería"
        reverse={true}
      />
      <ProvincesNews provinceName="Almeria" />

      <TwoColumnSection
        title="Aventura, Naturaleza y Descanso"
        description="Descubre un territorio de contrastes: desde las playas desiertas del Parque Natural Cabo de Gata-Níjar hasta la nieve y los bosques mediterráneos de la Sierra María-Los Vélez. Almería es aventura para el explorador, paz para el viajero exigente y magia para quien busca lo auténtico."
        imagePath={aventuraimg}
        altText="Aventura en Almería"
        reverse={false}
      />

      

      <CTA
        quote="En Almería, cada amanecer te invita a un viaje donde el mar, el desierto y la historia escriben juntos una experiencia única."
        buttonText="Botón a patrocinado"
        buttonLink="#"
      />
      
      <h2 className="text-3xl font-extrabold mb-4">¿A dónde irás ahora?</h2>
      <Cluster />
    </div>
  );
}

export default AlmeriaPage;
