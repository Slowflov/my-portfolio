const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Endpoint для возврата координат
app.get("/api/location", (req, res) => {
    res.json({
        latitude: 48.8566, // Пример: Париж
        longitude: 2.3522,
    });
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
