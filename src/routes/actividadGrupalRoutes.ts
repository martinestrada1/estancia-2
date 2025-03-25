import { Router } from 'express';
import { ActividadGrupalController } from '../controllers/ActividadGrupalController';

const router = Router();
const controller = new ActividadGrupalController();

router.get('/', controller.getAll.bind(controller));
router.get('/:id', controller.getById.bind(controller));
router.post('/', controller.create.bind(controller));
router.put('/:id', controller.update.bind(controller));
router.delete('/:id', controller.delete.bind(controller));
router.get('/:idActividad/detalles', controller.getDetalles.bind(controller));

export default router;