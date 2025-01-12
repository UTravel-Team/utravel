import React, { useEffect, useState } from "react";

// Componente para renderizar estrellas a partir del string "★★★★★"
function StarRating({ rating }) {
  const stars = rating.split("").map((star, index) => (
    <span key={index} className={star === "★" ? "text-yellow-400" : "text-gray-400"}>
      ★
    </span>
  ));
  return <div className="flex">{stars}</div>;
}

function Comments({ provincia }) {
  const [comments, setComments] = useState([]);
  const categorias = ["culture", "eat", "ent", "host", "party", "street"];

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const allComments = await Promise.all(
          categorias.map(async (categoria) => {
            const response = await fetch(`/data/comment/${provincia}/${categoria}.json`);
            if (!response.ok) {
              console.error(`Error loading ${categoria}:`, response.statusText);
              return [];
            }
            return response.json();
          })
        );
        setComments(allComments.flat());
      } catch (error) {
        console.error("Error loading comments:", error);
      }
    };

    fetchComments();
  }, [provincia]);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Opiniones sobre {provincia}</h2>
      {comments.length > 0 ? (
        comments.map((comment) => (
          <div
            key={comment.id}
            className="flex items-start space-x-4 p-4 bg-white rounded shadow-md border border-gray-200"
          >
            {/* Imagen del usuario */}
            <img
              src={comment.foto_user}
              alt={comment.user}
              className="w-16 h-16 rounded-full border border-gray-300"
            />

            {/* Contenido del comentario */}
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <p className="font-medium text-gray-700">{comment.user}</p>
                <StarRating rating={comment.rating} />
              </div>
              <p className="text-sm text-gray-500">{comment.local_name}</p>
              <p className="text-gray-600 mt-2">{comment.opinion}</p>

              {/* Imagen del lugar */}
              {comment.foto_local && (
                <img
                  src={comment.foto_local}
                  alt={comment.local_name}
                  className="mt-4 w-full h-40 object-cover rounded"
                />
              )}
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No hay opiniones disponibles por ahora.</p>
      )}
    </div>
  );
}

export default Comments;
