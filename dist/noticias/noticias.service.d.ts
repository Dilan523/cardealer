import { UpdateNoticiaDto } from './dto/update-noticia.dto';
import { Noticia } from './entities/noticia.entity';
export declare class NoticiasService {
    private clientes;
    create(nuevaNoticia: any): any;
    findAll(): Noticia[];
    findOne(id: number): Noticia | undefined;
    update(id: number, updateNoticiaDto: UpdateNoticiaDto): string;
    remove(id: number): string;
}
