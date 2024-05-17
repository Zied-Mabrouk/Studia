import { Component, OnInit } from '@angular/core';
import {Universite} from "../../model/universite";
import {ActivatedRoute, Router} from "@angular/router";
import { UniversiteService } from 'src/app/Service/universite.service';
import { DepartementService } from 'src/app/Service/departement.service';

@Component({
  selector: 'app-add-uni',
  templateUrl: './add-uni.component.html',
  styleUrls: ['./add-uni.component.css']
})
export class AddUniComponent implements OnInit {
  uni!: Universite;
  new!: boolean;
  universiteID!: number;

  constructor(
    private departement: DepartementService,
    private universiteService: UniversiteService,
    private _router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.uni = new Universite();

      if (params['id']) {
        this.universiteService.getUniversite(params['id']).subscribe((value) => {
          this.uni = value;
        });
        this.universiteID = +params['id'];
        this.new = false;
      } else {
        this.new = true;
      }
    });
  }
  OnSubmit(myForm: any) {
    if (this.new) {
      this.universiteService.ajouterUniversite(myForm.value).subscribe();
      console.log("xDDDDDDDDDD")
    } else {
      this.universiteService
        .updateUniversite(myForm.value, this.universiteID)
        .subscribe();
    }
    this._router.navigateByUrl('/ListUni');
  }

}
