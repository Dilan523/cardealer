"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriasService = void 0;
const common_1 = require("@nestjs/common");
const categoria_entity_1 = require("./entities/categoria.entity");
let CategoriasService = class CategoriasService {
    categorias = [
        new categoria_entity_1.Categoria(1, new Date('2023-10-01'), true, 'Deportes'),
        new categoria_entity_1.Categoria(2, new Date('2023-10-02'), true, 'Cultura'),
        new categoria_entity_1.Categoria(3, new Date('2023-10-03'), true, 'Bienestar'),
    ];
    create(nuevaCategoria) {
        this.categorias.push(nuevaCategoria);
        return nuevaCategoria;
    }
    findAll() {
        return this.categorias;
    }
    findOne(id) {
        let categoriaABuscar = this.categorias.find(function (c) {
            return c.id === id;
        });
        return categoriaABuscar;
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
    (0, common_1.Injectable)()
], CategoriasService);
//# sourceMappingURL=categorias.service.js.map