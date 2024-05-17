import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnseignantDetailsComponent } from '../enseignant-details/enseignant-details.component';
import { ListEnseignantComponent } from '../list-enseignant/list-enseignant.component';
import { EnseignantComponent } from './enseignant.component';

const routes: Routes = [
    {path: '', component:ListEnseignantComponent,
    children:[
    {path:"enseignantDetails/:idEnseignant",component:EnseignantDetailsComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnseignantRoutingModule { }
