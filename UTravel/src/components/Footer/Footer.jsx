import React from "react";

function Footer() {
  return (
    <footer className="bg-green-900 text-white text-xs py-4">
      <div className="container mx-auto flex flex-wrap justify-between gap-4">
        {/* Column 1: Links */}
        <div>
          <h4 className="text-sm font-semibold border-b border-white mb-2">Visita Andalucía</h4>
          <ul className="space-y-2">
            <li><a href="/almeria" className="hover:text-green-300">Almería</a></li>
            <li><a href="/cadiz" className="hover:text-green-300">Cádiz</a></li>
            <li><a href="/cordoba" className="hover:text-green-300">Córdoba</a></li>
            <li><a href="/granada" className="hover:text-green-300">Granada</a></li>
            <li><a href="/huelva" className="hover:text-green-300">Huelva</a></li>
            <li><a href="/jaen" className="hover:text-green-300">Jaén</a></li>
            <li><a href="/malaga" className="hover:text-green-300">Málaga</a></li>
            <li><a href="/sevilla" className="hover:text-green-300">Sevilla</a></li>
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
    </footer>
  );
}

export default Footer;
