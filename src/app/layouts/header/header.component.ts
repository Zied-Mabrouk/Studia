import { Component, OnInit, Inject, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { EtudiantService } from 'src/app/Service/etudiant.service';
import { EnseignantService } from 'src/app/Service/enseignant.service';
import { ClubService } from 'src/app/Service/club.service';
import { DepartementService } from 'src/app/Service/departement.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    public etudiantService: EtudiantService,public enseignantservice: EnseignantService,public clubservice:ClubService,public depservice:DepartementService
  ) {}

  ngOnInit(): void {}
  sidebarToggle() {
    //toggle sidebar function
    this.document.body.classList.toggle('toggle-sidebar');
  }
}