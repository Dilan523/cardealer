import { HttpException, Injectable } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { Categoria } from './entities/categoria.entity';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CategoriasService {
  constructor(private prisma: PrismaService) {}

  private categorias: Categoria[] = [
    new Categoria(1, new Date('2023-10-01'), true, 'Deportes'),
    new Categoria(2, new Date('2023-10-02'), true, 'Cultura'),
    new Categoria(3, new Date('2023-10-03'), true, 'Bienestar'),
  ];

  // Crear categoría
  async create(createCategoriaDto: CreateCategoriaDto) {
    const categoriaExist = await this.prisma.categorias.findFirst({
      where: { nombre_categoria: createCategoriaDto.nombre_categoria },
    });

    if (categoriaExist) {
      throw new HttpException(
        { success: false, error: 'La categoría ya existe' },
        400,
      );
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

  // Listar categorías
  async findAll() {
    const resultadosCategorias = await this.prisma.categorias.findMany({
      orderBy: [{ nombre_categoria: 'desc' }],
    });

    if (resultadosCategorias.length === 0) {
      throw new HttpException(
        { success: false, error: 'Categorías no encontradas' },
        404,
      );
    }

    return {
      success: true,
      data: resultadosCategorias,
    };
  }

  // Buscar categoría por id
  async findOne(id: number) {
    const categoria = await this.prisma.categorias.findFirst({
      where: { id_categoria: id },
      orderBy: [{ nombre_categoria: 'asc' }, { id_categoria: 'desc' }],
    });

    if (!categoria) {
      throw new HttpException(
        { success: false, error: 'Categoría no encontrada' },
        404,
      );
    }

    return categoria;
  }

  // Actualizar categoría (sin try/catch)
  async update(id: number, updateCategoriaDto: UpdateCategoriaDto) {
    const categoria = await this.findOne(id); // 👈 valida primero
    const categoriaActualizada = await this.prisma.categorias.update({
      where: { id_categoria: categoria.id_categoria },
      data: updateCategoriaDto,
    });

    return {
      success: true,
      data: categoriaActualizada,
    };
  }

  // Eliminar categoría (tal como pediste)
  async remove(id: number) {
    const categoriaBorrar = await this.findOne(id);
    if (!categoriaBorrar) {
      throw new HttpException(
        { success: false, error: 'Categoria a borrar no encontrada' },
        404,
      );
    } else {
      await this.prisma.categorias.delete({
        where: { id_categoria: id },
      });

      return {
        success: true,
        deleted_id: id,
      };
    }
  }
}
