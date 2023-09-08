import { Router } from "express";
import { obtenerAcciones/*  agregarAcciones, borrarAcciones, oneAccion, actualizarAcciones */ } from "../controllers/compras.controllers.js";

const router = Router();

router.get("/", obtenerAcciones);

/* router.post("/", agregarAcciones);

router.delete("/:id", borrarAcciones);

router.patch("/:id", actualizarAcciones);

router.get("/", oneAccion); */

export default router;