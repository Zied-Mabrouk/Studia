import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Module } from 'src/app/model/module';
import { ModuleService } from 'src/app/Service/module.service';

@Component({
  selector: 'app-ajouter-module',
  templateUrl: './ajouter-module.component.html',
  styleUrls: ['./ajouter-module.component.css']
})
export class AjouterModuleComponent implements OnInit {

  id!:number;
  url !: any;
  module: Module= new Module();
  isAddMode !: boolean;
  submitted = false;
  constructor(private moduleservice:ModuleService,private router:Router,private ac:ActivatedRoute) {
    
   }

  ngOnInit(): void {
    this.id = this.ac.snapshot.params['idModule'];
    this.isAddMode = !this.id;

    if (!this.isAddMode) {
      this.moduleservice.getModuleById(this.id).subscribe((res) => (this.module = res));
       }
  }

//   this.ac.paramMap.subscribe((res) => (this.id = Number(res.get('idModule'))));
//   this.moduleservice.getModuleById(this.id).subscribe((res) => (this.module = res));  

backToModuleList(){
  this.router.navigate(['/ListModule']);
}
createModule()
{
  this.moduleservice.AddModule(this.module).subscribe(data=>{
    console.log(data);
    this.backToModuleList();
  },error=>console.log(error));
}

updateModule()
{
  this.moduleservice.ModifierModule(this.module).subscribe();
}




Ajouter()
{
  this.submitted = true;
  if (this.isAddMode) {
    this.createModule();
} else {
    this.updateModule();
}
this.backToModuleList();

}



}
