export class Noticia {
    
    //constructor:
    // metodo(funcion) que se ejecuta al crear el objeto de esta clase
    // sirve para: dar valor inicial a atributos 
    constructor( id : number, 
                    fecha_creacion: Date,
                    estado: boolean,
                    titulo: string,
                    
    ){
        this.id = id;
        this.fechaCreacion = fecha_creacion;
        this.estado = true;
        this.titulo = titulo;
    }

    id: number;
    fechaCreacion: Date;
    estado: boolean;
    titulo: string;
}
