import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Club } from '../model/club';

@Injectable({
  providedIn: 'root'
})
export class ClubService {

  public searchText!: string;
  private baseURL ="http://localhost:8008/Club";
  private afficher = "/afficheAllClubs";
  private ajouter = "/ajouterClub"
  private getById = "/afficheClub";
  private modifier = "/updateClub";
  private supprimer ="/deleteClub";


  constructor(private httpClient:HttpClient) { }


  getClubList():Observable<Club[]>{
    return this.httpClient.get<Club[]>(`${this.baseURL+this.afficher}`)

  }

  ajouterClub(club:Club):Observable<Object>{
    return this.httpClient.post(`${this.baseURL+this.ajouter}`,club);


  }
  getClubById(id:number):Observable<Club>{
    return this.httpClient.get<Club>(`${this.baseURL+this.getById}/${id}`);

  }
  updateClub(club:Club):Observable<Object>{
    return this.httpClient.put(`${this.baseURL+this.modifier}`,club);
  }
  deleteClub(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL+this.supprimer}/${id}`)
    
  }





}
