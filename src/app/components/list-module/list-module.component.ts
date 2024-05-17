import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Module } from 'src/app/model/module';
import { EnseignantService } from 'src/app/Service/enseignant.service';
import { ModuleService } from 'src/app/Service/module.service';

@Component({
  selector: 'app-list-module',
  templateUrl: './list-module.component.html',
  styleUrls: ['./list-module.component.css']
})
export class ListModuleComponent implements OnInit {


  modules!:Module[];
  search:string="";
  p:number =1;
  @Input() idModule !: number;
  constructor(private moduleService:ModuleService,private router:Router) { }

  ngOnInit(): void {
    this.getModuleList();
  }

  getModuleList():Module[] 
  {
    this.moduleService.getModuleList().subscribe(data=>{
      this.modules = data;
      //console.log(this.enseignants);
    });
    return this.modules;
  }

  delete(id: number)
  {
    this.moduleService.deleteModule(id).subscribe(data=>{
      this.getModuleList();
    });
  }

  listEnseignant(id:number)
  {
    this.router.navigate(['list-Enseignant',id]);
  }

  assignResponsableModule(id: number)
  {
    this.router.navigate(['assignResponsable',id]);
  }


}
