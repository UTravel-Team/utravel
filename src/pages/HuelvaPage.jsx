import React from "react";
import Jumbotron from "../components/InPageContent/Jumbotron";
import Intro from "../components/InPageContent/Intro";
import TwoColumnSection from "../components/InPageContent/TwoCols";
import CTA from "../components/InPageContent/CTA";
import ProvincesNews from "../components/News/ProvincesNews";
import huelvaimg from "../../src/assets/images/landings/huelva/huelva.jpg";
import doñanaimg from "../../src/assets/images/landings/huelva/donana.jpeg";
import colombinosimg from "../../src/assets/images/landings/huelva/moguer.jpg";
import jamonimg from "../../src/assets/images/landings/huelva/jamon.jpg";

function HuelvaPage() {
  return (
    <>
    <div className="space-y-12 px-6 py-8 mx-auto max-w-7xl bg-gray-100 text-gray-800">
      {/* Jumbotron */}
      <div>
        <Jumbotron
          title="Huelva"
          subtitle="Naturaleza, historia y los sabores únicos del Atlántico."
          imagePath={huelvaimg}
        />
        <ProvincesNews provinceName="Huelva" />
      </div>

      <Intro
        text="Huelva, una tierra de contrastes donde la historia se une a paisajes espectaculares. Desde el Parque Nacional de Doñana hasta su legado colombino, Huelva es una joya por descubrir."
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

      <TwoColumnSection
        title="Sabores de la Sierra"
        description="El jamón ibérico de Huelva, con Denominación de Origen Jabugo, es un manjar reconocido mundialmente. Cada bocado refleja la tradición y la calidad de esta tierra única."
        imagePath={jamonimg}
        altText="Jamón Ibérico de Huelva"
        reverse={false}
      />

      <CTA
        quote="En Huelva, la historia, la naturaleza y la gastronomía se unen para ofrecerte una experiencia inolvidable."
        buttonText="Descubre Huelva"
        buttonLink="#"
      />
    </div>

    </>
  );
}

export default HuelvaPage;