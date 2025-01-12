import React from "react";
import Jumbotron from "../components/InPageContent/Jumbotron";
import TwoColumnSection from "../components/InPageContent/TwoCols";
import CTA from "../components/InPageContent/CTA";
import ProvincesNews from "../components/News/ProvincesNews";
import granadaimg from "../assets/images/Landings/granada/granada.jpg";
import alhambraimg from "../assets/images/Landings/granada/alhambra.jpg";
import sierraNevadaimg from "../assets/images/Landings/granada/sierra_nevada.jpg";
import tapasimg from "../assets/images/Landings/granada/tapas.jpg";
import { useFetchWeather } from "../hooks/useFetchWeather";
import ProvinceWeather from "../components/Weather/ProvinceWeather";
import Cluster from "../components/Cluster/Cluster";

function GranadaPage() {
  const lat = 37.9882; // Latitud de Granada
  const lon = -3.9499; // Longitud de Granada

  const { weatherData, loading, error } = useFetchWeather(lat, lon);

  const GranadaDescription = `Granada, un tesoro del sur de España, es conocida por su extraordinaria fusión de historia, cultura y belleza natural. 
La ciudad alberga la majestuosa Alhambra, Patrimonio de la Humanidad, una joya arquitectónica que refleja el esplendor 
de la época nazarí. Desde los palacios moriscos hasta los jardines del Generalife, cada rincón de este monumento es una 
obra de arte.

El barrio del Albaicín, con sus calles empedradas y vistas panorámicas de la Alhambra, invita a perderse en su encanto 
histórico. Granada también es cuna del flamenco, con el Sacromonte como su epicentro, donde las zambras y cuevas 
flamencas ofrecen espectáculos inolvidables.

Para los amantes de la naturaleza, la provincia de Granada es un paraíso. La Sierra Nevada, hogar de las montañas más 
altas de la península ibérica, es ideal para esquiar en invierno y practicar senderismo en verano. Al sur, la Costa Tropical 
ofrece playas bañadas por el sol y un microclima único.`;

  return (
    <div className="space-y-12 px-6 py-8 mx-auto max-w-7xl bg-gray-100 text-gray-800">
      {/* Jumbotron */}
      <div>
        <Jumbotron
          title="Granada"
          subtitle="Historia, nieve y el embrujo de la Alhambra."
          imagePath={granadaimg}
        />
      </div>

      <ProvinceWeather
        provinceName="Granada"
        weatherData={weatherData}
        loading={loading}
        error={error}
        description={GranadaDescription}
      />

      <TwoColumnSection
        title="La Majestuosa Alhambra"
        description="Descubre la Alhambra, un monumento que narra siglos de historia. Este palacio nazarí, rodeado por el Albaicín y el Sacromonte, es un lugar que te transporta al esplendor de Al-Ándalus."
        imagePath={alhambraimg}
        altText="La Alhambra de Granada"
        reverse={false}
      />

      <TwoColumnSection
        title="Aventura en Sierra Nevada"
        description="Granada es sinónimo de naturaleza y deporte. Sierra Nevada, con sus impresionantes paisajes y pistas de esquí, es el lugar perfecto para los amantes de la aventura y la tranquilidad."
        imagePath={sierraNevadaimg}
        altText="Sierra Nevada"
        reverse={true}
      />

      <ProvincesNews provinceName="Granada" />

      <TwoColumnSection
        title="Tapas y Tradición"
        description="En Granada, la gastronomía es arte. Las famosas tapas granadinas, acompañadas de un buen vino o cerveza, son un reflejo de la hospitalidad y el sabor auténtico de esta tierra."
        imagePath={tapasimg}
        altText="Tapas en Granada"
        reverse={false}
      />

      <CTA
        quote="En Granada, cada rincón guarda un secreto, cada plato una historia, y cada paisaje una emoción."
        buttonText="Botón a patrocinado"
        buttonLink="#"
      />

      <h2 className="text-3xl font-extrabold mb-4">¿A dónde irás ahora?</h2>
      <Cluster />
    
    </div>
  );
}

export default GranadaPage;
