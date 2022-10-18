import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Experiencia } from 'src/app/models/experiencia';
import { EducacionService } from 'src/app/services/educacion.service';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experiencias: Experiencia[] = [];

  constructor(private experienciaService: ExperienciaService, 
    private toastr: ToastrService, 
    private tokenService: TokenService) { }
    isLogged = false;

  ngOnInit() {
    this.cargarExperiencias();
    if(this.tokenService.getToken()){
      this.isLogged= true;
    }else{
      this.isLogged = false;
    }
  }

  cargarExperiencias(): void {
    this.experienciaService.lista().subscribe(
      data => {
        this.experiencias = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id_exp: number) {
    if(confirm("¿Estás seguro que deseas eliminar esta información?")){
      this.experienciaService.delete(id_exp).subscribe(
        data => {
          this.toastr.success('Experiencia Eliminada', 'OK', {
            timeOut: 3000, positionClass: 'toast-top-center'
          });
          this.cargarExperiencias();
        },
        err => {
          this.toastr.error(err.error.mensaje, 'Fail', {
            timeOut: 3000, positionClass: 'toast-top-center',
          });
        }
      );
    }
  }

}
