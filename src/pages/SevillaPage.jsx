import React from "react";
import Jumbotron from "../components/InPageContent/Jumbotron";
import Intro from "../components/InPageContent/Intro";
import TwoColumnSection from "../components/InPageContent/TwoCols";
import CTA from "../components/InPageContent/CTA";
import ProvincesNews from "../components/News/ProvincesNews";
import sevillaimg from "../assets/images/Landings/sevilla/sevilla.jpg";
import giraldaimg from "../assets/images/Landings/sevilla/giralda.jpg";
import flamencoimg from "../assets/images/Landings/sevilla/flamenco.jpg";
import feriaimg from "../assets/images/Landings/sevilla/feria.jpg";

function SevillaPage() {
  return (
    <div className="space-y-12 px-6 py-8 mx-auto max-w-7xl bg-gray-100 text-gray-800">
      {/* Jumbotron */}
      <div>
        <Jumbotron
          title="Sevilla"
          subtitle="Arte, historia y pasión a orillas del Guadalquivir."
          imagePath={sevillaimg}
        />
        <ProvincesNews provinceName="Sevilla" />
      </div>

      <Intro
        text="Sevilla, corazón de Andalucía, es una ciudad que respira arte y cultura. Desde su imponente catedral hasta el embrujo del flamenco, Sevilla cautiva a todo el que la visita."
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

      <TwoColumnSection
        title="La Feria de Abril"
        description="La Feria de Abril de Sevilla es una explosión de color, música y tradición. Pasea por las casetas, disfruta de la música y déjate llevar por el ambiente único de esta celebración."
        imagePath={feriaimg}
        altText="Feria de Abril en Sevilla"
        reverse={false}
      />

      <CTA
        quote="En Sevilla, cada rincón es un poema escrito con historia, arte y pasión."
        buttonText="Descubre Sevilla"
        buttonLink="#"
      />
    </div>
  );
}

export default SevillaPage;