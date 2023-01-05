import { pool } from "../db.js";

export const getEjercicios = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM ejercicios");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Error al obtener los ejercicios" });
  }
};

export const getEjercicio = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("SELECT * FROM ejercicios WHERE id = ?", [
      id,
    ]);

    if (rows.length <= 0) {
      return res.status(404).json({ message: "Ejercicio no encontrada" });
    }

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Error al obtener el ejercicio" });
  }
};

export const deleteEjercicio = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("DELETE FROM ejercicios WHERE id = ?", [id]);

    if (rows.affectedRows <= 0) {
      return res.status(404).json({ message: "Ejercicio no encontrado" });
    }

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: "Error al eliminar el ejercicio" });
  }
};

export const createEjercicio = async (req, res) => {
  try {
    const { rutina, nombre, descripcion, color, archivado, creador, series, repeticiones, peso, totaloporlado } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO ejercicios (rutina, nombre, descripcion, color, archivado, creador, series, repeticiones, peso, totaloporlado) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [rutina, nombre, descripcion, color, archivado, creador, series, repeticiones, peso, totaloporlado]
    );
    res.status(201).json({ id: rows.insertId, rutina, nombre, descripcion, color, archivado, creador, series, repeticiones, peso, totaloporlado });
  } catch (error) {
    return res.status(500).json({ message: "Error al crear ejercicio" });
  }
};

export const updateEjercicio = async (req, res) => {
  try {
    const { id } = req.params;
    const { rutina, nombre, descripcion, color, archivado, creador, series, repeticiones, peso, totaloporlado } = req.body;

    const [result] = await pool.query(
      "UPDATE ejercicios SET rutina = IFNULL(?, rutina), nombre = IFNULL(?, nombre), descripcion = IFNULL(?, descripcion), color = IFNULL(?, color), archivado = IFNULL(?, archivado), creador = IFNULL(?, creador), series = IFNULL(?, series), repeticiones = IFNULL(?, repeticiones), peso = IFNULL(?, peso), totaloporlado = IFNULL(?, totaloporlado) WHERE id = ?",
      [rutina, nombre, descripcion, color, archivado, creador, series, repeticiones, peso, totaloporlado, id]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Ejercicio no encontrado" });

    const [rows] = await pool.query("SELECT * FROM ejercicios WHERE id = ?", [
      id,
    ]);

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Error al actualizar el ejercicio" });
  }
};
