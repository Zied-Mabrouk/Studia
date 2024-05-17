import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Enseignant } from 'src/app/model/enseignant';
import { ModuleService } from 'src/app/Service/module.service';

@Component({
  selector: 'app-list-ens-module',
  templateUrl: './list-ens-module.component.html',
  styleUrls: ['./list-ens-module.component.css']
})
export class ListEnsModuleComponent implements OnInit {
  idModule !: number;;
  enseignants!:Enseignant[];
  rr:string="tttt";
  constructor(private moduleService:ModuleService,private router:Router,private ac:ActivatedRoute) { }

  ngOnInit(): void {
    this.idModule = this.ac.snapshot.params['idModule'];
    this.getEnseignantList(this.idModule);
  }

  getEnseignantList(id:number):Enseignant[] 
  {
    this.moduleService.listEnseignantParModule(id).subscribe(data=>{
      this.enseignants = data;
      console.log(this.enseignants[0].moduleRes);
    });
    return this.enseignants;
  }

}
