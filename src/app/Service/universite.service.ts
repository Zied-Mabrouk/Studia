import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Universite} from "../model/universite";

@Injectable({
  providedIn: 'root'
})
export class UniversiteService {
  private baseUrl: string = '/api/Universite';
  constructor(private httpd: HttpClient) {}

  getUniversites(): Observable<Universite[]> {
    return this.httpd.get<Universite[]>(`${this.baseUrl}/afficheAllUniversites`);
  }

  deleteUniversite(id: number) {
    return this.httpd.delete<Universite>(`${this.baseUrl}/deleteUniversite/${id}`);
  }

  ajouterUniversite(universite: Universite) {
    return this.httpd.post<Universite>(`${this.baseUrl}/ajouterUniversite`, universite);
  }

  getUniversite(id: number): Observable<Universite> {
    return this.httpd.get<Universite>(`${this.baseUrl}/afficheUniversite/${id}`);
  }

  updateUniversite(universite: Universite, id: number) {
    universite.idUniversite = id;
    return this.httpd.put<Universite>(
      `${this.baseUrl}/updateUniversite`,
      universite
    );
  }
}
