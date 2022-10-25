import { Component, OnInit } from '@angular/core';
import { StorageReference, Storage, ref, uploadBytes, getDownloadURL } from '@angular/fire/storage';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ConnectableObservable } from 'rxjs';
import { Skill } from 'src/app/models/skill';
import { FileUpload } from 'src/app/models/file-upload';
import { SkillService } from 'src/app/services/skill.service';
import { FileUploadService } from 'src/app/services/file-upload.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent {

  titulo = window.localStorage.getItem("tituloActual");
  progreso = Number(window.localStorage.getItem("progresoActual"));

  constructor(
    private skillService: SkillService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private storage: Storage,
    private uploadService: FileUploadService
  ) { }

  salir(): void {
    window.localStorage.removeItem("idActual");
    window.localStorage.removeItem("tituloActual");
    window.localStorage.removeItem("progresoActual");
  }

  onUpdate(): void {
    const id = Number(window.localStorage.getItem("idActual"));
    if(this.progreso > 100 || this.progreso < 0){
      alert("El valor del progreso debe estar entre 0 y 100");
      return;
    }
    const skill = new Skill(
      this.titulo,
      this.progreso,
    );
    this.skillService.update(skill, id).subscribe(
      data => {
        this.toastr.success('Información Actualizada, volviendo al portfolio...', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        setTimeout(() => {
          document.location.href = "/";
        }, 2000);
        this.salir();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      }
    );
  }

  goBack(): void {
    document.location.href = "/";
    this.salir();
  }
}
