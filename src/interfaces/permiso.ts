export interface PermisoTutoria {
    id: number;
    fecha_permiso: Date;
    motivo_permiso: string;
    nombre_alumno: string;
    matricula: string;
    cuatrimestre: string;
    materias_permiso: string;
    profesores_materias: string;
    evidencia: string | null;
  }