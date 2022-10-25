import { Component, OnInit } from '@angular/core';
import { StorageReference, Storage, ref, uploadBytes, getDownloadURL } from '@angular/fire/storage';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ConnectableObservable } from 'rxjs';
import { Experiencia } from 'src/app/models/experiencia';
import { FileUpload } from 'src/app/models/file-upload';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { ExperienciaComponent } from '../experiencia.component';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent  {

  titulo = window.localStorage.getItem("tituloActual");
  imagen = '';
  descripcion = window.localStorage.getItem("descripcionActual");
  file!: File;
  imgRef!: StorageReference;

  selectedFiles: FileList;
  currentFileUpload: FileUpload;
  percentage: number;

  constructor(
    private experienciaService: ExperienciaService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private storage: Storage,
    private uploadService: FileUploadService
  ) { }

  salir(): void {
    window.localStorage.removeItem("idActual");
    window.localStorage.removeItem("tituloActual");
    window.localStorage.removeItem("linkActual");
    window.localStorage.removeItem("imagenActual");
    window.localStorage.removeItem("descripcionActual");
  }
  

  selectFile(event): void {
    this.selectedFiles = event.target.files;
  }

  upload(): void {
    if(this.selectedFiles != undefined){

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
  }

  onFileSelected($event: any){
    this.file = <File>$event.target.files[0];
    this.imgRef = ref(this.storage, `images/${this.file.name}`);
    this.selectFile($event);
  }


  onUpload(): void {
    if (this.file != undefined) {
      uploadBytes(this.imgRef, this.file)
        .then(async response => {
          console.log("Imagen subida correctamente.")
          this.imagen = await getDownloadURL(this.imgRef);
          this.onUpdate();
        })
        .catch(error => console.log(error));
    } else {
      this.onUpdate();
    }
  }

  onUpdate(): void {
    const id = Number(window.localStorage.getItem("idActual"));
    if(this.imagen === ""){
      this.imagen = window.localStorage.getItem("imagenActual");
    }
    
    const experiencia = new Experiencia(
      this.titulo,
      this.imagen,
      this.descripcion
    );
    this.experienciaService.update(experiencia, id).subscribe(
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
