import { CreateNoticiaDto } from './dto/create-noticia.dto';
import { UpdateNoticiaDto } from './dto/update-noticia.dto';
export declare class NoticiasService {
    create(createNoticiaDto: CreateNoticiaDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateNoticiaDto: UpdateNoticiaDto): string;
    remove(id: number): string;
}
