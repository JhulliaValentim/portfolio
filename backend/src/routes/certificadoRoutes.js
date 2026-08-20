import { Router } from "express";
import {
  buscarPorId,
  listar
} from "../controllers/certificadoController.js";

const router = Router();

router.get("/", listar);
router.get("/:id", buscarPorId);

export default router;
