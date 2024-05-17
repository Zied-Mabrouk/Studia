import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Enseignant } from 'src/app/model/enseignant';
import { Module } from 'src/app/model/module';
import { EnseignantService } from 'src/app/Service/enseignant.service';
import { ModuleService } from 'src/app/Service/module.service';

@Component({
  selector: 'app-assign-responsable',
  templateUrl: './assign-responsable.component.html',
  styleUrls: ['./assign-responsable.component.css']
})
export class AssignResponsableComponent implements OnInit {

  idEns!:number;
  idModule!:number;
  module!:Module;
  enseignants!:Enseignant[];
  ens!:Enseignant;
  enseignantSelected!:number;
  constructor(private enseignantservice:EnseignantService,private moduleservice:ModuleService, private ac:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.enseignantSelected=3;
    this.getEnseignantList();
    this.module= new Module();
    //this.mod = new Module();
    this.idModule = this.ac.snapshot.params['idModule'];
    this.moduleservice.getModuleById(this.idModule).subscribe(data=>{
      console.log(data);
        this.module=data;
        
    });
  }

  assignResponsableModule()
  {
    this.enseignantservice.getEnseignantById(this.enseignantSelected).subscribe(data=>{
      console.log(data);
        this.ens=data;
    });
    this.moduleservice.assignResponsableModule(this.idModule,this.ens).subscribe(data=>{
      this.backToModuleList();
  });
    
  }



  getEnseignantList():Enseignant[] 
  {
    this.enseignantservice.getEnseignantList().subscribe(data=>{
      this.enseignants = data;
      //console.log(this.enseignants);
    });
    return this.enseignants;
  }




  backToModuleList(){
    this.router.navigate(['/ListModule']);
  }


}
