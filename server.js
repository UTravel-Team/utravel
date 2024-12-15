// server.js
require("dotenv").config(); // Cargar variables del archivo .env
const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());

// Endpoint para obtener comentarios según provincia y categoría
app.get("/api/comments/:province/:category", (req, res) => {
  const { province, category } = req.params;
  const filePath = path.join(
    __dirname,
    "public",
    "data",
    "comments",
    province,
    `${province}${category}.json`
  );

  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(404).json({ error: "No se encontró el archivo solicitado." });
    }
  });
});

// Endpoint para obtener los mejores comentarios de todas las provincias
app.get("/api/best-comments", (req, res) => {
  const provinces = ["Almeria"]; // Agrega todas las provincias aquí
  const categories = ["Culture", "Ent", "Host", "Street", "Party", "Eat"];
  const comments = [];

  provinces.forEach((province) => {
    categories.forEach((category) => {
      const filePath = path.join(
        __dirname,
        "public",
        "data",
        "comments",
        province,
        `${province}${category}.json`
      );

      try {
        const data = require(filePath);
        const bestComments = data.comentarios.filter(
          (comment) => comment.rating === "★★★★★"
        );
        comments.push(...bestComments);
      } catch (err) {
        console.error(`Error loading ${filePath}: ${err.message}`);
      }
    });
  });

  res.json(comments.slice(0, 10)); // Devuelve hasta 10 comentarios.
});

// Servir el cliente (React)
app.use(express.static(path.join(__dirname, "build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Iniciar el servidor
const PORT = process.env.PORT || 5000; // Usa el puerto de .env si está configurado
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
