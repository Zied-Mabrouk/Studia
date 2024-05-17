import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Departement } from 'src/app/model/departement';
import { DepartementService } from 'src/app/Service/departement.service';
import { EtudiantService } from 'src/app/Service/etudiant.service';

@Component({
  selector: 'app-assign-department-to-etudiant',
  templateUrl: './assign-department-to-etudiant.component.html',
  styleUrls: ['./assign-department-to-etudiant.component.css'],
})
export class AssignDepartmentToEtudiantComponent implements OnInit {
  list!: Departement[];
  idDepar!: number;

  constructor(
    public dialogRef: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private departmentService: DepartementService,
    private etudiantService: EtudiantService
  ) {}

  ngOnInit(): void {
    this.departmentService.getDepartements().subscribe((value) => {
      this.list = value;
    });
  }

  OnSubmit(myForm: any) {
    const ide = +this.data.etudiant.idEtudiant;
    const idd = +myForm.value.idDepar;
    this.data.etudiant.departement = myForm.value;

    // this.etudiantService.assignEtudiantToDepartment(ide, idd);
    this.etudiantService
      .updateEtudiant(this.data.etudiant, ide)
      .subscribe(() => {
        this.dialogRef.closeAll();
      });
  }
}
