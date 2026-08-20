import { Router } from "express";
import certificadoRoutes from "./certificadoRoutes.js";

const router = Router();

router.get("/health", (req, res) => {
  return res.status(200).json({
    success: true,
    status: "online",
    message: "API do portfólio está funcionando."
  });
});

router.use(
  "/certificados",
  certificadoRoutes
);

export default router;