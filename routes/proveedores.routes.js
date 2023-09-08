import { getCreyente } from "../controllers/proveedores.controllers.js";
import { Router } from "express";

const router =  Router();

router.get("/", getCreyente)

export default router;