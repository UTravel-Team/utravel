import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/UNLOCK-TRAVEL.jpg";

function NavBar() {
  return (
    <nav className="bg-gray-100 shadow-md py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Logo Unlock Travel"
            className="w-32 h-auto"
          />
        </Link>

        {/* Menú de navegación */}
        <div className="flex items-center space-x-4">
          {["Foro", "Chat", "Favs 🌟", "Mi Mundo 🌍📌"].map((text, index) => (
            <button
              key={index}
              type="button"
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-400 transition"
            >
              {text}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
