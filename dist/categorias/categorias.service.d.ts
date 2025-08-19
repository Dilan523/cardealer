import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { PrismaService } from '../prisma/prisma.service';
export declare class CategoriasService {
    private prisma;
    constructor(prisma: PrismaService);
    private categorias;
    create(nuevaCategoria: any): any;
    findAll(): import("generated/prisma").Prisma.PrismaPromise<{
        id_categoria: number;
        fecha_creacion: Date;
        estado: boolean;
        nombre_categoria: string;
    }[]>;
    findOne(id: number): void;
    update(id: number, UpdateCategoriaDto: UpdateCategoriaDto): string;
    remove(id: number): string;
}
