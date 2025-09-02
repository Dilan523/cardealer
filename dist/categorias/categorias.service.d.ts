import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { PrismaService } from '../prisma/prisma.service';
export declare class CategoriasService {
    private prisma;
    constructor(prisma: PrismaService);
    private categorias;
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
    findOne(id: number): Promise<{
        nombre_categoria: string;
        estado: boolean;
        id_categoria: number;
        fecha_creacion: Date;
    }>;
    update(id: number, updateCategoriaDto: UpdateCategoriaDto): Promise<{
        success: boolean;
        data: {
            nombre_categoria: string;
            estado: boolean;
            id_categoria: number;
            fecha_creacion: Date;
        };
    }>;
    remove(id: number): Promise<{
        success: boolean;
        deleted_id: number;
    }>;
}
