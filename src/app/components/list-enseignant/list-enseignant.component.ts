import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Enseignant } from 'src/app/model/enseignant';
import { EnseignantService } from 'src/app/Service/enseignant.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-list-enseignant',
  templateUrl: './list-enseignant.component.html',
  styleUrls: ['./list-enseignant.component.css']
})
export class ListEnseignantComponent implements OnInit {

  p:number = 1; 
  enseignants!:Enseignant[];
  //id!:number;
  constructor(public enseignantService:EnseignantService,private router:Router) { }

  ngOnInit(): void {
    this.getEnseignantList();
  }

 getEnseignantList():Enseignant[] 
  {
    this.enseignantService.getEnseignantList().subscribe(data=>{
      this.enseignants = data;
      console.log(this.enseignants[0].moduleRes.nomModule);
    });
    return this.enseignants;
  }

  updateEnseignant(id: number)
  {
    this.router.navigate(['Enseignantupdate',id]);
  }

  assignEnseignantModule(id: number)
  {
    this.router.navigate(['assignEnsModule',id]);
  }




  delete(id: number)
  {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        this.enseignantService.delete(id).subscribe(data=>{
          this.getEnseignantList();
        });
      }
    })            

  }

  reload(){
    window.location.reload();
  }




}
