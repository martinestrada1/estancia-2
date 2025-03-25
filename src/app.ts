import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import actividadGrupalRoutes from './routes/actividadGrupalRoutes';
import asistenciaRoutes from './routes/actividadGrupalRoutes';
import permisoRoutes from './routes/actividadGrupalRoutes';
import materiaAtrasadaRoutes from './routes//actividadGrupalRoutes';


class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  private config(): void {
    this.app.use(morgan('dev'));
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  private routes(): void {
    this.app.use('/api/actividades-grupales', actividadGrupalRoutes);
    this.app.use('/api/asistencias', asistenciaRoutes);
    this.app.use('/api/permisos', permisoRoutes);
    this.app.use('/api/materias-atrasadas', materiaAtrasadaRoutes);
    

    // Ruta de prueba
    this.app.get('/api/ping', (req, res) => {
      res.send('pong');
    });
  }
}

export default new App().app;