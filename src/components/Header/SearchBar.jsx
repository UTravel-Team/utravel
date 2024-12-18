import react from "react";

function SearchBar(){
    return (

        <div className="flex justify-start gap-4">
            <input
                type="text"
                placeholder="Busca tu provincia"
                className="border rounded-full p-2 w-72 focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Buscar"
            /> 
        
        </div>
    );
}

export default SearchBar;
