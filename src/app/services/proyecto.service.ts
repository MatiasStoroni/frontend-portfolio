import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import { Proyecto } from '../models/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  proyectoURL = environment.proyectoURL;

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<any> {
    return this.httpClient.get<Proyecto[]>(this.proyectoURL + 'ver');
  }

  public save(proyecto: Proyecto): Observable<any> {
    return this.httpClient.post<Proyecto>(this.proyectoURL + 'new', proyecto);
  }

  public update(proyecto: Proyecto, id:number): Observable<any> {
    return this.httpClient.post<any>(this.proyectoURL + 'modificar/' + id, proyecto);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.proyectoURL + `delete/${id}`);
  }
}
