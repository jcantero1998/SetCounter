import express from "express";
import morgan from "morgan";

import rutinasRoutes from "./routes/rutinas.routes.js";
import ejerciciosRoutes from "./routes/ejercicios.routes.js";

import indexRoutes from "./routes/index.routes.js";

const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/", indexRoutes);
app.use("/rutinas", rutinasRoutes);
app.use("/ejercicios", ejerciciosRoutes);
app.use((req, res, next) => {
  res.status(404).json({ message: "Not found" });
});

export default app;