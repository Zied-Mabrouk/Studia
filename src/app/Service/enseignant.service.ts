import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { mergeMap, Observable } from 'rxjs';
import { Enseignant } from '../model/enseignant';
import { Module } from '../model/module';
@Injectable({
  providedIn: 'root'
})
export class EnseignantService {

  public searchText!: string;
  private baseUrl ="http://localhost:8008/Enseignant";
  private afficher = "/afficheAllEnseignants";
  private ajouter = "/ajouterEnseignant"
  private getById = "/afficheEnseignant";
  private modifier = "/updateEnseignant";
  private supprimer ="/deleteEnseignant";
  private assignEnsModules = "/assignEnseignantToModule";
  private assignEnsDepartments = "/assignEnseignantToDepartement";


   enseignants!:Enseignant[];

  constructor(private httpClient:HttpClient) {
    this.httpClient.get('http://localhost:8008/Enseignant/afficheAllEnseignants')
    .subscribe((data : any)=>{      
      this.enseignants=data
      console.log(this.enseignants[1].moduleRes)
    });
   }


  getEnseignantList(): Observable<Enseignant[]>
  {
   return this.httpClient.get<Enseignant[]>(`${this.baseUrl+this.afficher}`);
  }

  //  getEnseignantListttttttt(): Observable<Enseignant[]>
  //  {
  //   return this.httpClient.get(`${this.baseUrl+this.afficher}`).subscribe()
  //  }

  AddEnseignant(E:Enseignant):Observable<Object>
  {
    return this.httpClient.post(`${this.baseUrl+this.ajouter}`,E);                        
  }

  getEnseignantById(id:number):Observable<Enseignant>
  {
    return this.httpClient.get<Enseignant>(`${this.baseUrl+this.getById}/${id}`);
  }

  ModifierEnseignant(id:number,ens:Enseignant):Observable<Object>
  {
    return this.httpClient.put(`${this.baseUrl+this.modifier}/${id}`,ens);
  }

  assignEnseignantToModule(idEnseignant:number,module:Module):Observable<Object>
  {
    return this.httpClient.put(`${this.baseUrl+this.assignEnsModules}/${idEnseignant}`,module);
  }


  delete(id:number):Observable<Object>
  {
    return this.httpClient.delete(`${this.baseUrl+this.supprimer}/${id}`);
  }

  assignEnseignantToDepartement(idEnseignant:number,idDepar:number):Observable<Object>
  {
    return this.httpClient.put(`${this.baseUrl+this.assignEnsDepartments}/${idEnseignant}/${idDepar}`,null);
  }

  





  datee:Date = new Date(2022-11-12);

  /*
  getAllEnseignant():Enseignant[]
  {
    return [
      {
        idEnseignant:1,
        prenomE:"ens1",
        nomE:"ens2",
        date_prise_de_fonction:this.datee,
        email:"string@esprit.tn",
        image:"https://bootdey.com/img/Content/avatar/avatar3.png",
        grade:"Assistant"
      },
      
      {idEnseignant:2,
        prenomE:"amine",
        nomE:"enseignant",
        date_prise_de_fonction:this.datee, 
        email:"ami22ne@esprit.tn",
        image:"https://bootdey.com/img/Content/avatar/avatar3.png",
        grade:"Maître_de_conferences"
      }
  ]
  }*/


}
