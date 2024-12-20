import React from "react";
import Jumbotron from "../components/InPageContent/Jumbotron";
import Intro from "../components/InPageContent/Intro";
import TwoColumnSection from "../components/InPageContent/TwoCols";
import CTA from "../components/InPageContent/CTA";
import ProvincesNews from "../components/News/ProvincesNews";
import malagaimg from "../assets/images/Landings/malaga/malaga.jpg";
import alcazabaimg from "../assets/images/Landings/malaga/alcazaba.jpg";
import costaDelSolimg from "../assets/images/Landings/malaga/costadelsol.jpg"
import picassoimg from "../assets/images/Landings/malaga/picasso.jpg";

function MalagaPage() {
  return ( 
    <>
      <div className="space-y-12 px-6 py-8 mx-auto max-w-7xl bg-gray-100 text-gray-800">
        {/* Jumbotron */}
        <div>
          <Jumbotron
            title="Málaga"
            subtitle="Sol, cultura y un legado que brilla junto al Mediterráneo."
            imagePath={malagaimg}
          />
          <ProvincesNews provinceName="Málaga" />
        </div>

        <Intro
          text="Málaga, la joya de la Costa del Sol, es una mezcla perfecta de playas, arte y tradiciones. Desde su centro histórico hasta sus calas doradas, Málaga tiene algo para todos."
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

        <TwoColumnSection
          title="Cuna de Picasso"
          description="Málaga es el lugar de nacimiento de Pablo Picasso. Su legado artístico vive en el Museo Picasso y en cada rincón de la ciudad, reflejando su influencia y creatividad."
          imagePath={picassoimg}
          altText="Museo Picasso en Málaga"
          reverse={false}
        />

        <CTA
          quote="En Málaga, el arte, la playa y la gastronomía se encuentran para ofrecerte una experiencia inolvidable."
          buttonText="Descubre Málaga"
          buttonLink="#"
        />
      </div>
    </>
  );
}
export default MalagaPage;