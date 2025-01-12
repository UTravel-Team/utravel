import React from "react";
import Jumbotron from "../components/InPageContent/Jumbotron";
import TwoColumnSection from "../components/InPageContent/TwoCols";
import CTA from "../components/InPageContent/CTA";
import ProvincesNews from "../components/News/ProvincesNews";
import cordobaimg from "../assets/images/Landings/cordoba/cordoba.jpg";
import mezquitaimg from "../assets/images/landings/cordoba/mezquita.jpg";
import patiosimg from "../assets/images/Landings/cordoba/patios.jpg";
import medinaAzaharaimg from "../assets/images/Landings/cordoba/medina_azahara.jpg";
import { useFetchWeather } from "../hooks/useFetchWeather";
import ProvinceWeather from "../components/Weather/ProvinceWeather"; 
import Cluster from "../components/Cluster/Cluster";

function CordobaPage() {
  const lat = 37.8882; // Latitud de Córdoba
  const lon = -4.7794; // Longitud de Córdoba

  const { weatherData, loading, error } = useFetchWeather(lat, lon);

  const cordobaDescription = `
Córdoba, un crisol de culturas y civilizaciones, es una de las ciudades más fascinantes de Andalucía. Famosa por su Mezquita-Catedral, Patrimonio de la Humanidad, la ciudad combina una impresionante herencia islámica, romana y cristiana. 

Pasear por el casco antiguo de Córdoba es como retroceder en el tiempo, con calles estrechas, patios llenos de flores y arquitectura que cuenta historias de siglos pasados. En primavera, la ciudad se llena de vida durante el Festival de los Patios, donde los vecinos decoran sus casas con miles de flores para una celebración única.

Además, Córdoba es un destino para los amantes de la gastronomía. Platos como el salmorejo, el flamenquín y el rabo de toro son auténticas delicias locales que reflejan la rica tradición culinaria de la región.

En los alrededores de Córdoba, el paisaje se transforma en olivares interminables, castillos medievales y parajes naturales que invitan al descanso y la aventura. La provincia es ideal  para explorar a pie o en bicicleta, con rutas  que atraviesan montañas y ríos.
`
  return (
    <div className="space-y-12 px-6 py-8 mx-auto max-w-7xl bg-gray-100 text-gray-800">
      {/* Jumbotron */}
      <div>
        <Jumbotron
          title="Córdoba"
          subtitle="Arte, historia y una riqueza cultural inigualable."
          imagePath={cordobaimg}
        />
      </div>
       
      {/* Clima y descripción */}
      <ProvinceWeather
        provinceName="Córdoba"
        weatherData={weatherData}
        loading={loading}
        error={error}
        description={cordobaDescription}
      />

      <TwoColumnSection
        title="La Mezquita-Catedral"
        description="La Mezquita-Catedral de Córdoba es uno de los mayores tesoros arquitectónicos del mundo. Este imponente edificio refleja la grandeza de la civilización andalusí y la fusión de culturas que caracteriza a Córdoba."
        imagePath={mezquitaimg}
        altText="Mezquita-Catedral de Córdoba"
        reverse={false}
      />

      <TwoColumnSection
        title="Los Patios de Córdoba"
        description="Los patios cordobeses son un espectáculo de color y vida, especialmente durante el festival de los Patios. Esta tradición única te hará sentir la esencia de Córdoba en cada rincón."
        imagePath={patiosimg}
        altText="Patios de Córdoba"
        reverse={true}
      />

      <ProvincesNews provinceName="Cordoba" />

      <TwoColumnSection
        title="Medina Azahara"
        description="A pocos kilómetros de la ciudad, Medina Azahara se alza como testimonio del esplendor del Califato de Córdoba. Este yacimiento arqueológico te transportará a una época de lujo y sofisticación."
        imagePath={medinaAzaharaimg}
        altText="Medina Azahara"
        reverse={false}
      />

      <CTA
        quote="En Córdoba, cada calle cuenta una historia, cada monumento un legado y cada experiencia un recuerdo inolvidable."
        buttonText="Botón a patrocinado"
        buttonLink="#"
      />

      <h2 className="text-3xl font-extrabold mb-4">¿A dónde irás ahora?</h2>
      <Cluster />
    </div>
  );
}

export default CordobaPage;
