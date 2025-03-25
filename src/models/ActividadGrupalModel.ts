import pool from '../config/database';
import { ActividadGrupal, DetalleActividad } from '../interfaces/actividadGrupal';

export class ActividadGrupalModel {
  static async getAll(): Promise<ActividadGrupal[]> {
    const [rows] = await pool.query('SELECT * FROM actividades_grupales');
    return rows as ActividadGrupal[];
  }

  static async getById(id: number): Promise<ActividadGrupal | null> {
    const [rows] = await pool.query('SELECT * FROM actividades_grupales WHERE id = ?', [id]);
    return (rows as ActividadGrupal[])[0] || null;
  }

  static async create(actividad: Omit<ActividadGrupal, 'id'>): Promise<number> {
    const [result] = await pool.query(
      'INSERT INTO actividades_grupales SET ?',
      [actividad]
    );
    return (result as any).insertId;
  }

  static async update(id: number, actividad: Partial<ActividadGrupal>): Promise<boolean> {
    const [result] = await pool.query(
      'UPDATE actividades_grupales SET ? WHERE id = ?',
      [actividad, id]
    );
    return (result as any).affectedRows > 0;
  }

  static async delete(id: number): Promise<boolean> {
    const [result] = await pool.query('DELETE FROM actividades_grupales WHERE id = ?', [id]);
    return (result as any).affectedRows > 0;
  }

  static async getDetallesByActividad(idActividad: number): Promise<DetalleActividad[]> {
    const [rows] = await pool.query(
      'SELECT * FROM detalles_actividad WHERE id_actividad = ?',
      [idActividad]
    );
    return rows as DetalleActividad[];
  }
}