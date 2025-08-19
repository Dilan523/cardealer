import { CategoriasService } from './categorias.service';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
export declare class CategoriasController {
    private readonly categoriasService;
    constructor(categoriasService: CategoriasService);
    create(createCategoriaDto: CreateCategoriaDto): Promise<{
        fecha_creacion: Date;
        estado: boolean;
        nombre_categoria: string;
        id_categoria: number;
    }>;
    findAll(): import("generated/prisma").Prisma.PrismaPromise<{
        fecha_creacion: Date;
        estado: boolean;
        nombre_categoria: string;
        id_categoria: number;
    }[]>;
    findOne(id: string): Promise<{
        fecha_creacion: Date;
        estado: boolean;
        nombre_categoria: string;
        id_categoria: number;
    }>;
    update(id: string, updateCategoriaDto: UpdateCategoriaDto): string;
    remove(id: string): string;
}
