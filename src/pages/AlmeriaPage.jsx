import React from "react";
import ProvincesNews from "../components/News/ProvincesNews";
import almeria from "../assets/images/maps/almeria.svg";
import ProvincesData from "../ProvincesData/ProvincesData.json";


function AlmeriaPage() {
  return (
    <div className="space-y-12 px-6 py-8 mx-auto max-w-7xl bg-gray-100 text-gray-800">
      {/* Jumbotron con altura más pequeña */}
      <div
        className="relative w-full h-[40vh] md:h-[50vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${almeria})` }}
      >
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-6 py-12">
          {/* Título */}
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4">
            Almería: Donde el Mediterráneo Guarda sus Tesoros Más Indomables
          </h1>
          {/* Subtítulo */}
          <p className="text-lg md:text-2xl text-white drop-shadow-md">
            Playas vírgenes, historia milenaria y paisajes que desafían la
            imaginación.
          </p>
        </div>
      </div>
      <ProvincesNews title="Almeria" phrases={ProvincesData.Almeria}/>
      {/* Sección Principal */}
      <section className="space-y-12">
        {/* Introducción */}
        <div className="text-center">
          <p className="text-lg leading-relaxed">
            La <strong>provincia de Almería</strong> es un regalo inigualable en
            el corazón del Mediterráneo. Con{" "}
            <span className="font-semibold">más de 200 kilómetros de costa</span>
            , desde las playas salvajes del{" "}
            <span className="text-blue-500">Cabo de Gata-Níjar</span> hasta las
            arenas doradas de Poniente, Almería ofrece un equilibrio perfecto
            entre <em>naturaleza intacta</em> y hospitalidad moderna.
          </p>
        </div>
        
        {/* Historia */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Historia Viva en Cada Rincón</h2>
            <p className="text-lg leading-relaxed">
              Almería ha sido testigo de{" "}
              <strong>civilizaciones milenarias</strong> que dejaron su huella.
              Desde los restos prehistóricos de{" "}
              <span className="font-semibold">Los Millares y el Argar</span>{" "}
              hasta la esplendorosa herencia árabe, reflejada en castillos,
              fortalezas y el majestuoso legado de la época musulmana.
            </p>
          </div>
          <img
            src={almeria}
            alt="Historia de Almería"
            className="w-full rounded-lg"
          />
        </div>

        {/* Escenario Cinematográfico */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src="../src/assets/images/cluster/almeria-holliwood.jpg"
            alt="Cine en Almería"
            className="w-full md:w-1/2 rounded-lg shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">
              El Escenario Perfecto del Cine
            </h2>
            <p className="text-lg leading-relaxed">
              La singularidad de su <strong>paisaje indomable</strong> y su
              clima cálido han hecho de Almería el plató natural de grandes
              producciones cinematográficas. <strong>Hollywood</strong> encontró
              aquí su inspiración, rodando en sus desiertos y costas películas
              legendarias.
            </p>
          </div>
        </div>

        {/* Naturaleza */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Aventura, Naturaleza y Descanso</h2>
          <p className="text-lg leading-relaxed">
            Descubre un territorio de contrastes: desde las playas desiertas del{" "}
            <span className="font-semibold">Parque Natural Cabo de Gata-Níjar</span>{" "}
            hasta la nieve y los bosques mediterráneos de la{" "}
            <span className="text-blue-500">Sierra María-Los Vélez</span>.
            Almería es aventura para el explorador, paz para el viajero exigente
            y magia para quien busca lo auténtico.
          </p>
        </div>
      </section>

      {/* Cierre Inspirador */}
      <div className="text-center mt-12">
        <p className="text-2xl font-semibold text-gray-700">
          “En Almería, cada amanecer te invita a un viaje donde el mar, el
          desierto y la historia escriben juntos una experiencia única.”
        </p>
        <a
          href="#"
          className="mt-6 inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg shadow-md transition"
        >
          Descubre Almería
        </a>
      </div>
    </div>
  );
}

export default AlmeriaPage;
