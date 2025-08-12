import { CategoriasService } from './categorias.service';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
export declare class CategoriasController {
    private readonly categoriasService;
    constructor(categoriasService: CategoriasService);
    create(createCategoriaDto: CreateCategoriaDto): any;
    findAll(): import("./entities/categoria.entity").Categoria[];
    findOne(id: string): import("./entities/categoria.entity").Categoria | undefined;
    update(id: string, updateCategoriaDto: UpdateCategoriaDto): string;
    remove(id: string): string;
}
