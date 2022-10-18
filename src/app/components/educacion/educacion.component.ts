import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/services/educacion.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educaciones: Educacion[] = [];
  isLogged = false;

  constructor(
    private educacionService: EducacionService, 
    private toastr: ToastrService, 
    private tokenService: TokenService
  ) { }

  ngOnInit() {
    this.cargarEducaciones();
    if(this.tokenService.getToken()){
      this.isLogged= true;
    }else{
      this.isLogged = false;
    }
  }

  cargarEducaciones(): void {
    this.educacionService.lista().subscribe(
      data => {
        this.educaciones = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id_edu: number) {
    if(confirm("¿Estás seguro que deseas eliminar esta información?")){
      this.educacionService.delete(id_edu).subscribe(
        data => {
          this.toastr.success('Experiencia Eliminada', 'OK', {
            timeOut: 3000, positionClass: 'toast-top-center'
          });
          this.cargarEducaciones();
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
