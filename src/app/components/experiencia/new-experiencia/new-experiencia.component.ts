import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { Experiencia } from 'src/app/models/experiencia';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Storage, ref, uploadBytes, getDownloadURL, StorageReference} from '@angular/fire/storage';
import { FileUpload } from 'src/app/models/file-upload';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent{

  portfolioUrl = environment.portfolioURL;

  titulo = '';
  imagen = '';
  descripcion = '';
  file!: File;
  imgRef!: StorageReference;

  selectedFiles: FileList;
  currentFileUpload: FileUpload;
  percentage: number;

  constructor(
    private experienciaService: ExperienciaService,
    private toastr: ToastrService,
    private storage: Storage,
    private uploadService: FileUploadService
  ) { }

  selectFile(event): void {
    this.selectedFiles = event.target.files;
  }

  upload(): void {
    const file = this.selectedFiles.item(0);
    this.imagen = file.name;
    this.selectedFiles = undefined;

    this.currentFileUpload = new FileUpload(file);
    this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(
      percentage => {
        this.percentage = Math.round(percentage);
      },
      error => {
        console.log(error);
      }
    );
  }

  onFileSelected($event: any){
    this.file = <File>$event.target.files[0];
    this.imgRef = ref(this.storage, `images/${this.file.name}`);
    this.selectFile($event);
  }

  onUpload(): void {
    if(this.file != undefined){
      uploadBytes(this.imgRef, this.file)
        .then(async response => {
          console.log("Imagen subida correctamente.")
          this.imagen = await getDownloadURL(this.imgRef);
          this.onCreate();
        })
        .catch(error => console.log(error));
    }else{
      this.onCreate();
    }
  }

  onCreate(): void {
    const experiencia = new Experiencia(
      this.titulo,
      this.imagen,
      this.descripcion
    );
    console.log(experiencia);
    this.experienciaService.save(experiencia). subscribe(
      data => {
        this.toastr.success('Experiencia creada, volviendo al portfolio...', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        setTimeout(() => {
          document.location.href=this.portfolioUrl;
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
