import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Etudiant } from '../model/etudiant';

@Injectable({
  providedIn: 'root',
})
export class EtudiantService {
  public searchText!: string;
  private baseUrl: string = 'http://localhost:8008/Etudiant';
  constructor(private httpd: HttpClient) {}

  getEtudiants(): Observable<Etudiant[]> {
    return this.httpd.get<Etudiant[]>(`${this.baseUrl}/afficheAllEtudiants`);
  }

  deleteEtudiant(id: number) {
    return this.httpd.delete<Etudiant>(`${this.baseUrl}/deleteEtudiant/${id}`);
  }

  ajouterEtudiant(etudiant: Etudiant) {
    return this.httpd.post<Etudiant>(`${this.baseUrl}/ajouterEtudiant`, etudiant);
  }

  getEtudiant(id: number): Observable<Etudiant> {
    return this.httpd.get<Etudiant>(`${this.baseUrl}/afficheEtudiant/${id}`);
  }

  updateEtudiant(etudiant: Etudiant, id: number) {
    etudiant.idEtudiant = id;
    return this.httpd.put<Etudiant>(
      `${this.baseUrl}/updateEtudiant`,
      etudiant
    );
  }
}
