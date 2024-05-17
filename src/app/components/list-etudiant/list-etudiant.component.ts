import { Component, OnInit, Input } from '@angular/core';
import { HeaderComponent } from 'src/app/layouts/header/header.component';
import { Etudiant } from 'src/app/model/etudiant';
import { EtudiantService } from 'src/app/Service/etudiant.service';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { AssignDepartmentToEtudiantComponent } from '../assign-department-to-etudiant/assign-department-to-etudiant.component';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import 'jspdf-autotable';
@Component({
  selector: 'app-list-etudiant',
  templateUrl: './list-etudiant.component.html',
  styleUrls: ['./list-etudiant.component.css'],
})
export class ListEtudiantComponent implements OnInit {
  listEtudiants!: Etudiant[];
  p: number = 1;
  showDetails: boolean = false;
  item!: Etudiant;
  listEmotes: any[] = ['(>_<)', '(≥o≤)', '(o_o)'];

  randomNumber!: number;
  constructor(
    public etudiantService: EtudiantService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.etudiantService.getEtudiants().subscribe((value) => {
      this.listEtudiants = value;
    });
  }

  supprimerEtudiant(item: Etudiant) {
    Swal.fire({
      title: 'Voulez vous supprimer cet étudiant?',
      text: 'cette action ne peut pas être annulée ',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Supprimer!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.etudiantService.deleteEtudiant(item.idEtudiant).subscribe(() => {
          this.etudiantService.getEtudiants().subscribe((value) => {
            this.listEtudiants = value;
          });
        });
        Swal.fire('Supprimé!', 'Etudiant supprimé avec succées.', 'success');
      }
    });
  }

  ShowDetails(item: Etudiant) {
    this.item = item;
    this.showDetails = true;
  }

  onXbuttonClick() {
    this.showDetails = false;
  }
  testError(item: any) {
    this.randomNumber = Math.trunc(
      Math.random() * (this.listEmotes.length - 1 + 1)
    );
    if (!item) return true;
    else {
      return this.listEtudiants.find((value) => {
        return (
          value.nomE.toLowerCase().includes(item) ||
          value.prenomE.toLowerCase().includes(item) ||
          value.opt.toLowerCase().includes(item)
        );
      });
    }
  }

  deletefilters() {
    this.etudiantService.searchText = '';
  }

  openDialog(item: any) {
     const dialogRef = this.dialog.open(AssignDepartmentToEtudiantComponent, {
       width: 'fit-content',
       height: 'fit-content',
       autoFocus: false,
       backdropClass: 'hello',
       data: { etudiant: item },
    });

    dialogRef.afterClosed().subscribe(() => {
      window.location.reload();
    });
  }

  downloadPDF(p: number) {
    p = this.p;
    const doc = new jsPDF();
    autoTable(doc, {
      body: [
        [
          {
            content: 'List des etudiants',
            styles: {
              halign: 'left',
              fontSize: 20,
              textColor: '#fff',
            },
          },
          {
            content: p,
            styles: {
              halign: 'right',
              fontSize: 20,
              textColor: '#fff',
            },
          },
        ],
      ],
      theme: 'plain',
      styles: {
        fillColor: '#2199e8',
      },
    });
    autoTable(doc, {
      html: '#my-table',
      head: [['Nom', 'Prenom', 'Option', 'Departement']],
      // body: [this.listEtudiants],
    });

    doc.save('etudiant.pdf');
  }
}
