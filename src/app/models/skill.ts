export class Skill {
    id!: number;
    titulo!: string;
    progreso!: number;

    constructor(titulo: string, progreso: number){
        this.titulo = titulo;
        this.progreso = progreso;
    }
}
