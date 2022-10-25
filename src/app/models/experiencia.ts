export class Experiencia {
    id!: number;
    titulo!: string;
    imagen!: string;
    descripcion!: string;

    constructor(titulo: string, imagen: string, descripcion: string){
        this.titulo = titulo;
        this.imagen = imagen;
        this.descripcion = descripcion;
    }
}
