import { Request, Response } from 'express';
import { ActividadGrupalService } from '../services/ActividadGrupalService';

export class ActividadGrupalController {
  private service = new ActividadGrupalService();

  async getAll(req: Request, res: Response) {
    try {
      const actividades = await this.service.getAllActividades();
      res.json(actividades);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener actividades grupales' });
    }
  }

  async getById(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    try {
      const actividad = await this.service.getActividadById(id);
      if (actividad) {
        res.json(actividad);
      } else {
        res.status(404).json({ error: 'Actividad no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener la actividad' });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const newId = await this.service.createActividad(req.body);
      res.status(201).json({ id: newId });
    } catch (error) {
      res.status(500).json({ error: 'Error al crear la actividad' });
    }
  }

  async update(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    try {
      const success = await this.service.updateActividad(id, req.body);
      if (success) {
        res.json({ message: 'Actividad actualizada correctamente' });
      } else {
        res.status(404).json({ error: 'Actividad no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar la actividad' });
    }
  }

  async delete(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    try {
      const success = await this.service.deleteActividad(id);
      if (success) {
        res.json({ message: 'Actividad eliminada correctamente' });
      } else {
        res.status(404).json({ error: 'Actividad no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar la actividad' });
    }
  }

  async getDetalles(req: Request, res: Response) {
    const idActividad = parseInt(req.params.idActividad);
    try {
      const detalles = await this.service.getDetallesActividad(idActividad);
      res.json(detalles);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los detalles de la actividad' });
    }
  }
}