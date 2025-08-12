import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';

@Controller('categorias')
export class CategoriaController {
  constructor(private readonly categoriasService: CategoriasService) {}

  @Post()
  create(@Body() body:any) {
    return this.categoriasService.create(body);
  }

  @Get()
  findAll() {
    return this.categoriasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNoticiaDto: UpdateCategoriaDto) {
    return this.categoriasService.update(+id, updateNoticiaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriasService.remove(+id);
  }
}
