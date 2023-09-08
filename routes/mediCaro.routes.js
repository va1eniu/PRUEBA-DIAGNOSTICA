import express from "express";
import { obtenerMedicamentoMasCaro } from "../controllers/mediCao.controller.js";

const router = express.Router();

router.get("/", obtenerMedicamentoMasCaro);

export default router;
