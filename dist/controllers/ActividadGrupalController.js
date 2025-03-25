"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActividadGrupalController = void 0;
const ActividadGrupalService_1 = require("../services/ActividadGrupalService");
class ActividadGrupalController {
    constructor() {
        this.service = new ActividadGrupalService_1.ActividadGrupalService();
    }
    async getAll(req, res) {
        try {
            const actividades = await this.service.getAllActividades();
            res.json(actividades);
        }
        catch (error) {
            res.status(500).json({ error: 'Error al obtener actividades grupales' });
        }
    }
    async getById(req, res) {
        const id = parseInt(req.params.id);
        try {
            const actividad = await this.service.getActividadById(id);
            if (actividad) {
                res.json(actividad);
            }
            else {
                res.status(404).json({ error: 'Actividad no encontrada' });
            }
        }
        catch (error) {
            res.status(500).json({ error: 'Error al obtener la actividad' });
        }
    }
    async create(req, res) {
        try {
            const newId = await this.service.createActividad(req.body);
            res.status(201).json({ id: newId });
        }
        catch (error) {
            res.status(500).json({ error: 'Error al crear la actividad' });
        }
    }
    async update(req, res) {
        const id = parseInt(req.params.id);
        try {
            const success = await this.service.updateActividad(id, req.body);
            if (success) {
                res.json({ message: 'Actividad actualizada correctamente' });
            }
            else {
                res.status(404).json({ error: 'Actividad no encontrada' });
            }
        }
        catch (error) {
            res.status(500).json({ error: 'Error al actualizar la actividad' });
        }
    }
    async delete(req, res) {
        const id = parseInt(req.params.id);
        try {
            const success = await this.service.deleteActividad(id);
            if (success) {
                res.json({ message: 'Actividad eliminada correctamente' });
            }
            else {
                res.status(404).json({ error: 'Actividad no encontrada' });
            }
        }
        catch (error) {
            res.status(500).json({ error: 'Error al eliminar la actividad' });
        }
    }
    async getDetalles(req, res) {
        const idActividad = parseInt(req.params.idActividad);
        try {
            const detalles = await this.service.getDetallesActividad(idActividad);
            res.json(detalles);
        }
        catch (error) {
            res.status(500).json({ error: 'Error al obtener los detalles de la actividad' });
        }
    }
}
exports.ActividadGrupalController = ActividadGrupalController;
