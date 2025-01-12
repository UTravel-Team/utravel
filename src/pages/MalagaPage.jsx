import React from "react";
import Jumbotron from "../components/InPageContent/Jumbotron";
import TwoColumnSection from "../components/InPageContent/TwoCols";
import CTA from "../components/InPageContent/CTA";
import ProvincesNews from "../components/News/ProvincesNews";
import malagaimg from "../assets/images/Landings/malaga/malaga.jpg";
import alcazabaimg from "../assets/images/Landings/malaga/alcazaba.jpg";
import costaDelSolimg from "../assets/images/Landings/malaga/costadelsol.jpg"
import picassoimg from "../assets/images/Landings/malaga/picasso.jpg";
import { useFetchWeather } from "../hooks/useFetchWeather";
import ProvinceWeather from "../components/Weather/ProvinceWeather";
import Cluster from "../components/Cluster/Cluster";

function MalagaPage() {
  const lat = 36.7213; // Latitud de Málaga
  const lon = -4.4213; // Longitud de Málaga

  const { weatherData, loading, error } = useFetchWeather(lat, lon);
  
  const MalagaDescription = `Málaga, conocida como la "Costa del Sol", es uno de los destinos más populares de Andalucía. Con más de 300 días de sol al año, sus playas y su vibrante vida cultural la convierten en un  lugar irresistible para los visitantes. Desde las playas de Marbella y Nerja hasta las calles históricas de su capital, Málaga ofrece una mezcla única de relax, historia y modernidad.
  En el corazón de Málaga, encontramos la Alcazaba, una fortaleza árabe que ofrece vistas espectaculares de la ciudad, y el Teatro Romano, que conecta con su rica herencia cultural. La Catedral de Málaga, conocida como "La Manquita" por su torre inacabada, es otro de los iconos que no puedes perderte.
  Málaga es también la cuna de Pablo Picasso, y su legado artístico se puede explorar en el Museo Picasso y en la Casa Natal del artista. El arte contemporáneo tiene su espacio en el Centro Pompidou y el Museo Carmen Thyssen.`;
  
  return (
    <div className="space-y-12 px-6 py-8 mx-auto max-w-7xl bg-gray-100 text-gray-800">
      {/* Jumbotron */}
      <div>

        <Jumbotron
          title="Málaga"
          subtitle="Sol, cultura y un legado que brilla junto al Mediterráneo."
          imagePath={malagaimg}
        />

      </div>
      
      <ProvinceWeather
        provinceName="Malaga"
        weatherData={weatherData}
        loading={loading}
        error={error}
        description={MalagaDescription}
      />

      <TwoColumnSection
        title="La Alcazaba y el Teatro Romano"
        description="Este conjunto monumental es testigo de la rica historia de Málaga. La Alcazaba, una fortaleza de origen árabe, y el Teatro Romano, al pie de esta, son paradas obligatorias para conocer el alma de la ciudad."
        imagePath={alcazabaimg}
        altText="La Alcazaba de Málaga"
        reverse={false}
      />

      <TwoColumnSection
        title="La Costa del Sol"
        description="Kilómetros de playas bañadas por el sol hacen de la Costa del Sol un destino mundialmente reconocido. Relájate en sus arenales o disfruta de deportes acuáticos en este paraíso mediterráneo."
        imagePath={costaDelSolimg}
        altText="Costa del Sol"
        reverse={true}
      />
      <ProvincesNews provinceName="Malaga" />

      <TwoColumnSection
        title="Cuna de Picasso"
        description="Málaga es el lugar de nacimiento de Pablo Picasso. Su legado artístico vive en el Museo Picasso y en cada rincón de la ciudad, reflejando su influencia y creatividad."
        imagePath={picassoimg}
        altText="Museo Picasso en Málaga"
        reverse={false}
      />

      <CTA
        quote="En Málaga, el arte, la playa y la gastronomía se encuentran para ofrecerte una experiencia inolvidable."
        buttonText="Botón a patrocinado"
        buttonLink="#"
      />

      <h2 className="text-3xl font-extrabold mb-4">¿A dónde irás ahora?</h2>
      <Cluster />
    
    </div>
  );
}

export default MalagaPage;
