import React from "react";
import blanca from "../assets/images/uteam/blanca.jpeg";
import toni from "../assets/images/uteam/toni.jpeg";
import kikin from "../assets/images/uteam/kikin.jpeg";
import uteam from "../assets/images/uteam/uteam.jpeg";
import uteam2 from "../assets/images/uteam/uteam2.jpeg";
import kikin2 from "../assets/images/uteam/kikin2.jpg";

const TeamPage = () => {
  return (
    <div className="p-6 bg-gray-50">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
        UTravel Team
      </h1>
      {/* Bloque combinado de Blanca y Toni */}
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-4 mb-12 max-w-6xl mx-auto">
        {/* Bloque de Blanca */}
        <div className="flex-1 bg-white rounded-lg shadow-lg p-6 relative">
          <img
            src={blanca}
            alt="Blanca"
            className="w-32 h-32 rounded-full object-cover shadow-md absolute top-4 left-4"
          />
          <div className="ml-36">
            <h2 className="text-2xl font-bold text-gray-800">Blanca</h2>
            <p className="text-sm text-gray-500">Desarrollador Fullstack 50%</p>
            <p className="text-gray-700 mt-4">
              Aprendiz. De hackear mentes a prospecto de programadora fullstack.
              Veremos a ver dónde termina esta historia.
            </p>
            <a
              href="https://linkedin.com/in/blancadum"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Divisor visual */}
        <div className="w-1 bg-gray-300"></div>

        {/* Bloque de Toni */}
        <div className="flex-1 bg-white rounded-lg shadow-lg p-6 relative">
          <img
            src={toni}
            alt="Toni"
            className="w-32 h-32 rounded-full object-cover shadow-md absolute top-4 left-4"
          />
          <div className="ml-36">
            <h2 className="text-2xl font-bold text-gray-800">Toni</h2>
            <p className="text-sm text-gray-500">Desarrollador Fullstack 50%</p>
            <p className="text-gray-700 mt-4">
              Especialista en experiencia de usuario, dedicando su tiempo a
              crear diseños que inspiran y conectan.
            </p>
            <a
              href="https://linkedin.com/in/antoniovargasgarcia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>


      {/* Bloque de Kikín */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-12 max-w-4xl mx-auto">
        <img
          src={kikin}
          alt="Kikín"
          className="w-40 h-40 rounded-full object-cover shadow-lg"
        />
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Kikín</h2>
          <p className="text-sm text-gray-500">Colaborador</p>
          <p className="text-gray-700 mt-4">
            Amante de Andalucía, promotor del pescaíto frito y con Algeciras por
            bandera. Nos ha inspirado cuando estábamos bloqueados con los
            contenidos, dándonos una visión fresca y futurista y enriqueciendo
            el proyecto con su gran creatividad y entusiasmo.
          </p>
        </div>
      </div>

      {/* Galería final */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Gracias, Kikín
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          <img
            src={kikin2}
            alt="Kikín disfrutando"
            className="w-80"
          />
          <img
            src={uteam}
            alt="UTravel Team 1"
            className="w-4/5"
          />
          <img
            src={uteam2}
            alt="UTravel Team 2"
            className="w-4/5"
          />

        </div>
      </div>
    </div>
  );
};

export default TeamPage;
