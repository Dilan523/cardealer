//data transfer object (DTO), permite establecer
//una estructura para enviar objetos de un componeente a otro
//utilizacion e rest:
//se utiliza como estructura de una request para que pueda ser utilizada en un service 

import { IsNotEmpty, MinLength} from "class-validator";

//un DTO sirve para validar el paylaod de entrada 
export class CreateCategoriaDto {
    @IsNotEmpty({message: 'El nombre de la categoria es obligatorio'})
    @MinLength(2, {message: 'El nombre de la categoria debe tener al menos 2 caracteres'})
    nombre_categoria: string;
    estado: boolean;
}
