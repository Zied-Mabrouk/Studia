import { Component, OnInit } from '@angular/core';
import {Universite} from "../../model/universite";
import Swal from "sweetalert2";
import { UniversiteService } from 'src/app/Service/universite.service';

@Component({
  selector: 'app-list-uni',
  templateUrl: './list-uni.component.html',
  styleUrls: ['./list-uni.component.css']
})
export class ListUniComponent implements OnInit {
  listUni!: Universite[];
  p: number = 1;
  constructor(private uniService: UniversiteService) { }

  ngOnInit(): void {
    this.uniService.getUniversites().subscribe((value) => {
      this.listUni = value;

    });
  }

  supprimerUniversite(item: Universite) {
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
        this.uniService.deleteUniversite(item.idUniversite).subscribe(() => {
          this.uniService.getUniversites().subscribe((value) => {
            this.listUni = value;
          });
        });
        Swal.fire('Supprimé!', 'Universite supprimée avec succées.', 'success');
      }
    });
  }

}
