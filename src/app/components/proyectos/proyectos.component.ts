import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Proyecto } from 'src/app/models/proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectos: Proyecto[] = [];
  isLogged = false;

  constructor(
    private proyectoService: ProyectoService, 
    private toastr: ToastrService, 
    private tokenService: TokenService
  ) { }

  ngOnInit() {
    this.cargarProyectos();
    if(this.tokenService.getToken()){
      this.isLogged= true;
    }else{
      this.isLogged = false;
    }
  }

  cargarProyectos(): void {
    this.proyectoService.lista().subscribe(
      data => {
        this.proyectos = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id_proy: number) {
    if(confirm("¿Estás seguro que deseas eliminar esta información?")){
      this.proyectoService.delete(id_proy).subscribe(
        data => {
          this.toastr.success('Proyecto Eliminado', 'OK', {
            timeOut: 3000, positionClass: 'toast-top-center'
          });
          this.cargarProyectos();
        },
        err => {
          this.toastr.error(err.error.mensaje, 'Fail', {
            timeOut: 3000, positionClass: 'toast-top-center',
          });
        }
      );
    }
  }

  guardarActual(p: Proyecto):void{
    window.localStorage.setItem("idActual", p.id.toString());
    window.localStorage.setItem("tituloActual", p.titulo);
    window.localStorage.setItem("linkActual", p.link);
    window.localStorage.setItem("imagenActual", p.imagen);
    window.localStorage.setItem("descripcionActual", p.descripcion);
  }

  

}
