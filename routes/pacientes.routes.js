import { getCreyente } from "../controllers/pacientes.comtroller.js";
import { Router } from "express";

const router =  Router();

router.get("/", getCreyente)

export default router;