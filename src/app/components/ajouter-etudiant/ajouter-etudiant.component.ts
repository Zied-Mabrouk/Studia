import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Departement } from 'src/app/model/departement';
import { Etudiant } from 'src/app/model/etudiant';
import { DepartementService } from 'src/app/Service/departement.service';
import { EtudiantService } from 'src/app/Service/etudiant.service';

@Component({
  selector: 'app-ajouter-etudiant',
  templateUrl: './ajouter-etudiant.component.html',
  styleUrls: ['./ajouter-etudiant.component.css'],
})
export class AjouterEtudiantComponent implements OnInit {
  etudiant!: Etudiant;
  new!: boolean;
  etudiantID!: number;
  listDepartments!: Departement[];
  departement!: Departement;
  JSON!: JSON;

  constructor(
    private etudiantService: EtudiantService,
    private _router: Router,
    private route: ActivatedRoute,
    private departmentService: DepartementService
  ) {
    this.JSON = JSON;
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.etudiant = new Etudiant();
      this.departmentService.getDepartements().subscribe((value) => {
        this.listDepartments = value;
      });

      if (params['id']) {
        this.etudiantService.getEtudiant(params['id']).subscribe((value) => {
          this.etudiant = value;
          this.departement = this.etudiant.departement;
        });
        this.etudiantID = +params['id'];
        this.new = false;
      } else {
        this.new = true;
      }
    });
  }

  OnSubmit(myForm: any) {
    console.log(myForm.value);
    let test = true;
    let value = myForm.value;
    if (!value.departement) {
      value.departement = null;
      test = false;
    }
    if (this.new) {
      this.departmentService
        .getDepartement(+myForm.value.departement)
        .subscribe((data) => {
          if (test) value.departement = data;
          this.etudiantService.ajouterEtudiant(value).subscribe(() => {
            this._router.navigateByUrl('/ListEtudiant');
          });
        });
    } else {
      this.departmentService
        .getDepartement(+myForm.value.departement)
        .subscribe((data) => {
          if (test) value.departement = data;

          this.etudiantService
            .updateEtudiant(value, this.etudiantID)
            .subscribe(() => {
              this._router.navigateByUrl('/ListEtudiant');
            });
        });
    }
  }
}
