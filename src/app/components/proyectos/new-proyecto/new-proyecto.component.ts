import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { Proyecto } from 'src/app/models/proyecto';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Storage, ref, uploadBytes, getDownloadURL, StorageReference} from '@angular/fire/storage';
import { FileUpload } from 'src/app/models/file-upload';
import { FileUploadService } from 'src/app/services/file-upload.service';


@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent {
  titulo = '';
  link = '';
  imagen = '';
  descripcion = '';
  file!: File;
  imgRef!: StorageReference;

  selectedFiles: FileList;
  currentFileUpload: FileUpload;
  percentage: number;

  constructor(
    private proyectoService: ProyectoService,
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
    const proyecto = new Proyecto(
      this.titulo,
      this.link,
      this.imagen,
      this.descripcion
    );
    console.log(proyecto);
    this.proyectoService.save(proyecto). subscribe(
      data => {
        this.toastr.success('Proyecto creado, volviendo al portfolio...', 'OK', {
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


