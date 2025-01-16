import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/unlock-travel-transp.png";

function Footer() {
  return (
    <footer className="bg-green-900 text-white text-xs py-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Column 1: Logo */}
        <div className="flex flex-col items-center">
          <Link to="/">
            <img
              src={logo}
              alt="Logo Unlock Travel"
              className="w-full mb-2"
            />
          </Link>
        </div>

        {/* Column 2: Links */}
        <div className="text-center">
          <h4 className="text-sm font-semibold border-b border-white mb-2">
            Visita Andalucía
          </h4>
          <ul className="space-y-2">
            <li><Link to="/almeria" className="hover:text-green-300">Almería</Link></li>
            <li><Link to="/cadiz" className="hover:text-green-300">Cádiz</Link></li>
            <li><Link to="/cordoba" className="hover:text-green-300">Córdoba</Link></li>
            <li><Link to="/granada" className="hover:text-green-300">Granada</Link></li>
            <li><Link to="/huelva" className="hover:text-green-300">Huelva</Link></li>
            <li><Link to="/jaen" className="hover:text-green-300">Jaén</Link></li>
            <li><Link to="/malaga" className="hover:text-green-300">Málaga</Link></li>
            <li><Link to="/sevilla" className="hover:text-green-300">Sevilla</Link></li>
          </ul>
        </div>
        {/* Column 3: Utravel */}
        <div className="text-center">
          <h4 className="text-sm font-semibold border-b border-white mb-2">
            Enlaces de interés
          </h4>
          <ul className="space-y-2">
            <li><Link to="/about-utravel" className="hover:text-green-300">Sobre UTravel</Link></li>
            <li><Link to="/About-Us" className="hover:text-green-300">Quiénes somos</Link></li>
            <li><Link to="/" className="hover:text-green-300">Foro</Link></li>
            <li><Link to="/" className="hover:text-green-300">Chat</Link></li>
            <li><Link to="/" className="hover:text-green-300">Aviso Legal</Link></li>
            <li><Link to="/" className="hover:text-green-300">Política de Cookies</Link></li>
          </ul>
        </div>
        {/* Column 4: Contact Info */}
        <div className="text-center">
          <h4 className="text-sm font-semibold border-b border-white mb-2">
            Contacto
          </h4>
          <p>Email: info@utravel.com</p>
          <p>Teléfono: +34 600 000 000</p>
          <div className="flex justify-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-300"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-300"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-300"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Enlace a la página de inicio (Home) */}
      <div className="text-center mt-4">
        <Link to="/" className="text-white hover:text-green-300">
          Volver a la página principal
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
