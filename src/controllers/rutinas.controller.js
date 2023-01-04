import { pool } from "../db.js";

export const getRutinas = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM rutinas");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Error al obtener rutinas" });
  }
};

export const getRutina = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("SELECT * FROM rutinas WHERE id = ?", [
      id,
    ]);

    if (rows.length <= 0) {
      return res.status(404).json({ message: "Rutina no encontrada" });
    }

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Error al obtener rutinas" });
  }
};

export const deleteRutina = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("DELETE FROM rutinas WHERE id = ?", [id]);

    if (rows.affectedRows <= 0) {
      return res.status(404).json({ message: "Rutina no encontrada" });
    }

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: "Error al eliminar rutinas" });
  }
};

export const createRutina = async (req, res) => {
  try {
    const { nombre, descripcion, color, archivado, creador } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO rutinas (nombre, descripcion, color, archivado, creador) VALUES (?, ?)",
      [nombre, descripcion, color, archivado, creador]
    );
    res.status(201).json({ id: rows.insertId, nombre, descripcion, color, archivado, creador });
  } catch (error) {
    return res.status(500).json({ message: "Error al crear rutinas" });
  }
};

export const updateRutina = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, descripcion, color, archivado, creador } = req.body;

    const [result] = await pool.query(
      "UPDATE rutinas SET nombre = IFNULL(?, nombre), descripcion, color, archivado, creador = IFNULL(?, descripcion, color, archivado, creador) WHERE id = ?",
      [nombre, descripcion, color, archivado, creador, id]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Rutina no encontrada" });

    const [rows] = await pool.query("SELECT * FROM rutinas WHERE id = ?", [
      id,
    ]);

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Error al actualizar rutinas" });
  }
};
