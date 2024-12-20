//imports básicos
import React from "react";
//imports de componentes de estructura de contenidos
import Jumbotron from "../components/InPageContent/Jumbotron";
import Intro from "../components/InPageContent/Intro";
import TwoColumnSection from "../components/InPageContent/TwoCols";
import CTA from "../components/InPageContent/CTA";
//import del componente para el titular de datos curiosos o noticias
import ProvincesNews from "../components/News/ProvincesNews";
//Mediateca
import almeriaimg from "../../src/assets/images/landings/almeria/almeria.jpg";
import aventuraimg from "../../src/assets/images/landings/almeria/aventuraimg.jpg";
import almeriaHollywood from "../../src/assets/images/landings/almeria/almeria-holliwood.jpg";

//empieza la fiesta
function AlmeriaPage() {
  return (
    <div className="space-y-12 px-6 py-8 mx-auto max-w-7xl bg-gray-100 text-gray-800">
      {/* Jumbotron */}
      <div>
      <Jumbotron
        title="Almería"
        subtitle="Playas vírgenes, historia milenaria y paisajes que desafían la imaginación."
        imagePath={almeriaimg}
      />
      <ProvincesNews provinceName="Almeria" />
      </div>

      <Intro
        text="La provincia de Almería es un regalo inigualable en el corazón del Mediterráneo. Con más de 200 kilómetros de costa, desde las playas salvajes del Cabo de Gata-Níjar hasta las arenas doradas de Poniente, Almería ofrece un equilibrio perfecto entre naturaleza intacta y hospitalidad moderna."
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
      
      <TwoColumnSection
        title="Aventura, Naturaleza y Descanso"
        description="Descubre un territorio de contrastes: desde las playas desiertas del Parque Natural Cabo de Gata-Níjar hasta la nieve y los bosques mediterráneos de la Sierra María-Los Vélez. Almería es aventura para el explorador, paz para el viajero exigente y magia para quien busca lo auténtico."
        imagePath={aventuraimg} 
        altText="Aventura en Almería"
        reverse={false}
      />

      <CTA
        quote="En Almería, cada amanecer te invita a un viaje donde el mar, el desierto y la historia escriben juntos una experiencia única."
        buttonText="Descubre Almería"
        buttonLink="#"
      />
    </div>
  );
}

//exportar la landing
export default AlmeriaPage;
