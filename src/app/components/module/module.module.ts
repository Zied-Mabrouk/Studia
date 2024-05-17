import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleRoutingModule } from './module-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ModuleComponent } from './module.component';
import { AjouterModuleComponent } from '../ajouter-module/ajouter-module.component';
import { ListModuleComponent } from '../list-module/list-module.component';
import { ListEnsModuleComponent } from '../list-ens-module/list-ens-module.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { AssignResponsableComponent } from '../assign-responsable/assign-responsable.component';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    ListModuleComponent,
    AjouterModuleComponent,
    ListEnsModuleComponent,
    ModuleComponent,
    PaginationComponent,
    AssignResponsableComponent,
  ],
  imports: [
    CommonModule,
    ModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class ModuleModule { }
