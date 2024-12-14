import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/unlock-travel-transp.png";

function NavBar() {
  return (
    <nav className="15803D shadow-md py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
        <img src={logo} alt="Logo Unlock Travel" style={{ width: "50%" }} className="h-auto" />
        </Link>

        

        {/* Menú de navegación */}
        <div className="flex items-center space-x-4">
          {["Foro", "Chat", "Favs 🌟", "Mi Mundo 🌍📌"].map((text, index) => (
            <button
              key={index}
              type="button"
              className="custom-button"
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
