const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/openai", async (req, res) => {
    try {
        console.log("Solicitud recibida en el servidor:", req.body);

        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer TU-APYKEY" // Reemplaza con tu clave API
            },
            body: JSON.stringify(req.body)
        });

        if (!response.ok) {
            throw new Error(`Error en OpenAI: ${response.statusText}`);
        }

        const data = await response.json();
        console.log("Respuesta de OpenAI:", data);
        res.json(data);
    } catch (error) {
        console.error("Error al conectar con OpenAI:", error);
        res.status(500).json({ error: "Error en el servidor", message: error.message });
    }
});

app.listen(3000, () => console.log("Servidor corriendo en http://localhost:3000"));
