
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core'; // at top
import { Equipe } from 'src/app/model/equipe';

@Injectable({
  providedIn: 'root' // just before your class
})
export class EquipeService {

  private baseUrl = 'http://localhost:8008/Equipe';

  constructor(private http: HttpClient) { }

  writedetailEquipe(detailEquipe:any){
   localStorage.setItem('detailEquipe',detailEquipe);
  }

  getEquipe(idEquipe: number): Observable<Equipe> {
    return this.http.get<Equipe>(`${this.baseUrl}/afficheEquipe/${idEquipe}`);
  }

  createEquipe(Equipe: Equipe): Observable<Equipe> {
   
    return this.http.post<Equipe>(`${this.baseUrl}/ajouterEquipe`, Equipe);
  }

  updateEquipe(Equipe: Equipe): Observable<Equipe> {
    
    return this.http.put<Equipe>(`${this.baseUrl}/updateEquipe`, Equipe);
  }

  deleteEquipe(idEquipe: number): Observable<Object> {
    console.log(idEquipe);
    return this.http.delete(`${this.baseUrl}/deleteEquipe/${idEquipe}`);
  }

  getEquipeList(): Observable<Equipe[]> {
    
    return this.http.get<Equipe[]>(`${this.baseUrl}/afficheAllEquipes`)
  }
 // getPostesList(): Observable<Postes[]> {
   // return this.http.get<Postes[]>(`http://localhost:8080/pos/postes`);
    
  //}
}
