import { CategoriasService } from './categorias.service';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
export declare class CategoriasController {
    private readonly categoriasService;
    constructor(categoriasService: CategoriasService);
    create(createCategoriaDto: CreateCategoriaDto): Promise<{
        success: boolean;
        data: {
            nombre_categoria: string;
            estado: boolean;
            id_categoria: number;
            fecha_creacion: Date;
        };
    }>;
    findAll(): Promise<{
        success: boolean;
        data: {
            nombre_categoria: string;
            estado: boolean;
            id_categoria: number;
            fecha_creacion: Date;
        }[];
    }>;
    findOne(id: string): Promise<{
        nombre_categoria: string;
        estado: boolean;
        id_categoria: number;
        fecha_creacion: Date;
    }>;
    update(id: string, updateCategoriaDto: UpdateCategoriaDto): Promise<{
        success: boolean;
        data: {
            nombre_categoria: string;
            estado: boolean;
            id_categoria: number;
            fecha_creacion: Date;
        };
    }>;
    remove(id: string): Promise<{
        success: boolean;
        deleted_id: number;
    }>;
}
