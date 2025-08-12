import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    crearCarro(): string;
    actualizarCarro(id: string): string;
    eliminarCarro(id: string): string;
}
