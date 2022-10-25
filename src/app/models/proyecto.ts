export class Proyecto {
    id!: number;
    titulo!: string;
    link!: string;
    imagen!: string;
    descripcion!: string;

    constructor(titulo: string, link: string, imagen: string, descripcion: string){
        this.titulo = titulo;
        this.link = link;
        this.imagen = imagen;
        this.descripcion = descripcion;
    }
}
