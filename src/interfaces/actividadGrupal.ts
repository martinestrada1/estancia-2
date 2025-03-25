export interface ActividadGrupal {
    id: number;
    actividad: string;
    descripcion: string;
    fecha_inicio: Date;
    fecha_fin: Date;
    estudiante_id: number;
    carrera: string;
    grupo: string;
    tutor_nombre: string;
  }
  
  export interface DetalleActividad {
    id: number;
    id_actividad: number;
    objetivo: string;
    desarrollo: string;
    observaciones: string;
    estatus_actividad: 'Pendiente' | 'En Proceso' | 'Completada';
  }