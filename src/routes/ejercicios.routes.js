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
router.get("/get", getEjercicios);

// GET Ejercicio
router.get("/get/:id", getEjercicio);

// DELETE Ejercicio
router.delete("/delete/:id", deleteEjercicio);

// INSERT Ejercicio
router.post("/post", createEjercicio);

// UPDATE Ejercicio
router.patch("/patch/:id", updateEjercicio);

export default router;
