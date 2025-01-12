import React from "react";
import Jumbotron from "../components/InPageContent/Jumbotron";
import TwoColumnSection from "../components/InPageContent/TwoCols";
import CTA from "../components/InPageContent/CTA";
import ProvincesNews from "../components/News/ProvincesNews";
import cadizimg from "../assets/images/Landings/cadiz/cadiz.jpg";
import carnavalimg from "../assets/images/Landings/cadiz/carnaval.jpg";
import playasimg from "../assets/images/Landings/cadiz/playas.jpg";
import gastronomiaimg from "../assets/images/Landings/cadiz/gastronomia.jpg";
import { useFetchWeather } from "../hooks/useFetchWeather";
import ProvinceWeather from "../components/Weather/ProvinceWeather";
import Cluster from "../components/Cluster/Cluster";


// Empieza la fiesta
function CadizPage() {
  const lat = 36.5313; // Latitud de Cádiz
  const lon = -6.2998; // Longitud de Cádiz

  const { weatherData, loading, error } = useFetchWeather(lat, lon);

  const cadizDescription = `
    Cádiz, conocida como "La Tacita de Plata", es una joya del sur de España. 
    Desde las playas doradas de Zahara de los Atunes hasta las aguas cristalinas de la Costa de la Luz, 
    la provincia es un paraíso para los amantes del sol y el mar. 
  
    En Cádiz también encontrarás pueblos blancos llenos de encanto, como Vejer de la Frontera, 
    con calles empedradas y vistas impresionantes. Su gastronomía es mundialmente famosa: 
    las tortillitas de camarones, el pescaíto frito y el atún rojo de almadraba son imprescindibles para los amantes del buen comer.`;

  return (
    <div className="space-y-12 px-6 py-8 mx-auto max-w-7xl bg-gray-100 text-gray-800">
      {/* Jumbotron */}
      <div>
        <Jumbotron
          title="Cádiz"
          subtitle="Luz, sal y tradición en la tacita de plata."
          imagePath={cadizimg}
          altText="Cádiz"
        />
      </div>

      <ProvinceWeather
        provinceName="Cadiz"
        weatherData={weatherData}
        loading={loading}
        error={error}
        description={cadizDescription}
      />
      
      <TwoColumnSection
        title="Historia y Cultura en Cada Esquina"
        description="Desde la antigua Gadir fenicia hasta el esplendor de su catedral, Cádiz es un testimonio vivo de culturas que han dejado su huella. Sus museos, castillos y barrios emblemáticos como La Viña o El Pópulo te sumergen en siglos de historia."
        imagePath={cadizimg}
        altText="Historia de Cádiz"
        reverse={false}
      />

      <TwoColumnSection
        title="El Carnaval Más Famoso del Mundo"
        description="Conocido por su alegría y su ingenio, el Carnaval de Cádiz es un espectáculo único. Sus chirigotas, comparsas y coros te contagiarán de su espíritu festivo, haciendo de esta experiencia algo inolvidable."
        imagePath={carnavalimg}
        altText="Carnaval de Cádiz"
        reverse={true}
      />
      
      <ProvincesNews provinceName="Cadiz" />

      <TwoColumnSection
        title="Playas de Ensueño"
        description="Desde las extensas dunas de Bolonia hasta la animada Playa de La Caleta, Cádiz ofrece un paraíso para los amantes del mar. Déjate conquistar por sus aguas cristalinas y sus atardeceres inolvidables."
        imagePath={playasimg}
        altText="Playas de Cádiz"
        reverse={false}
      />

      <TwoColumnSection
        title="La Cuna de la Gastronomía Andaluza"
        description="El pescaito frito, las tortillitas de camarones y el atún rojo de almadraba son solo algunas de las joyas que ofrece la gastronomía de Cádiz. Cada bocado es un homenaje a la tradición y al sabor."
        imagePath={gastronomiaimg}
        altText="Gastronomía de Cádiz"
        reverse={true}
      />

     
      <CTA
        quote="En Cádiz, la brisa del mar, la calidez de su gente y su riqueza cultural te invitan a vivir una experiencia única."
        buttonText="Botón a patrocinado"
        buttonLink="#"
      />

      <h2 className="text-3xl font-extrabold mb-4">¿A dónde irás ahora?</h2>
      <Cluster />
    </div>
  );
}

export default CadizPage;
