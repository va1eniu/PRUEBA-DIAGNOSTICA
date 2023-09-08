import { obtenerTotalDineroRecaudado } from "../controllers/recaudado.controllers.js";
import { Router } from "express";

const router =  Router();

router.get("/", obtenerTotalDineroRecaudado)

export default router;