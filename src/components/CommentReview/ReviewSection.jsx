import React from "react";
import ReviewCard from "./ReviewCard";
import AddReviewForm from "./AddReviewForm";

const ReviewSection = () => {
  const reviews = [
    {
      name: "Robert Karmazov",
      comment:
        "Auctor magnis proin vitae laoreet ultrices ultricies diam. Sed duis mattis.",
      rating: 5,
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Anna Smith",
      comment:
        "Sed ultricies dui eget lorem scelerisque, non mattis ipsum tincidunt.",
      rating: 4,
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Recent Feedbacks</h2>
      {reviews.map((review, index) => (
        <ReviewCard
          key={index}
          name={review.name}
          comment={review.comment}
          rating={review.rating}
          image={review.image}
        />
      ))}
      <AddReviewForm />
    </div>
  );
};

export default ReviewSection;

