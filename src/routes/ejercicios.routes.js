import { Router } from "express";
import {
  createEjercicio,
  deleteEjercicio,
  getEjercicios,
  getEjercicio,
  updateEjercicio,
} from "../controllers/ejercicios.controller.js";

const router = Router();

// GET All Ejercicios
router.get("/ejercicios", getEjercicios);

// GET Rutina
router.get("/ejercicios/:id", getEjercicio);

// DELETE Rutina
router.delete("/ejercicios/:id", deleteEjercicio);

// INSERT Rutina
router.post("/ejercicios", createEjercicio);

// UPDATE Rutina
router.patch("/ejercicios/:id", updateEjercicio);

export default router;
