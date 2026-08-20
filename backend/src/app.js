import "dotenv/config";
import cors from "cors";
import express from "express";
import routes from "./routes/index.js";

const app = express();

const allowedOrigins = [
  process.env.FRONTEND_URL,
  "http://localhost:5173",
  "http://127.0.0.1:5173"
].filter(Boolean);

app.use(
  cors({
    origin(origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) return callback(null, true);
      return callback(new Error(`Origem não permitida pelo CORS: ${origin}`));
    },
    methods: ["GET", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).json({
    name: "Portfolio Jhullia API",
    status: "online",
    endpoints: [
      "GET /api/health",
      "GET /api/certificados",
      "GET /api/certificados/:id"
    ]
  });
});

app.use("/api", routes);

app.use((req, res) => {
  return res.status(404).json({ success: false, message: "Rota não encontrada." });
});

app.use((error, req, res, next) => {
  console.error("Erro não tratado:", error);

  if (error.message?.startsWith("Origem não permitida pelo CORS")) {
    return res.status(403).json({ success: false, message: error.message });
  }

  return res.status(500).json({
    success: false,
    message: "Erro interno do servidor."
  });
});

export default app;
