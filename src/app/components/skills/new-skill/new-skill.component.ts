import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { SkillService } from 'src/app/services/skill.service';
import { Skill } from 'src/app/models/skill';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Storage, ref, uploadBytes, getDownloadURL, StorageReference} from '@angular/fire/storage';
import { FileUpload } from 'src/app/models/file-upload';
import { FileUploadService } from 'src/app/services/file-upload.service';


@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent {
  titulo = '';
  progreso = 0;


  constructor(
    private skillService: SkillService,
    private toastr: ToastrService,
    private storage: Storage,
    private uploadService: FileUploadService
  ) { }

  onCreate(): void {
    const skill = new Skill(
      this.titulo,
      this.progreso,
    );
    this.skillService.save(skill). subscribe(
      data => {
        this.toastr.success('Habilidad creada, volviendo al portfolio...', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        setTimeout(() => {
          document.location.href="/";
        }, 2000);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );
  }

  goBack(): void{
    document.location.href="/";
  }
}


