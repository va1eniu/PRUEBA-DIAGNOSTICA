import { getCreyente } from "../controllers/ventas.controller.js";
import { Router } from "express";

const router =  Router();

router.get("/", getCreyente)

export default router;