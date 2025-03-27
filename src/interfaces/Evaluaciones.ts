export interface Evaluaciones {
    id: number;
    idUnidad: number;
    tema: string;
    semanaEntrega: number;
    nombreActividad: string;
    descripcion?: string;
    instrumentoEvaluacion?: string;
    ponderacion: number;
    fechaVencimiento: string;
}