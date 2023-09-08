import express from "express";
import { obtenerMedicamentosBajoStock } from "../controllers/medicamentos.controllers.js";

const router = express.Router();

router.get("/", obtenerMedicamentosBajoStock);

export default router;
