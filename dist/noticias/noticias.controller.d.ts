import { NoticiasService } from './noticias.service';
import { CreateNoticiaDto } from './dto/create-noticia.dto';
import { UpdateNoticiaDto } from './dto/update-noticia.dto';
export declare class NoticiasController {
    private readonly noticiasService;
    constructor(noticiasService: NoticiasService);
    create(createNoticiaDto: CreateNoticiaDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateNoticiaDto: UpdateNoticiaDto): string;
    remove(id: string): string;
}
