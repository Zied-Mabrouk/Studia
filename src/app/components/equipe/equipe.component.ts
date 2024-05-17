import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Equipe } from 'src/app/model/equipe';

import { EquipeService } from 'src/app/Service/equipe.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { Detailequipe } from 'src/app/model/detailequipe';


@Component({
  selector: 'equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent implements OnInit {
  public e!:Equipe;
  public equipes!:Equipe[] ;
  public detailequipe!:Detailequipe[];
  equipeform !: FormGroup;
  

  constructor(private EquipeService:EquipeService,private _http: HttpClient,private fb:FormBuilder,private dialog: MatDialog,private router:Router) { }

  ngOnInit(): void {
   

   this.getequipe();
   this.initilizeform();
  }
  initilizeform() :void {
    this.equipeform=this.fb.group({
      nomEquipe: new FormControl(),
      Niveau: new FormControl(),
      detailEquipe: this.fb.array([
        this.adddetailstoFormGroup()
       ]),
      
      etudiants : this.fb.array([
        this.addetudiantstoFormGroup()
       ])
    })  
  }
  adddetailstoFormGroup(): any {
    throw new Error('Method not implemented.');
  }

  addetudiantstoFormGroup(): any {
    throw new Error('Method not implemented.');
  }

  updateequipe(idEquipe:number){

    this.router.navigate(['/updateequipe',idEquipe]);

  }

  
  getequipe() {
    this.EquipeService.getEquipeList().subscribe(
      (value)=>{
        this.equipes=value;
        console.log(this.equipes);
        
      }
      
    );

  }

  

  

  
  public openForm(equipe:Equipe ,mode:String):void {
    
    this.e=equipe;
    console.log(equipe);
    const container =document.getElementById('main');
    const button =document.createElement('button');
    button.type='button';
    button.style.display = 'none';
    button.setAttribute('data-toggle','modal');

    if(mode==='add'){
      button.setAttribute('data-target','#addequipemodal');
    }
    if(mode==='edit'){
      button.setAttribute('data-target','#editequipemodal');
    }
    if(mode==='delete'){
      button.setAttribute('data-target','#deleteequipemodal');
    }
    if(mode==='detail'){
      console.log(equipe?.nomEquipe);
      button.setAttribute('data-target','#detailequipe');
    }
    
    
    container?.appendChild(button);
    button.click();
   
    console.log(mode);
  }

  onDeleteequipe(equipe:Equipe){

    this.EquipeService.deleteEquipe(equipe.idEquipe).subscribe(data=>{
      this.getequipe();
     

    });

    this.router.navigate(['/equipe']);
    



  }
  
  showdetails(equipe:Equipe){

  
    const container =document.getElementById('main');
    const buttton =document.createElement('button');
    buttton.type='button';
    buttton.style.display = 'none';
    buttton.setAttribute('data-toggle','modal');

    
      buttton.setAttribute('data-target','#detailequipe');

      container?.appendChild(buttton);
      buttton.click();
    


  }


}
