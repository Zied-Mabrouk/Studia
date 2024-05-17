import { Component, OnInit } from '@angular/core';
import {Departement} from "../../model/departement";
import {ActivatedRoute, Router} from "@angular/router";
import { DepartementService } from 'src/app/Service/departement.service';

@Component({
  selector: 'app-add-departement',
  templateUrl: './add-departement.component.html',
  styleUrls: ['./add-departement.component.css']
})
export class AddDepartementComponent implements OnInit {
  departement!: Departement;
  new!: boolean;
  departementID!: number;
  constructor(private departementService: DepartementService,
              private _router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.departement = new Departement();

      if (params['id']) {
        this.departementService.getDepartement(params['id']).subscribe((value) => {
          this.departement = value;
        });
        this.departementID = +params['id'];
        this.new = false;
      } else {
        this.new = true;
      }
    });
  }
  OnSubmit(myForm: any) {
    if (this.new) {
      this.departementService.ajouterDepartement(myForm.value).subscribe();
      console.log("xDDDDDDDDDD")
    } else {
      this.departementService
        .updateDepartement(myForm.value, this.departementID)
        .subscribe();
    }
     this._router.navigateByUrl('/ListDepartment');
  }

}
