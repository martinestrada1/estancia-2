"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const actividadGrupalRoutes_1 = __importDefault(require("./routes/actividadGrupalRoutes"));
const actividadGrupalRoutes_2 = __importDefault(require("./routes/actividadGrupalRoutes"));
const actividadGrupalRoutes_3 = __importDefault(require("./routes/actividadGrupalRoutes"));
const actividadGrupalRoutes_4 = __importDefault(require("./routes//actividadGrupalRoutes"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/api/actividades-grupales', actividadGrupalRoutes_1.default);
        this.app.use('/api/asistencias', actividadGrupalRoutes_2.default);
        this.app.use('/api/permisos', actividadGrupalRoutes_3.default);
        this.app.use('/api/materias-atrasadas', actividadGrupalRoutes_4.default);
        // Ruta de prueba
        this.app.get('/api/ping', (req, res) => {
            res.send('pong');
        });
    }
}
exports.default = new App().app;
