import React from "react";
import Jumbotron from "../components/InPageContent/Jumbotron";
import Intro from "../components/InPageContent/Intro";
import TwoColumnSection from "../components/InPageContent/TwoCols";
import CTA from "../components/InPageContent/CTA";
import ProvincesNews from "../components/News/ProvincesNews";
import jaenimg from "../../src/assets/images/landings/jaen/jaen.jpg";
import castilloimg from "../../src/assets/images/landings/jaen/castillo.jpg";
import olivaresimg from "../../src/assets/images/landings/jaen/olivares.jpg";
import ubedaBaezaimg from "../../src/assets/images/landings/jaen/ubeda_baeza.jpg";

function JaenPage() {
  return (
    <>
      <div>
        <ProvincesNews provinceName="Jaén" />
      </div>
      <div className="space-y-12 px-6 py-8 mx-auto max-w-7xl bg-gray-100 text-gray-800">
        {/* Jumbotron */}
        <div>
          <Jumbotron
            title="Jaén"
            subtitle="El mar de olivos y el legado renacentista."
            imagePath={jaenimg}
          />
        </div>

        <Intro
          text="Jaén, tierra de olivares infinitos y ciudades monumentales, ofrece un viaje por la esencia de Andalucía. Descubre su riqueza histórica y su naturaleza deslumbrante."
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

        <TwoColumnSection
          title="Úbeda y Baeza"
          description="Declaradas Patrimonio de la Humanidad por la UNESCO, estas ciudades renacentistas te trasladarán a una época de esplendor cultural y arquitectónico. Un paseo por sus calles es como un viaje en el tiempo."
          imagePath={ubedaBaezaimg}
          altText="Úbeda y Baeza"
          reverse={false}
        />

        <CTA
          quote="En Jaén, cada rincón es una lección de historia, un regalo para los sentidos y un homenaje a la tradición."
          buttonText="Descubre Jaén"
          buttonLink="#"
        />
      </div>
    </>
  );
}

export default JaenPage;
