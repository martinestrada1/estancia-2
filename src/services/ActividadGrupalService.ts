import { ActividadGrupalModel } from '../models/ActividadGrupalModel';
import { ActividadGrupal, DetalleActividad } from '../interfaces/actividadGrupal';

export class ActividadGrupalService {
  async getAllActividades(): Promise<ActividadGrupal[]> {
    return ActividadGrupalModel.getAll();
  }

  async getActividadById(id: number): Promise<ActividadGrupal | null> {
    return ActividadGrupalModel.getById(id);
  }

  async createActividad(actividadData: Omit<ActividadGrupal, 'id'>): Promise<number> {
    return ActividadGrupalModel.create(actividadData);
  }

  async updateActividad(id: number, actividadData: Partial<ActividadGrupal>): Promise<boolean> {
    return ActividadGrupalModel.update(id, actividadData);
  }

  async deleteActividad(id: number): Promise<boolean> {
    return ActividadGrupalModel.delete(id);
  }

  async getDetallesActividad(idActividad: number): Promise<DetalleActividad[]> {
    return ActividadGrupalModel.getDetallesByActividad(idActividad);
  }
}