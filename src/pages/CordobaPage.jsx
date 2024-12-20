import React from "react";
import Jumbotron from "../components/InPageContent/Jumbotron";
import Intro from "../components/InPageContent/Intro";
import TwoColumnSection from "../components/InPageContent/TwoCols";
import CTA from "../components/InPageContent/CTA";
import ProvincesNews from "../components/News/ProvincesNews";
import cordobaimg from "../assets/images/Landings/cordoba/cordoba.jpg";
import mezquitaimg from "../assets/images/landings/cordoba/mezquita.jpg";
import patiosimg from "../assets/images/Landings/cordoba/patios.jpg";
import medinaAzaharaimg from "../assets/images/Landings/cordoba/medina_azahara.jpg";
                                

function CordobaPage() {
  return (
    <div className="space-y-12 px-6 py-8 mx-auto max-w-7xl bg-gray-100 text-gray-800">
      {/* Jumbotron */}
      <div>
        <Jumbotron
          title="Córdoba"
          subtitle="Arte, historia y una riqueza cultural inigualable."
          imagePath={cordobaimg}
        />
        <ProvincesNews provinceName="Córdoba" />
      </div>

      <Intro
        text="Córdoba, una ciudad que brilla con la herencia de Al-Ándalus. Sus monumentos, sus tradiciones y su hospitalidad la convierten en un destino imprescindible."
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

      <TwoColumnSection
        title="Medina Azahara"
        description="A pocos kilómetros de la ciudad, Medina Azahara se alza como testimonio del esplendor del Califato de Córdoba. Este yacimiento arqueológico te transportará a una época de lujo y sofisticación."
        imagePath={medinaAzaharaimg}
        altText="Medina Azahara"
        reverse={false}
      />

      <CTA
        quote="En Córdoba, cada calle cuenta una historia, cada monumento un legado y cada experiencia un recuerdo inolvidable."
        buttonText="Descubre Córdoba"
        buttonLink="#"
      />
    </div>
  );
}

export default CordobaPage;
