import { useState } from "react";
import { Wheel as Roulette } from "react-custom-roulette";
import { v4 as uuidv4 } from "uuid";
import "./Wheel.css";
import "./TicketModal.css";

export default function Wheel() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rouletteValue, setRouletteValue] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const andalusiaProvinces = [
    "Almería",
    "Cádiz",
    "Córdoba",
    "Granada",
    "Huelva",
    "Jaén",
    "Málaga",
    "Sevilla",
  ];

  const data = andalusiaProvinces.map((province) => ({
    id: uuidv4(),
    option: province,
    optionSize: 1,
  }));

  const handleSpin = () => {
    const randomValue = Math.floor(Math.random() * data.length);
    setRouletteValue(randomValue);
    setIsSpinning(true);
  };

  const handleFinish = () => {
    setIsSpinning(false);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
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
        <h2>Boarding Pass</h2>
        <h3>Airline Company</h3>
      </div>
      <div className="ticket-body">
        <div className="ticket-row">
          <div>
            <p className="label">Passenger</p>
            <p className="value">John Doe</p>
          </div>
          <div>
            <p className="label">Flight</p>
            <p className="value">AV1A7</p>
          </div>
        </div>
        <div className="ticket-row">
          <div>
            <p className="label">Date</p>
            <p className="value">27 Jun 2022</p>
          </div>
          <div>
            <p className="label">Seat</p>
            <p className="value">4B</p>
          </div>
        </div>
        <div className="ticket-destination">
          <h3 className="from">London</h3>
          <div className="plane-icon">✈️</div>
          <h3 className="to">{data[rouletteValue]?.option}</h3>
        </div>
        <div className="ticket-footer">
          <div>
            <p className="label">Gate</p>
            <p className="value">25A</p>
          </div>
          <div>
            <p className="label">Boarding Time</p>
            <p className="value">06:30</p>
          </div>
        </div>
      </div>
      <div className="barcode"></div>
      <button
        onClick={closeModal}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-400"
      >
        Close
      </button>
    </div>
  </div>
)}

    </div>
  );
}
