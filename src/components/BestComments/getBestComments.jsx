//Best comments 
//recepcionista?
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getBestComments = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/best-comments`);
    if (!response.ok) throw new Error("Error al obtener los mejores comentarios");
    return await response.json();
  } catch (error) {
    console.error("Error fetching best comments:", error);
    return [];
  }
};