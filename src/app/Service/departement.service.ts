import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Departement} from "../model/departement";

@Injectable({
  providedIn: 'root'
})
export class DepartementService {

  public searchText!: string;
  private baseUrl: string = '/api/Departement';

  constructor(private httpd: HttpClient) {
  }

  getDepartements(): Observable<Departement[]> {
    return this.httpd.get<Departement[]>(`${this.baseUrl}/afficheAllDepartement`);
  }

  deleteDepartement(id: number) {
    return this.httpd.delete<Departement>(`${this.baseUrl}/deleteDepartement/${id}`);
  }

  ajouterDepartement(departement: Departement) {
    return this.httpd.post<Departement>(`${this.baseUrl}/ajouterDepartement`, departement);
  }

  getDepartement(id: number): Observable<Departement> {
    return this.httpd.get<Departement>(`${this.baseUrl}/afficheDepartement/${id}`);
  }

  updateDepartement(departement: Departement, id: number) {
    departement.idDepar = id;
    return this.httpd.put<Departement>(
      `${this.baseUrl}/updateDepartement`,
      departement
    );
  }


}
