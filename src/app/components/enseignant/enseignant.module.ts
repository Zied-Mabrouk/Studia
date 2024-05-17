import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnseignantRoutingModule } from './enseignant-routing.module';
import { EnseignantComponent } from './enseignant.component';
import { ListEnseignantComponent } from '../list-enseignant/list-enseignant.component';
import { EnseignantDetailsComponent } from '../enseignant-details/enseignant-details.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { AssignEnsToModuleComponent } from '../assign-ens-to-module/assign-ens-to-module.component';
import { AssignResponsableComponent } from '../assign-responsable/assign-responsable.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    EnseignantComponent,
    ListEnseignantComponent,
    EnseignantDetailsComponent,
    AssignEnsToModuleComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    EnseignantRoutingModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
  ]
})
export class EnseignantModule { }
