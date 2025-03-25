"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActividadGrupalModel = void 0;
const database_1 = __importDefault(require("../config/database"));
class ActividadGrupalModel {
    static async getAll() {
        const [rows] = await database_1.default.query('SELECT * FROM actividades_grupales');
        return rows;
    }
    static async getById(id) {
        const [rows] = await database_1.default.query('SELECT * FROM actividades_grupales WHERE id = ?', [id]);
        return rows[0] || null;
    }
    static async create(actividad) {
        const [result] = await database_1.default.query('INSERT INTO actividades_grupales SET ?', [actividad]);
        return result.insertId;
    }
    static async update(id, actividad) {
        const [result] = await database_1.default.query('UPDATE actividades_grupales SET ? WHERE id = ?', [actividad, id]);
        return result.affectedRows > 0;
    }
    static async delete(id) {
        const [result] = await database_1.default.query('DELETE FROM actividades_grupales WHERE id = ?', [id]);
        return result.affectedRows > 0;
    }
    static async getDetallesByActividad(idActividad) {
        const [rows] = await database_1.default.query('SELECT * FROM detalles_actividad WHERE id_actividad = ?', [idActividad]);
        return rows;
    }
}
exports.ActividadGrupalModel = ActividadGrupalModel;
