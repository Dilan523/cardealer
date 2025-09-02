import { HttpException, Injectable } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { Categoria } from './entities/categoria.entity';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CategoriasService {
  constructor(private prisma: PrismaService) {}

  // Datos de noticias
  private categorias: Categoria[] = [
    new Categoria(1, new Date('2023-10-01'), true, 'Deportes'),
    new Categoria(2, new Date('2023-10-02'), true, 'Cultura'),
    new Categoria(3, new Date('2023-10-03'), true, 'Bienestar'),
  ];

async create(createCategoriaDto: CreateCategoriaDto) {
  return await this.prisma.categorias.create({
    data: {
      nombre_categoria: createCategoriaDto.nombre_categoria,
      estado: createCategoriaDto.estado ?? true,   // 👈 default a true si no viene
    },
  });
}

  findAll() {
    return this.prisma.categorias.findMany({
      orderBy: [{ nombre_categoria: 'desc' }],
    });
  }

  async findOne(id: number) {
    let marca = await this.prisma.categorias.findFirst({
      where: { id_categoria: id },
      orderBy: [{ nombre_categoria: 'asc' }, { id_categoria: 'desc' }],
    });

    if (!marca) {
      // httpException
      // 1. código de status http a lanzar
      throw new HttpException(
        {
          status: 404,
          error: 'Categoria no encontrada',
        },
        404,
      );
    } else {
      return marca;
    }
  }

  update(id: number, UpdateCategoriaDto: UpdateCategoriaDto) {
    return `This action updates a #${id} categoria`;
  }

  async remove(id: number) {
    //esperamosa que borre la categoria
    await this.prisma.categorias.delete({
      where: { id_categoria: id }, 
    })
    //enviamos respuesta a controller
    return{
      "success" : true,
      "deleted_id" : id 
    }
  }
}

