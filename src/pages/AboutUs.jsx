import React from "react";
import blanca from "../assets/images/uteam/blanca.jpeg";
import toni from "../assets/images/uteam/toni.jpeg";
import kikin from "../assets/images/uteam/kikin.jpeg";
import uteam from "../assets/images/uteam/uteam.jpeg";


const TeamPage = () => {
  const teamMembers = [
    {
      name: "Blanca",
      role: "Desarrollador Fullstack 50%",
      image: blanca, 
      description:
        "Aprendiz. De hackear mentes a prospecto de programadora fullstack. Veremos a ver dónde termina esta historia.",
      linkedin: "https://linkedin.com/in/blancadum",
    },
    {
      name: "Toni",
      role: "Desarrollador Fullstack 50%",
      image: toni,
      description:
        "Especialista en experiencia de usuario, dedicando su tiempo a crear diseños que inspiran y conectan.",
      linkedin: "https://linkedin.com/in/antoniovargasgarcia",
    },
    {
      name: "Kikín",
      role: "Colaborador",
      image: kikin,
      description:
        "Amante de Andalucía, promotor del pescaíto frito y con Algeciras por bandera. Nos ha inspirado cuando estábamos bloqueados con los contenidos, dándonos una visión fresca y futurista y enriqueciendo el proyecto con su gran creatividad y entusiasmo. Acordáos de su cara porque este chico nos dara vuelta y media en lo que canta un gallo.",
    },
    {
        name: "Uteam",
        image: uteam,
        description:
          "Nos lo hemos pasado pipa en este proyecto, siempre hay que aprender de las generaciones futuras",
      },
  ];

  return (
    <div className="p-6 bg-gray-50">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
        UTravel Team
      </h1>
      <p>UTravel Team somos 2+1</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden text-center p-6 transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl font-bold text-gray-800">{member.name}</h2>
            <p className="text-sm text-gray-500">{member.role}</p>
            <p className="text-gray-700 mt-4">{member.description}</p>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition"
              >
              LinkedIn
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;