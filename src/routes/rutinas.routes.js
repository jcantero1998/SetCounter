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
router.get("/get", getRutinas);

// GET Rutina
router.get("/get/:id", getRutina);

// DELETE Rutina
router.delete("/delete/:id", deleteRutina);

// INSERT Rutina
router.post("/post", createRutina);

// UPDATE Rutina
router.patch("/patch/:id", updateRutina);

export default router;
