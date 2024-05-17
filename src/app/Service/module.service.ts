import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enseignant } from '../model/enseignant';
import { Module } from '../model/module';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {
  
  private baseUrl ="http://localhost:8008/Module";
  private afficher = "/afficheAllModules";
  private ajouter = "/ajouterModule"
  private getById = "/afficheModule";
  private modifier = "/updateModule";
  private supprimer ="/deleteModule";
  private listEnseignant = "/listEnseignant";
  private Responsable = "/assignResponsableToModule";
  
  modules!:Module[];
  constructor(private httpClient:HttpClient) { 
    this.httpClient.get('http://localhost:8008/Module/afficheAllModules')
    .subscribe((data : any)=>{      
      this.modules=data
      //console.log(this.modules)
    });
  }


  getModuleList(): Observable<Module[]>
  {
   return this.httpClient.get<Module[]>(`${this.baseUrl+this.afficher}`);
  }


  AddModule(M:Module):Observable<Object>
  {
    return this.httpClient.post(`${this.baseUrl+this.ajouter}`,M);                        
  }


  getModuleById(id:number):Observable<Module>
  {
    return this.httpClient.get<Module>(`${this.baseUrl+this.getById}/${id}`);
  }

  ModifierModule(m:Module):Observable<Object>
  {
    return this.httpClient.put(`${this.baseUrl+this.modifier}/${m.idModule}`,m);
  }
  deleteModule(id:number):Observable<Object>
  {
    return this.httpClient.delete(`${this.baseUrl+this.supprimer}/${id}`);
  }

  listEnseignantParModule(id:number):Observable<Enseignant[]>
  {
    return this.httpClient.get<Enseignant[]>(`${this.baseUrl+this.listEnseignant}/${id}`);
  }


  assignResponsableModule(idModule:number,enseignant:Enseignant):Observable<Object>
  {
    return this.httpClient.put(`${this.baseUrl+this.Responsable}/${idModule}`,enseignant);
  }




}
