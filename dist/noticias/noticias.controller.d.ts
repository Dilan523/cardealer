import { NoticiasService } from './noticias.service';
import { UpdateNoticiaDto } from './dto/update-noticia.dto';
export declare class NoticiasController {
    private readonly noticiasService;
    constructor(noticiasService: NoticiasService);
    create(body: any): any;
    findAll(): import("./entities/noticia.entity").Noticia[];
    findOne(id: string): import("./entities/noticia.entity").Noticia | undefined;
    update(id: string, updateNoticiaDto: UpdateNoticiaDto): string;
    remove(id: string): string;
}
