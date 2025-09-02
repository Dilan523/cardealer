"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriasService = void 0;
const common_1 = require("@nestjs/common");
const categoria_entity_1 = require("./entities/categoria.entity");
const prisma_service_1 = require("../prisma/prisma.service");
let CategoriasService = class CategoriasService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    categorias = [
        new categoria_entity_1.Categoria(1, new Date('2023-10-01'), true, 'Deportes'),
        new categoria_entity_1.Categoria(2, new Date('2023-10-02'), true, 'Cultura'),
        new categoria_entity_1.Categoria(3, new Date('2023-10-03'), true, 'Bienestar'),
    ];
    async create(createCategoriaDto) {
        const categoriaExist = await this.prisma.categorias.findFirst({
            where: { nombre_categoria: createCategoriaDto.nombre_categoria },
        });
        if (categoriaExist) {
            throw new common_1.HttpException({ success: false, error: 'La categoría ya existe' }, 400);
        }
        const categoriaCreada = await this.prisma.categorias.create({
            data: {
                nombre_categoria: createCategoriaDto.nombre_categoria,
                estado: createCategoriaDto.estado ?? true,
            },
        });
        return {
            success: true,
            data: categoriaCreada,
        };
    }
    async findAll() {
        const resultadosCategorias = await this.prisma.categorias.findMany({
            orderBy: [{ nombre_categoria: 'desc' }],
        });
        if (resultadosCategorias.length === 0) {
            throw new common_1.HttpException({ success: false, error: 'Categorías no encontradas' }, 404);
        }
        return {
            success: true,
            data: resultadosCategorias,
        };
    }
    async findOne(id) {
        const categoria = await this.prisma.categorias.findFirst({
            where: { id_categoria: id },
            orderBy: [{ nombre_categoria: 'asc' }, { id_categoria: 'desc' }],
        });
        if (!categoria) {
            throw new common_1.HttpException({ success: false, error: 'Categoría no encontrada' }, 404);
        }
        return categoria;
    }
    async update(id, updateCategoriaDto) {
        const categoria = await this.findOne(id);
        const categoriaActualizada = await this.prisma.categorias.update({
            where: { id_categoria: categoria.id_categoria },
            data: updateCategoriaDto,
        });
        return {
            success: true,
            data: categoriaActualizada,
        };
    }
    async remove(id) {
        const categoriaBorrar = await this.findOne(id);
        if (!categoriaBorrar) {
            throw new common_1.HttpException({ success: false, error: 'Categoria a borrar no encontrada' }, 404);
        }
        else {
            await this.prisma.categorias.delete({
                where: { id_categoria: id },
            });
            return {
                success: true,
                deleted_id: id,
            };
        }
    }
};
exports.CategoriasService = CategoriasService;
exports.CategoriasService = CategoriasService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CategoriasService);
//# sourceMappingURL=categorias.service.js.map