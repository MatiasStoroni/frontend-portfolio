import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { EducacionService } from 'src/app/services/educacion.service';
import { Educacion } from 'src/app/models/educacion';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Storage, ref, uploadBytes, getDownloadURL, StorageReference} from '@angular/fire/storage';
import { FileUpload } from 'src/app/models/file-upload';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { environment } from 'src/environments/environment.prod';


@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent {

  portfolioUrl = environment.portfolioURL;

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
    private educacionService: EducacionService,
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
    const educacion = new Educacion(
      this.titulo,
      this.link,
      this.imagen,
      this.descripcion
    );
    console.log(educacion);
    this.educacionService.save(educacion). subscribe(
      data => {
        this.toastr.success('Educación creada, volviendo al portfolio...', 'OK', {
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


