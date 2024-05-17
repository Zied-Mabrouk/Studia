import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClubRoutingModule } from './club-routing.module';
import { ClubComponent } from '../club/club.component';
import { AjouterClubComponent } from '../ajouter-club/ajouter-club.component';
import { ListClubComponent } from '../list-club/list-club.component';
import { UpdateClubComponent } from '../update-club/update-club.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    ClubComponent,
    ListClubComponent,
    AjouterClubComponent,
    UpdateClubComponent
  ],
  imports: [
    CommonModule,
    ClubRoutingModule,
    FormsModule, 
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
  ]
})
export class ClubModule { }
