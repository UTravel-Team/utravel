const AddReviewForm = () => {
    return (
      <form className="p-4 bg-gray-50 rounded-md shadow-sm">
        <h3 className="font-bold text-lg mb-4">Add a Review</h3>
        <label className="block mb-2">
          <span className="text-gray-700">Name</span>
          <input
            type="text"
            className="w-full mt-1 p-2 border rounded-md"
            placeholder="Your name"
          />
        </label>
        <label className="block mb-2">
          <span className="text-gray-700">Email</span>
          <input
            type="email"
            className="w-full mt-1 p-2 border rounded-md"
            placeholder="Your email"
          />
        </label>
        <label className="block mb-2">
          <span className="text-gray-700">Write Your Review</span>
          <textarea
            rows="3"
            className="w-full mt-1 p-2 border rounded-md"
            placeholder="Write your comment here..."
          ></textarea>
        </label>
        <button
          type="submit"
          className="bg-yellow-400 text-white w-full p-2 rounded-md mt-2 font-semibold"
        >
          Submit
        </button>
      </form>
    );
  };
  
  export default AddReviewForm;  