import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { Categoria } from './entities/categoria.entity';
import { PrismaService } from '../prisma/prisma.service';
export declare class CategoriasService {
    private prisma;
    constructor(prisma: PrismaService);
    private categorias;
    create(nuevaCategoria: any): any;
    findAll(): Categoria[];
    findOne(id: number): Categoria | undefined;
    update(id: number, UpdateCategoriaDto: UpdateCategoriaDto): string;
    remove(id: number): string;
}
