import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterClubComponent } from '../ajouter-club/ajouter-club.component';
import { ListClubComponent } from '../list-club/list-club.component';
import { UpdateClubComponent } from '../update-club/update-club.component';

const routes: Routes = [
  {path:'', component:ListClubComponent},
  {path:'AjouterClub',component:AjouterClubComponent},
  {path:'update-club/:id',component:UpdateClubComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClubRoutingModule { }
