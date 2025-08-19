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
        return await this.prisma.categorias.create({
            data: {
                nombre_categoria: createCategoriaDto.nombre_categoria,
                estado: createCategoriaDto.estado ?? true,
            },
        });
    }
    findAll() {
        return this.prisma.categorias.findMany({
            orderBy: [{ nombre_categoria: 'desc' }],
        });
    }
    async findOne(id) {
        let marca = await this.prisma.categorias.findFirst({
            where: { id_categoria: id },
            orderBy: [{ nombre_categoria: 'asc' }, { id_categoria: 'desc' }],
        });
        if (!marca) {
            throw new common_1.HttpException({
                status: 404,
                error: 'Categoria no encontrada',
            }, 404);
        }
        else {
            return marca;
        }
    }
    update(id, UpdateCategoriaDto) {
        return `This action updates a #${id} categoria`;
    }
    remove(id) {
        this.categorias = this.categorias.filter(function (Categoria) {
            return Categoria.id !== id;
        });
        return `Categoria con id ${id} eliminada`;
    }
};
exports.CategoriasService = CategoriasService;
exports.CategoriasService = CategoriasService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CategoriasService);
//# sourceMappingURL=categorias.service.js.map