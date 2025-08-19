import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { PrismaService } from '../prisma/prisma.service';
export declare class CategoriasService {
    private prisma;
    constructor(prisma: PrismaService);
    private categorias;
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
    findOne(id: number): Promise<{
        fecha_creacion: Date;
        estado: boolean;
        nombre_categoria: string;
        id_categoria: number;
    }>;
    update(id: number, UpdateCategoriaDto: UpdateCategoriaDto): string;
    remove(id: number): string;
}
