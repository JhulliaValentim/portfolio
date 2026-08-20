import "dotenv/config";

import cors from "cors";
import express from "express";

import routes from "./routes/index.js";

const app = express();

function normalizarOrigem(url) {
  return url?.trim().replace(/\/$/, "");
}

const originsFromEnv = (
  process.env.FRONTEND_URLS ||
  process.env.FRONTEND_URL ||
  ""
)
  .split(",")
  .map(normalizarOrigem)
  .filter(Boolean);

const allowedOrigins = new Set([
  "http://localhost:5173",
  "http://127.0.0.1:5173",
  ...originsFromEnv
]);

app.use(
  cors({
    origin(origin, callback) {
      if (!origin) {
        return callback(null, true);
      }

      const normalizedOrigin =
        normalizarOrigem(origin);

      if (
        allowedOrigins.has(
          normalizedOrigin
        )
      ) {
        return callback(null, true);
      }

      console.warn(
        `CORS bloqueou: ${origin}`
      );

      return callback(
        new Error(
          `Origem não permitida pelo CORS: ${origin}`
        )
      );
    },

    methods: [
      "GET",
      "OPTIONS"
    ],

    allowedHeaders: [
      "Content-Type",
      "Authorization"
    ]
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    name: "Portfolio Jhullia API",
    status: "online",
    endpoints: [
      "/api/health",
      "/api/certificados",
      "/api/certificados/:id"
    ]
  });
});

app.use(
  "/api",
  routes
);

app.use((req, res) => {
  return res.status(404).json({
    success: false,
    message: "Rota não encontrada."
  });
});

app.use(
  (error, req, res, next) => {
    console.error(
      "Erro interno da API:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        error.message ||
        "Erro interno do servidor."
    });
  }
);

export default app;