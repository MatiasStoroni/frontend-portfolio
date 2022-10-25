import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Skill } from 'src/app/models/skill';
import { SkillService } from 'src/app/services/skill.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: Skill[] = [];
  isLogged = false;

  constructor(
    private skillService: SkillService, 
    private toastr: ToastrService, 
    private tokenService: TokenService
  ) { }

  ngOnInit() {
    this.cargarSkills();
    if(this.tokenService.getToken()){
      this.isLogged= true;
    }else{
      this.isLogged = false;
    }
  }

  cargarSkills(): void {
    this.skillService.lista().subscribe(
      data => {
        this.skills = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id_sk: number) {
    if(confirm("¿Estás seguro que deseas eliminar esta información?")){
      this.skillService.delete(id_sk).subscribe(
        data => {
          this.toastr.success('Habilidad Eliminada', 'OK', {
            timeOut: 3000, positionClass: 'toast-top-center'
          });
          this.cargarSkills();
        },
        err => {
          this.toastr.error(err.error.mensaje, 'Fail', {
            timeOut: 3000, positionClass: 'toast-top-center',
          });
        }
      );
    }
  }

  guardarActual(s: Skill):void{
    window.localStorage.setItem("idActual", s.id.toString());
    window.localStorage.setItem("tituloActual", s.titulo);
    window.localStorage.setItem("progresoActual", s.progreso.toString());
  }

  
}
