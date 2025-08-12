export class Categoria {
    
    //constructor:
    // metodo(funcion) que se ejecuta al crear el objeto de esta clase
    // sirve para: dar valor inicial a atributos 
    constructor( id : number, 
                    fecha_creacion: Date,
                    estado: boolean,
                    nombre: string,
                    
    ){
        this.id = id;
        this.fechaCreacion = fecha_creacion;
        this.estado = true;
        this.nombre = nombre;
    }

    id: number;
    fechaCreacion: Date;
    estado: boolean;
    nombre: string;
}
