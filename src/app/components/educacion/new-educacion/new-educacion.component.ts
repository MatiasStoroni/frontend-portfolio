import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { EducacionService } from 'src/app/services/educacion.service';
import { Educacion } from 'src/app/models/educacion';
import { PortfolioInterceptorService } from 'src/app/interceptors/portfolio-interceptor.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {

  titulo = '';
  link = '';
  imagen = '';
  descripcion = '';

  constructor(
    private educacionService: EducacionService,
    private toastr: ToastrService,
    private router: Router,
    private interceptor: PortfolioInterceptorService
    ) { }

  ngOnInit() {
  }

  onCreate(): void {
    const producto = new Educacion(this.titulo, this.link, this.imagen, this.descripcion);
    this.educacionService.save(producto).subscribe(
      data => {
        this.toastr.success('Producto Creado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/portfolio']);
      },
      err => {
        console.log(err);
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );
  }

}