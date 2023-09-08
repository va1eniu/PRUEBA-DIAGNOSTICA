import { obtenerMedicamentosCaducados } from "../controllers/expiracion.controller.js";
import { Router } from "express";

const router =  Router();

router.get("/", obtenerMedicamentosCaducados)

export default router;