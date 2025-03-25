export interface InformacionGeneral {
    id: number;
    docente: string;
    carrera: string;
    asignatura: string;
    propositoAprendizaje?: string;
    tipoCompetencia?: string;
    modalidad?: string;
    creditos: number;
    cuatrimestre: number;
    periodoEscolar: string;
    horasTotales: number;
    horasSaber: number;
    horasSaberHacer: number;
    horasSemanales: number;
    grupo: string;
}
