import React from "react";
import { Link } from "react-router-dom";
import SocialMedia from "../Buttons/SocialMediaButton.jsx";
import logo from "../../assets/images/logo/ut-transp-logo.png";
import NavBar from "../NavBar/NavBar.jsx";

function Header() {
  return (
    <header className="bg-green-700 text-white border-b-4 border-white">
      <div className="flex flex-col p-4">
        <div className="flex items-center justify-between flex-wrap mb-4">
          {/* Logo */}
          <div className="w-32">
            <img src={logo} alt="Logo Unlock Travel" className="w-full h-auto" />
          </div>

          {/* Search Bar */}
          <input
            type="text"
            placeholder="Buscar..."
            className="border rounded-full p-2 w-72 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Buscar"
          />

          {/* Social Media and Links */}
          <div className="flex gap-4 items-center">
            <SocialMedia /> {/* Componente de botones de redes sociales */}
            <Link
              to="/login"
              className="bg-green-800 text-white rounded px-4 py-2 hover:bg-green-600 transition"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="bg-green-600 text-white rounded px-4 py-2 hover:bg-green-500 transition"
            >
              Register
            </Link>
          </div>
        </div>
        
        {/* Navigation Bar */}
        <NavBar />
      </div>
      
    </header>
  );
}

export default Header;
