// src/pages/UTravelAbout.jsx
import React from "react";
import Jumbotron from "../components/InPageContent/Jumbotron";
import logo from "../assets/images/logo/unlock-travel-transp.png";
import kikin from "../assets/images/uteam/kikin2.jpg";
import Cluster from "../components/Cluster/Cluster";

const UTravelAbout = () => {
  return (
    <div className="bg-gray-50 p-6">
      {/* Jumbotron */}
      <Jumbotron
        title="Sobre UTravel"
        subtitle="Descubre cómo combinamos tecnología y turismo para explorar Andalucía."
        imagePath={logo}
      />

      {/* Introducción */}
      <section className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-bold text-gray-800">Nuestra Visión</h2>
        <p className="text-lg text-gray-700">
          En UTravel, creemos que Andalucía es un tesoro por descubrir. Queremos
          conectar a las personas con la historia, cultura y naturaleza de esta
          increíble región, utilizando tecnología moderna para crear una
          experiencia inmersiva y única.
        </p>
      </section>

      {/* Objetivos */}
      <section className="my-12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Nuestros Objetivos
          </h3>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li>Promover el turismo en las ocho provincias de Andalucía.</li>
            <li>Ofrecer información actualizada sobre el clima, lugares y actividades.</li>
            <li>
              Fomentar la conexión cultural a través de datos históricos y
              gastronómicos.
            </li>
            <li>Integrar elementos interactivos para inspirar a los viajeros.</li>
          </ul>
        </div>
        <img
          src={kikin}
          alt="UTravel Team"
          className="rounded-lg shadow-lg w-full h-auto object-cover"
        />
      </section>

      {/* Provincias */}
      <section className="my-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          ¿Qué Provincia Explorarás?
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Andalucía es un mosaico de maravillas. Desde los patios de Córdoba
          hasta las playas de Cádiz, cada provincia tiene algo especial que
          ofrecer.
        </p>
        <Cluster />
      </section>

      {/* Tecnología */}
      <section className="my-12 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          ¿Cómo Funciona?
        </h2>
        <p className="text-lg text-gray-700 text-center mb-6">
          UTravel combina APIs avanzadas como Google Maps y servicios de clima
          para ofrecer datos precisos. Todo esto está integrado en un diseño
          responsivo y dinámico.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Google Maps</h3>
            <p className="text-gray-700">
              Explora Andalucía con mapas interactivos que destacan lugares
              clave.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-4">API de Clima</h3>
            <p className="text-gray-700">
              Obtén actualizaciones en tiempo real sobre el clima en cada
              provincia.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Diseño Responsivo</h3>
            <p className="text-gray-700">
              Disfruta de una experiencia fluida en cualquier dispositivo.
            </p>
          </div>
        </div>
      </section>

      {/* Llamado a la acción */}
      <section className="my-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          ¡Descubre Andalucía Hoy!
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Únete a nosotros en este viaje y vive la magia de Andalucía como nunca
          antes.
        </p>
        <a
          href="#"
          className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
        >
          Explorar Ahora
        </a>
      </section>
    </div>
  );
};

export default UTravelAbout;