import "dotenv/config";
import app from "./src/app.js";

const PORT = Number(process.env.PORT) || 8080;

app.listen(PORT, () => {
  console.log(`API do portfólio rodando em http://localhost:${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
  console.log(`Certificados: http://localhost:${PORT}/api/certificados`);
});
