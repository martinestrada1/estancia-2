"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActividadGrupalService = void 0;
const ActividadGrupalModel_1 = require("../models/ActividadGrupalModel");
class ActividadGrupalService {
    async getAllActividades() {
        return ActividadGrupalModel_1.ActividadGrupalModel.getAll();
    }
    async getActividadById(id) {
        return ActividadGrupalModel_1.ActividadGrupalModel.getById(id);
    }
    async createActividad(actividadData) {
        return ActividadGrupalModel_1.ActividadGrupalModel.create(actividadData);
    }
    async updateActividad(id, actividadData) {
        return ActividadGrupalModel_1.ActividadGrupalModel.update(id, actividadData);
    }
    async deleteActividad(id) {
        return ActividadGrupalModel_1.ActividadGrupalModel.delete(id);
    }
    async getDetallesActividad(idActividad) {
        return ActividadGrupalModel_1.ActividadGrupalModel.getDetallesByActividad(idActividad);
    }
}
exports.ActividadGrupalService = ActividadGrupalService;
