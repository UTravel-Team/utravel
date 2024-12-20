import React from "react";
import Jumbotron from "../components/InPageContent/Jumbotron";
import Intro from "../components/InPageContent/Intro";
import TwoColumnSection from "../components/InPageContent/TwoCols";
import CTA from "../components/InPageContent/CTA";
import ProvincesNews from "../components/News/ProvincesNews";
import granadaimg from "../assets/images/Landings/granada/granada.jpg";
import alhambraimg from "../assets/images/Landings/granada/alhambra.jpg";
import sierraNevadaimg from "../assets/images/Landings/granada/sierra_nevada.jpg";
import tapasimg from "../assets/images/Landings/granada/tapas.jpg";

function GranadaPage() {
  return (
    <div className="space-y-12 px-6 py-8 mx-auto max-w-7xl bg-gray-100 text-gray-800">
      {/* Jumbotron */}
      <div>
        <Jumbotron
          title="Granada"
          subtitle="Historia, nieve y el embrujo de la Alhambra."
          imagePath={granadaimg}
        />
        <ProvincesNews provinceName="Granada" />
      </div>

      <Intro
        text="Granada, una joya andaluza donde se fusionan historia y naturaleza. Desde las alturas de Sierra Nevada hasta los rincones de la Alhambra, Granada es un destino inolvidable."
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

      <TwoColumnSection
        title="Tapas y Tradición"
        description="En Granada, la gastronomía es arte. Las famosas tapas granadinas, acompañadas de un buen vino o cerveza, son un reflejo de la hospitalidad y el sabor auténtico de esta tierra."
        imagePath={tapasimg}
        altText="Tapas en Granada"
        reverse={false}
      />

      <CTA
        quote="En Granada, cada rincón guarda un secreto, cada plato una historia, y cada paisaje una emoción."
        buttonText="Descubre Granada"
        buttonLink="#"
      />
    </div>
  );
}

export default GranadaPage;