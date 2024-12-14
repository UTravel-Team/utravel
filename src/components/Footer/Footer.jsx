import React from "react";
import { Link } from "react-router-dom"; // Importa Link

function Footer() {
  return (
    <footer className="bg-green-900 text-white text-xs py-4">
      <div className="container mx-auto flex flex-wrap justify-between gap-4">
        {/* Column 1: Links */}
        <div>
          <h4 className="text-sm font-semibold border-b border-white mb-2">Visita Andalucía</h4>
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

        {/* Column 2: Contact Info */}
        <div>
          <h4 className="text-sm font-semibold border-b border-white mb-2">Contacto</h4>
          <p>Email: info@utravel.com</p>
          <p>Teléfono: +34 600 000 000</p>
        </div>

        {/* Column 3: Social Media */}
        <div className="text-center">
          <h4 className="text-sm font-semibold border-b border-white mb-2">Síguenos</h4>
          <div className="flex justify-center gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-300">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-300">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-300">
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
