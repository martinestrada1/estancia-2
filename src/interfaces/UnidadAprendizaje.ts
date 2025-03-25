export interface UnidadesAprendizaje {
    id: number;
    unidad: string;
    propositoEsperado?: string;
    evidenciaDesempeno?: string;
    espacioFormativo: 'Aula' | 'Laboratorio/Taller' | 'Empresa';
    semanaInicio: number;
    semanaTermino: number;
}