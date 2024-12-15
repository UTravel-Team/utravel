import React, { useState } from 'react';

// Componente ReviewCard
function ReviewCard({ profileImg, name, joinDate, rating, comment, helpfulCount }) {
  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md">
      <img src={profileImg} alt="profile" className="w-12 h-12 rounded-full" />
      <div className="flex-1">
        <h4 className="font-bold">{name}</h4>
        <p className="text-sm text-gray-500">Joined: {joinDate}</p>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-4 ${i < rating ? 'fill-yellow-400' : 'fill-gray-300'}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 14 13"
            >
              <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
          ))}
        </div>
        <p className="text-gray-600 mt-2">{comment}</p>
        <div className="mt-2 text-sm text-gray-500">
          <span>{helpfulCount} found this helpful</span>
        </div>
      </div>
    </div>
  );
}

// Componente principal
function BlogPagination() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState(""); // Estado para manejar el comentario
  const [reviews, setReviews] = useState([ // Estado para manejar las reseñas
    {
      profileImg: "https://via.placeholder.com/150",
      name: "John Doe",
      joinDate: "March 3, 2017",
      rating: 4,
      comment: "This is an amazing product! Highly recommended.",
      helpfulCount: 19
    },
    {
      profileImg: "https://via.placeholder.com/150",
      name: "Jane Smith",
      joinDate: "April 15, 2020",
      rating: 5,
      comment: "Fantastic quality and quick delivery. Loved it!",
      helpfulCount: 42
    }
  ]);

  // Función para manejar el cambio en el comentario
  const handleCommentChange = (e) => {
    setComment(e.target.value); // Actualiza el estado del comentario
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    if (rating === 0 || comment.trim() === "") {
      alert("Please provide a rating and comment");
      return;
    }

    const newReview = {
      profileImg: "https://via.placeholder.com/150", // Placeholder, se puede modificar según el usuario
      name: "New User", // Puedes obtener el nombre del usuario dinámicamente
      joinDate: "December 15, 2024", // Fecha fija, pero puede cambiar
      rating,
      comment,
      helpfulCount: 0, // Inicialmente, no hay votos útiles
    };

    // Añadir la nueva reseña al array de reseñas
    setReviews([newReview, ...reviews]);
    setRating(0); // Reinicia la calificación
    setComment(""); // Reinicia el comentario
  };

  // Manejar la paginación
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 5;
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const currentReviews = reviews.slice(
    (currentPage - 1) * reviewsPerPage,
    currentPage * reviewsPerPage
  );

  return (
    <div className="max-w-4xl mx-auto bg-gray-100 p-6 font-[sans-serif] rounded-md">
      {/* Estadísticas de calificaciones */}
      <div className="grid sm:grid-cols-3 items-center gap-4 mb-6">
        <div className="flex flex-col items-center justify-center max-sm:mb-2">
          <h3 className="font-extrabold text-4xl">4.3</h3>
          <div className="mt-4 text-center">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-3 ${i < 4 ? 'fill-yellow-400' : 'fill-gray-300'} shrink-0`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14 13"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
              ))}
            </div>
            <p className="mt-1.5 text-gray-500 text-xs">5,456,852 reviews</p>
          </div>
        </div>
        <div className="space-y-1 sm:col-span-2">
          {[{ stars: 5, percentage: 66 }, { stars: 4, percentage: 33 }, { stars: 3, percentage: 16 }, { stars: 2, percentage: 8 }, { stars: 1, percentage: 6 }]
            .map((item) => (
              <div className="flex items-center" key={item.stars}>
                <p className="text-sm text-gray-500 font-bold">{item.stars}.0</p>
                <div className="bg-gray-300 rounded w-full h-3 ml-3">
                  <div
                    className="h-full rounded bg-yellow-400"
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
                <p className="text-sm font-bold ml-3">{item.percentage}%</p>
              </div>
            ))}
        </div>
      </div>

      {/* Reseñas */}
      <div>
        <h3 className="font-bold text-base mb-4">All Reviews</h3>
        <div className="space-y-4">
          {currentReviews.map((review, index) => (
            <ReviewCard
              key={index}
              profileImg={review.profileImg}
              name={review.name}
              joinDate={review.joinDate}
              rating={review.rating}
              comment={review.comment}
              helpfulCount={review.helpfulCount}
            />
          ))}
        </div>
      </div>

      {/* Paginación */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-yellow-400 text-white rounded-md mr-2"
        >
          Previous
        </button>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-yellow-400 text-white rounded-md"
        >
          Next
        </button>
      </div>

      {/* Agregar una reseña */}
      <div className="mt-8">
        <h3 className="text-lg font-bold">Add Your Review</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center gap-2">
            <label htmlFor="rating" className="text-sm">Your Rating:</label>
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                onClick={() => setRating(index + 1)} // Establece el valor de la calificación
                className={`w-6 ${index < rating ? "fill-yellow-400" : "fill-gray-300"} cursor-pointer`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 14 13"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
            ))}
          </div>
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 rounded border border-gray-300"
            />
          </div>
          <div>
            <textarea
              placeholder="Write your review..."
              value={comment}
              onChange={handleCommentChange}
              className="w-full p-2 rounded border border-gray-300"
            />
          </div>
          <button type="submit" className="w-full bg-yellow-400 text-white py-2 rounded-lg">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default BlogPagination;
