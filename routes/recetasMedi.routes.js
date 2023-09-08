import { obtenerVentasDespuesDeEnero2023 } from "../controllers/recetasMedicas.controller.js";
import { Router } from "express";

const router =  Router();

router.get("/", obtenerVentasDespuesDeEnero2023)

export default router;