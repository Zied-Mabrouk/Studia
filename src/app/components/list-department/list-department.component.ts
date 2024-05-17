import { Component, OnInit } from '@angular/core';
import {Universite} from "../../model/universite";
import {Departement} from "../../model/departement";
import { UniversiteService } from 'src/app/Service/universite.service';
import {DepartementService } from 'src/app/Service/departement.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-list-department',
  templateUrl: './list-department.component.html',
  styleUrls: ['./list-department.component.css']
})
export class ListDepartmentComponent implements OnInit {
  listDepartment!: Departement[];
  p: number = 1;

  constructor(public departementService: DepartementService) { }

  ngOnInit(): void {
    this.departementService.getDepartements().subscribe((value) => {
      this.listDepartment = value;

    });
  }

  supprimerDepartement(item: Departement) {
    Swal.fire({
      title: 'Voulez vous supprimer cette université?',
      text: 'cette action ne peut pas être annulée ',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Supprimer!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.departementService.deleteDepartement(item.idDepar).subscribe(() => {
          this.departementService.getDepartements().subscribe((value) => {
            this.listDepartment = value;
          });
        });
        Swal.fire('Supprimé!', 'Universite supprimée avec succées.', 'success');
      }
    });
  }
}
