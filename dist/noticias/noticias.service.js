"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoticiasService = void 0;
const common_1 = require("@nestjs/common");
const noticia_entity_1 = require("./entities/noticia.entity");
let NoticiasService = class NoticiasService {
    clientes = [
        new noticia_entity_1.Noticia(1, new Date('2023-10-01'), true, 'Convocatorias'),
        new noticia_entity_1.Noticia(2, new Date('2023-10-02'), true, 'Nuevo torneo'),
        new noticia_entity_1.Noticia(3, new Date('2023-10-03'), true, 'Resultados'),
    ];
    create(nuevaNoticia) {
        this.clientes.push(nuevaNoticia);
        return nuevaNoticia;
    }
    findAll() {
        return this.clientes;
    }
    findOne(id) {
        let noticiaABuscar = this.clientes.find(function (n) {
            return n.id === id;
        });
        return noticiaABuscar;
    }
    update(id, updateNoticiaDto) {
        return `This action updates a #${id} noticia`;
    }
    remove(id) {
        this.clientes = this.clientes.filter(function (Cliente) {
            return Cliente.id !== id;
        });
        return `Cliente con id ${id} eliminado`;
    }
};
exports.NoticiasService = NoticiasService;
exports.NoticiasService = NoticiasService = __decorate([
    (0, common_1.Injectable)()
], NoticiasService);
//# sourceMappingURL=noticias.service.js.map