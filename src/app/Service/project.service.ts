import { Injectable } from '@angular/core';
import { Project } from '../model/project';
import { Equipe } from '../model/equipe';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private baseUrl = '/api/Project';
  constructor(private httpd: HttpClient) {
    
  }

  getProjects() : Observable<Project[]>{
    return this.httpd.get<Project[]>(`${this.baseUrl}/`);
  }
  find(id: number): Observable<Project> {
    return this.httpd.get<Project>(`${this.baseUrl}/find/${id}`);
  }
  add(project: Project) {
    return this.httpd.post<Project>(`${this.baseUrl}/add/`, project);
  }
  getTeams() : Observable<Equipe[]>{
    return this.httpd.get<Equipe[]>(`/api/Equipe/afficheAllEquipes`);
  }



  assignTeamToProject(idTeam:number,idProject:number) : any{
    return this.httpd.get<Project>(`${this.baseUrl}/${idProject}/assignTeam/${idTeam}`);
  }
  update(project: Project, id: number,team:Equipe) {
    
    project.idProject = id;
    project.team = team;
    return this.httpd.put<Project>(
      `${this.baseUrl}/update/`,
      project
    );
  }
  delete(id: number) {
    return this.httpd.delete<Project>(`${this.baseUrl}/delete/${id}`);
  }
}