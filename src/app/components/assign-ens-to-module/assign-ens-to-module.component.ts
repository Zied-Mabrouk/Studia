import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Enseignant } from 'src/app/model/enseignant';
import { Module } from 'src/app/model/module';
import { EnseignantService } from 'src/app/Service/enseignant.service';
import { ModuleService } from 'src/app/Service/module.service';

@Component({
  selector: 'app-assign-ens-to-module',
  templateUrl: './assign-ens-to-module.component.html',
  styleUrls: ['./assign-ens-to-module.component.css']
})
export class AssignEnsToModuleComponent implements OnInit {

  idEns!:number;
  idModule!:number;
  enseignant!:Enseignant;
  modules!:Module[];
  mod!:Module;
  moduleSelected!:number;
  constructor(private enseignantservice:EnseignantService,private moduleservice:ModuleService, private ac:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
   // this.moduleSelected=17;
    this.getModuleList();
    this.enseignant= new Enseignant();
    //this.mod = new Module();
    this.idEns = this.ac.snapshot.params['idEnseignant'];
    this.enseignantservice.getEnseignantById(this.idEns).subscribe(data=>{
      console.log(data);
        this.enseignant=data;
    });
  }
  assignEnseignantToModule()
  {
    this.moduleservice.getModuleById(this.moduleSelected).subscribe(data=>{
      console.log(data);
        this.mod=data;
    });
    this.enseignantservice.assignEnseignantToModule(this.idEns,this.mod).subscribe(data=>{
      this.backToEnseignantList();
  });
    
  }


  getModuleList():Module[] 
  {
    this.moduleservice.getModuleList().subscribe(data=>{
      this.modules = data;
      //console.log(this.enseignants);
    });
    return this.modules;
  }

 




  backToEnseignantList(){
    this.router.navigate(['/ListEnseignant']);
  }

}
