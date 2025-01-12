import { useState, useRef } from "react";
import { Wheel as Roulette } from "react-custom-roulette";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import "./Wheel.css";
import "./TicketModal.css";
import spinSoundFile from "../../assets/sounds/ruleta.mp3";
import clincSoundFile from "../../assets/sounds/clinc.mp3"; // Ruta del nuevo sonido

export default function Wheel() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rouletteValue, setRouletteValue] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const spinSound = useRef(new Audio(spinSoundFile));
  const clincSound = useRef(new Audio(clincSoundFile)); // Referencia para el nuevo sonido
  const navigate = useNavigate(); // Hook para navegar entre rutas

  const andalusiaProvinces = [
    { name: "Almería", link: "/almeria" },
    { name: "Cádiz", link: "/cadiz" },
    { name: "Córdoba", link: "/cordoba" },
    { name: "Granada", link: "/granada" },
    { name: "Huelva", link: "/huelva" },
    { name: "Jaén", link: "/jaen" },
    { name: "Málaga", link: "/malaga" },
    { name: "Sevilla", link: "/sevilla" },
  ];

  const data = andalusiaProvinces.map((province) => ({
    id: uuidv4(),
    option: province.name,
    optionSize: 1,
  }));

  const handleSpin = () => {
    const randomValue = Math.floor(Math.random() * data.length);
    setRouletteValue(randomValue);
    setIsSpinning(true);

    // Reiniciar y reproducir el sonido de la ruleta
    spinSound.current.currentTime = 0;
    spinSound.current.play();
  };

  const handleFinish = () => {
    setIsSpinning(false);
    setShowModal(true);

    // Detener el sonido de la ruleta y reproducir el sonido del modal
    spinSound.current.pause();
    spinSound.current.currentTime = 0;
    clincSound.current.play();
  };

  const redirectToCity = () => {
    const selectedProvince = andalusiaProvinces[rouletteValue];
    if (selectedProvince?.link) {
      navigate(selectedProvince.link); // Navegar a la página definida en `link`
    }
  };

  return (
    <div className="wheel-container flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">
        Ruleta de Provincias de Andalucía
      </h1>
      <div className="relative">
        <Roulette
          mustStartSpinning={isSpinning}
          prizeNumber={rouletteValue}
          data={data}
          onStopSpinning={handleFinish}
          backgroundColors={["#45a049", "white"]}
          textColors={["black"]}
        />
        <button
          onClick={handleSpin}
          disabled={isSpinning}
          className={`spin-button ${
            isSpinning ? "spin-button-disabled" : "spin-button-enabled"
          }`}
        >
          {isSpinning ? "" : "🎯"}
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="ticket-modal">
            <div className="ticket-header">
              <h2>Billete de Tren</h2>
              <h3>Renfe</h3>
            </div>
            <div className="ticket-body">
              <div className="ticket-row">
                <div>
                  <p className="label">Pasajero/a</p>
                  <p className="value">John Doe</p>
                </div>
                <div>
                  <p className="label">AV01</p>
                  <p className="value">Vagón 20</p>
                </div>
              </div>
              <div className="ticket-row">
                <div>
                  <p className="label">Fecha</p>
                  <p className="value">27 Jun 2022</p>
                </div>
                <div>
                  <p className="label">Asiento</p>
                  <p className="value">13A</p>
                </div>
              </div>
              <div className="ticket-destination">
                <h3 className="from">Destino</h3>
                <div className="plane-icon">🚆</div>
                {/* El nombre de la provincia es ahora un botón */}
                <button
                  onClick={redirectToCity}
                  className="text-lg font-semibold text-blue-500 underline hover:text-blue-700 transition"
                >
                  {andalusiaProvinces[rouletteValue]?.name}
                </button>
              </div>
              <div className="ticket-footer">
                <div>
                  <p className="label">Andén</p>
                  <p className="value">4</p>
                </div>
                <div>
                  <p className="label">Hora de Salida</p>
                  <p className="value">06:30</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
