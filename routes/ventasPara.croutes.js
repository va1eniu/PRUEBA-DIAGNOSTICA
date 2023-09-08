import { obtenerTotalVentasParacetamol } from "../controllers/ventasParacetamol.controller.js";
import { Router } from "express";

const router =  Router();

router.get("/", obtenerTotalVentasParacetamol)

export default router;