import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import { Educacion } from '../models/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  educacionURL = environment.educacionURL;

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<any> {
    return this.httpClient.get<Educacion[]>(this.educacionURL + 'ver');
  }

  public save(educacion: Educacion): Observable<any> {
    return this.httpClient.post<Educacion>(this.educacionURL + 'new', educacion);
  }

  public update(educacion: Educacion, id:number): Observable<any> {
    return this.httpClient.post<any>(this.educacionURL + 'modificar/' + id, educacion);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.educacionURL + `delete/${id}`);
  }
}
