import React, { useState, useEffect } from "react";

function CommentSection({ provincia, categorias }) {
  const [comments, setComments] = useState([]); // Estado para almacenar comentarios
  const [loading, setLoading] = useState(true); // Estado para indicar si se está cargando

  useEffect(() => {
    const fetchComments = async () => {
      try {
        // Carga todos los JSON para las categorías
        const allComments = await Promise.all(
          categorias.map(async (categoria) => {
            const url = `/data/comment/${provincia}/${categoria}.json`; // Ruta dinámica
            console.log("Fetching:", url); // Verificar rutas en consola
            const response = await fetch(url);
            if (!response.ok) {
              console.error(`Error loading ${categoria}:`, response.status, response.statusText);
              return []; // Si falla, devuelve un array vacío
            }
            return response.json(); // Convierte el JSON en un objeto JavaScript
          })
        );
        setComments(allComments.flat()); // Combina todos los arrays de comentarios
      } catch (error) {
        console.error("Error loading comments:", error);
      } finally {
        setLoading(false); // Finaliza la carga
      }
    };

    fetchComments();
  }, [provincia]); // Se ejecuta cuando cambia la provincia

  // Mostrar un mensaje mientras se cargan los datos
  if (loading) {
    return <p>Cargando comentarios...</p>;
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold mb-4">Comentarios sobre {provincia}</h2>
      {comments.map((comment) => (
        <div key={comment.id} className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center mb-2">
            <img
              src={comment.foto_user}
              alt={comment.user}
              className="w-10 h-10 rounded-full mr-3"
            />
            <p className="font-semibold">{comment.user}</p>
          </div>
          <img
            src={comment.foto_local}
            alt={comment.local_name}
            className="w-full h-40 object-cover rounded-lg mb-2"
          />
          <p className="font-bold">{comment.local_name}</p>
          <p className="text-gray-600 mb-2">{comment.opinion}</p>
          <p className="text-yellow-500">{comment.rating}</p> {/* Estrellas */}
        </div>
      ))}
    </div>
  );
}

export default CommentSection;
