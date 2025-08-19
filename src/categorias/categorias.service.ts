import { Injectable } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { Categoria } from './entities/categoria.entity';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CategoriasService {

  constructor(private prisma: PrismaService){}
  //Datos de noticias
private categorias: Categoria[] = [
  new Categoria(1, new Date('2023-10-01'), true, 'Deportes'),
  new Categoria(2, new Date('2023-10-02'), true, 'Cultura'),
  new Categoria(3, new Date('2023-10-03'), true, 'Bienestar'),
];

  create(nuevaCategoria: any) {
    this.categorias.push(nuevaCategoria);
    return nuevaCategoria;
  }

  findAll() {
    return this.prisma.categorias.findMany({
      orderBy: [{nombre_categoria: 'desc'}]
    })
  }

  findOne(id: number) {
    let categoriaABuscar = this.categorias.find(function(c: Categoria){
      return c.id === id;
    })
    return categoriaABuscar
  }

  update(id: number, UpdateCategoriaDto: UpdateCategoriaDto) {
    return `This action updates a #${id} categoria`;
  }

  remove(id: number) {
    //filter retorna nuevo areglo o lista
    // cuyos elementos cumplen la condicion;
    this.categorias = this.categorias.filter(function(Categoria){
      return Categoria.id !== id;
    });
    return `Categoria con id ${id} eliminada`;
  }
}
