import { Router } from "express";
import {
  createRutina,
  deleteRutina,
  getRutinas,
  getRutina,
  updateRutina,
} from "../controllers/rutinas.controller.js";

const router = Router();

// GET All Rutinas
router.get("/rutinas", getRutinas);

// GET Rutina
router.get("/rutinas/:id", getRutina);

// DELETE Rutina
router.delete("/rutinas/:id", deleteRutina);

// INSERT Rutina
router.post("/rutinas", createRutina);

// UPDATE Rutina
router.patch("/rutinas/:id", updateRutina);

export default router;
