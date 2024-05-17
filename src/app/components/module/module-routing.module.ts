import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterModuleComponent } from '../ajouter-module/ajouter-module.component';
import { ListEnsModuleComponent } from '../list-ens-module/list-ens-module.component';
import { ListModuleComponent } from '../list-module/list-module.component';

const routes: Routes = [
  {path:'', component:ListModuleComponent},
  {path:"module-update/:idModule",component:AjouterModuleComponent},
  {path:'list-Enseignant/:idModule', component: ListEnsModuleComponent },
  {path:'AjouterModule', component: AjouterModuleComponent },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleRoutingModule { }
