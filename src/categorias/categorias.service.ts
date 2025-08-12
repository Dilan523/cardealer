import { Injectable } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';

@Injectable()
export class CategoriasService {
  create(createCategoriaDto: CreateCategoriaDto) {
    return 'Esta accion crea una nueva categoria';
  }

  findAll() {
    return `Esta accion retorna todas las categorias`;
  }

  findOne(id: number) {
    return `Esta accion retorna una categoria #${id}`;
  }

  update(id: number, updateCategoriaDto: UpdateCategoriaDto) {
    return `Esta accion actualiza una categoria #${id}`;
  }

  remove(id: number) {
    return `Esta accion elimina una categoria #${id}`;
  }
}
