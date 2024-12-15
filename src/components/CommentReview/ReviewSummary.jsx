const ReviewSummary = () => {
    const ratings = [
        { label: "Malaga", value: 989, width: "w-[80%]" },
        { label: "Cadiz",   value: 1450, width: "w-[70%]" },
        { label: "Sevilla", value: 50, width: "w-[30%]" },
        { label: "Almeria", value: 16, width: "w-[15%]" },
        { label: "Granada", value: 8, width: "w-[10%]" },
        { label: "Huelva", value: 8, width: "w-[10%]" },
        { label: "Jaen", value: 8, width: "w-[10%]" },
        { label: "Cordoba", value: 344, width: "w-[10%]" },

    ];

    return (
        <div className="p-4">
            <div className="bg-yellow-50 p-6 rounded-md text-center mb-6">
                <p className="text-3xl font-bold">4.3</p>
                <div className="flex justify-center mt-2">
                    {[...Array(5)].map((_, i) => (
                        <span key={i} className={`text-yellow-400 text-2xl`}>
                            ★
                        </span>
                    ))}
                </div>
                <p className="text-gray-500 mt-1">" Rating based on 989 reviews "</p>
            </div>

            {ratings.map((rating, index) => (
                <div key={index} className="flex items-center gap-2 mb-2">
                    <p className="w-12">{rating.label}</p>
                    <div className="bg-gray-200 h-3 rounded-md w-full">
                        <div className={`bg-yellow-400 h-3 rounded-md ${rating.width}`}></div>
                    </div>
                    <p className="w-12 text-right">{rating.value}</p>
                </div>
            ))}
        </div>
    );
};

export default ReviewSummary;  
