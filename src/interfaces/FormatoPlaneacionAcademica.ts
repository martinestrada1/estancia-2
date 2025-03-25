export interface FormatoPlaneacionAcademica  {
    id: number;
  docente: string;
  carrera: string;
  nombre_asignatura: string;
  tipo_competencia?: string;
  modalidad?: string;
  creditos: number;
  cuatrimestre: string;
  competencia_asignatura?: string;
  proposito_aprendizaje?: string;
  periodo_escolar: string;
  horas_totales: number;
  horas_del_saber: number;
  horas_del_saber_p: number;
  horas_del_saber_np: number;
  horas_del_saber_hacer: number;
  horas_del_saber_hacer_p: number;
  horas_del_saber_hacer_np: number;
  horas_semanales: number;
  grupo: string;
  unidad_aprendizaje?: string;
  proposito_esperado?: string;
  evidencia_desempeno?: string;
  }