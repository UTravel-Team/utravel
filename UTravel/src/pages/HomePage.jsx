import React from "react"; // Cambia "react" por "React"
import Cluster from "../components/Cluster/Cluster"; // Asegúrate de que la ruta es correcta


function HomePage() {
  return (
    <div className="p-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">Home</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🗺️ Desbloquea Continente</h2>
        <p>blablablablabalbalba</p>
        <Cluster />
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🎲 Échalo a suertes</h2>
        <p>blablablablabalbalba</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">📌 Tu Mundo</h2>
        <p>blablablablabalbalba</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Comentario</h2>
        <p>blablablablabalbalba</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">FAQ</h2>
        <p>blablablablabalbalba</p>
      </section>
    </div>
  );
}

export default HomePage;
