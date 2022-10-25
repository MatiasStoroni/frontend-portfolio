import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import { Skill } from '../models/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  skillURL = environment.skillURL;

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<any> {
    return this.httpClient.get<Skill[]>(this.skillURL + 'ver');
  }

  public save(skill: Skill): Observable<any> {
    return this.httpClient.post<Skill>(this.skillURL + 'new', skill);
  }

  public update(skill: Skill, id:number): Observable<any> {
    return this.httpClient.post<any>(this.skillURL + 'modificar/' + id, skill);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.skillURL + `delete/${id}`);
  }
}
