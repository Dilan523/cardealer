import { Injectable } from '@nestjs/common';
import { CreateNoticiaDto } from './dto/create-noticia.dto';
import { UpdateNoticiaDto } from './dto/update-noticia.dto';
import { Noticia } from './entities/noticia.entity';

@Injectable()
export class NoticiasService {
  //Datos de noticias
private clientes: Noticia[] = [
  new Noticia(1, new Date('2023-10-01'), true, 'Convocatorias'),
  new Noticia(2, new Date('2023-10-02'), true, 'Nuevo torneo'),
  new Noticia(3, new Date('2023-10-03'), true, 'Resultados'),
];
  create(nuevaNoticia: any) {
    this.clientes.push(nuevaNoticia);
    return nuevaNoticia;
  }

  findAll() {
    return this.clientes;
  }

  findOne(id: number) {
    let noticiaABuscar = this.clientes.find(function(n: Noticia){
      return n.id === id;
    })
    return noticiaABuscar
  }

  update(id: number, updateNoticiaDto: UpdateNoticiaDto) {
    return `This action updates a #${id} noticia`;
  }

  remove(id: number) {
    //filter retorna nuevo areglo o lista
    // cuyos elementos cumplen la condicion;
    this.clientes = this.clientes.filter(function(Cliente){
      return Cliente.id !== id;
    });
    return `Cliente con id ${id} eliminado`;
  }
}
