import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EquipeService } from 'src/app/Service/equipe.service';
import { Detailequipe } from 'src/app/model/detailequipe';
import { Equipe } from 'src/app/model/equipe';

@Component({
  selector: 'createequipe',
  templateUrl: './createequipe.component.html',
  styleUrls: ['./createequipe.component.css']
})
export class CreateequipeComponent implements OnInit {

  equipe:Equipe=new Equipe();
  detail:Detailequipe=new Detailequipe;
  equipeform !: FormGroup;
  Niveau: any = ['JUNIOR','SENIOR' ,'EXPERT'];


  constructor(private fb:FormBuilder,private equipeservice:EquipeService,private router:Router) { }



  ngOnInit(): void {

    this.initilizeform();
  }

  initilizeform() :void {
    this.equipeform=this.fb.group({
      nomEquipe: new FormControl(),
      Niveau: new FormControl(['JUNIOR','SENIOR0','EXPERT']),
      detailEquipe: this.fb.array([
       
       ]),
      
      etudiants : this.fb.array([
        
       ])
    })  
  }

  /*
  
   onSubmit() {
   
    this.equipe=this.equipeform.value;
   console.log(this.equipe);
   
    this.equipe.niveau= this.equipeform.controls['Niveau'].value;
       // TODO: Use EventEmitter with form value
    this.equipeservice.createEquipe(this.equipe).subscribe(data =>{
      console.log(data);
      this.gottoequipelist();
    });
    
  }*/


  save(){
    this.equipe.detailEquipe=this.detail;
    this.equipe.niveau= this.equipeform.controls['Niveau'].value;
    this.equipeservice.createEquipe(this.equipe).subscribe(data =>{
      console.log(data);
      this.gottoequipelist();
    });
    this.router.navigate(['/equipe']);
  }
  
  public openForm(detail:Detailequipe ,mode:String):void {
    
    this.detail=detail;
    this.equipe=this.equipeform.value;
    
    const container =document.getElementById('main');
    const button =document.createElement('button');
    button.type='button';
    button.style.display = 'none';
    button.setAttribute('data-toggle','modal');

    if(mode==='ajouterdetail'){
      button.setAttribute('data-target','#ajouterdetailequipemodal');
    }
    
    
    
    container?.appendChild(button);
    button.click();
   
    console.log(mode);
  }

  gottoequipelist(){
    this.router.navigate(['/equipe']);

  }


}
