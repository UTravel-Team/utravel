import React from "react";
import Jumbotron from "../components/InPageContent/Jumbotron";
import TwoColumnSection from "../components/InPageContent/TwoCols";
import CTA from "../components/InPageContent/CTA";
import ProvincesNews from "../components/News/ProvincesNews";
import jaenimg from "../../src/assets/images/landings/jaen/jaen.jpg";
import castilloimg from "../../src/assets/images/landings/jaen/castillo.jpg";
import olivaresimg from "../../src/assets/images/landings/jaen/olivares.jpg";
import ubedaBaezaimg from "../../src/assets/images/landings/jaen/ubeda_baeza.jpg";
import { useFetchWeather } from "../hooks/useFetchWeather";
import ProvinceWeather from "../components/Weather/ProvinceWeather";
import Cluster from "../components/Cluster/Cluster";

function JaenPage() {
  const lat = 37.7797; // Latitud de Jaén
  const lon = -3.7794; // Longitud de Jaén

  const { weatherData, loading, error } = useFetchWeather(lat, lon);

  const JaenDescription = `Jaén, conocida como la capital mundial del aceite de oliva, es una provincia andaluza que combina historia, 
naturaleza y una rica tradición agrícola. Es el corazón del mar de olivos, con paisajes que parecen infinitos 
y una producción de aceite de oliva virgen extra que destaca por su calidad inigualable.

La ciudad de Jaén cuenta con monumentos emblemáticos como la imponente Catedral de la Asunción, una joya del 
Renacimiento español, y el Castillo de Santa Catalina, que ofrece unas vistas espectaculares de la ciudad y 
los campos de olivos. Jaén es también un lugar de tradiciones, con festividades como la Semana Santa, declarada 
de Interés Turístico Nacional.

En el ámbito natural, Jaén no tiene igual. El Parque Natural de las Sierras de Cazorla, Segura y Las Villas, 
el mayor espacio protegido de España, es un paraíso para los amantes del senderismo y la fauna. Aquí se pueden 
descubrir cascadas, bosques mediterráneos y una biodiversidad única, incluyendo especies como el águila imperial 
y el quebrantahuesos.`;

  return (
    <div className="space-y-12 px-6 py-8 mx-auto max-w-7xl bg-gray-100 text-gray-800">
      {/* Jumbotron */}
      <div>
        <Jumbotron
          title="Jaén"
          subtitle="El mar de olivos y el legado renacentista."
          imagePath={jaenimg}
        />
      </div>
      
      <ProvinceWeather
        provinceName="Jaén"
        weatherData={weatherData}
        loading={loading}
        error={error}
        description={JaenDescription}
      />

      <TwoColumnSection
        title="El Castillo de Santa Catalina"
        description="Desde lo alto del Castillo de Santa Catalina, disfruta de unas vistas inigualables de la ciudad de Jaén y sus alrededores. Este emblemático monumento es una ventana al pasado medieval de la región."
        imagePath={castilloimg}
        altText="Castillo de Santa Catalina"
        reverse={false}
      />

      <TwoColumnSection
        title="El Mar de Olivos"
        description="Jaén es mundialmente conocido por su producción de aceite de oliva. Un paisaje dominado por olivos te acompaña mientras descubres el oro líquido, esencia de la gastronomía andaluza."
        imagePath={olivaresimg}
        altText="Mar de Olivos en Jaén"
        reverse={true}
      />
      
      <ProvincesNews provinceName="Jaen" />

      <TwoColumnSection
        title="Úbeda y Baeza"
        description="Declaradas Patrimonio de la Humanidad por la UNESCO, estas ciudades renacentistas te trasladarán a una época de esplendor cultural y arquitectónico. Un paseo por sus calles es como un viaje en el tiempo."
        imagePath={ubedaBaezaimg}
        altText="Úbeda y Baeza"
        reverse={false}
      />
     
      <CTA
        quote="En Jaén, cada rincón es una lección de historia, un regalo para los sentidos y un homenaje a la tradición."
        buttonText="Botón a patrocinado"
        buttonLink="#"
      />

      <h2 className="text-3xl font-extrabold mb-4">¿A dónde irás ahora?</h2>
      <Cluster />
    
    </div>
  );
}

export default JaenPage;
