//pinta comentarios de la home
import React, { useEffect, useState } from "react";
import { getBestComments } from "./getBestComments";

const HomeComments = () => {
  const [comments, setComments] = useState([]); // Estado para almacenar los comentarios
  const [loading, setLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(null); // Estado para manejar errores

  // Cargar los comentarios al montar el componente
  useEffect(() => {
    const fetchComments = async () => {
      setLoading(true);
      setError(null); // Resetear el error antes de realizar la solicitud
      try {
        const data = await getBestComments();
        setComments(data);
      } catch (error) {
        setError("Hubo un problema al cargar los comentarios."); // Manejo de errores
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, []);

  return (
    <section className="mb-6">
      {loading ? (
        <p className="text-gray-500 mt-4">Cargando comentarios...</p>
      ) : error ? (
        <p className="text-red-500 mt-4">{error}</p> // Mostrar error si ocurre
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-5 gap-2">
          {comments.map((comment) => (
            <div key={comment.id} className="bg-white p-4 rounded shadow-md">
              <img
                src={comment.foto_local}
                alt={comment.local_name}
                className="w-full h-32 object-cover rounded-md"
              />
              <h3 className="font-bold text-lg mt-2">{comment.local_name}</h3>
              <p className="text-gray-500 text-sm">{comment.opinion}</p>
              <div className="mt-2 text-yellow-400">
                {"★".repeat(5)} {/* Siempre muestra 5 estrellas */}
              </div>
              <p className="text-xs text-gray-400 mt-1">Por {comment.user}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default HomeComments;
