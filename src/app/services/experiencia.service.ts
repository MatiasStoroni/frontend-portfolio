import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Experiencia } from '../models/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  experienciaURL = environment.experienciaURL;

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<any> {
    return this.httpClient.get<Experiencia[]>(this.experienciaURL + 'ver');
  }

  public save(experiencia: Experiencia): Observable<any> {
    return this.httpClient.post<Experiencia>(this.experienciaURL + 'new', experiencia);
  }

  public update(experiencia: Experiencia, id:number): Observable<any> {
    return this.httpClient.post<any>(this.experienciaURL + 'modificar/' + id, experiencia);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.experienciaURL + `delete/${id}`);
  }
}
