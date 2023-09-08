import { obtenerTotalMedicamentosPorProveedor } from "../controllers/total.ventas.controllers.js";
import { Router } from "express";

const router =  Router();

router.get("/", obtenerTotalMedicamentosPorProveedor)

export default router;