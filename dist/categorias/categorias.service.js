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
let CategoriasService = class CategoriasService {
    create(createCategoriaDto) {
        return 'Esta accion crea una nueva categoria';
    }
    findAll() {
        return `Esta accion retorna todas las categorias`;
    }
    findOne(id) {
        return `Esta accion retorna una categoria #${id}`;
    }
    update(id, updateCategoriaDto) {
        return `Esta accion actualiza una categoria #${id}`;
    }
    remove(id) {
        return `Esta accion elimina una categoria #${id}`;
    }
};
exports.CategoriasService = CategoriasService;
exports.CategoriasService = CategoriasService = __decorate([
    (0, common_1.Injectable)()
], CategoriasService);
//# sourceMappingURL=categorias.service.js.map