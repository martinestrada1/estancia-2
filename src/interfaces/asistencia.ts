export interface AsistenciaTutor {
    id: number;
    mes: string;
    corte: string;
    nombre_estudiante: string;
    firma_estudiante: string;
    tutor_nombre: string;
    carrera: string;
    grupo: string;
    fecha?: Date;
  }