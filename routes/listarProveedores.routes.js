import express from "express";
import { listarProveedoresMedicamentos } from "../controllers/listasProveedores.controllers.js";

const router = express.Router();

router.get("/", listarProveedoresMedicamentos);

export default router;
