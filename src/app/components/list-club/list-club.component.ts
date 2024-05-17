import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Club } from 'src/app/model/club';
import { ClubService } from 'src/app/Service/club.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-club',
  templateUrl: './list-club.component.html',
  styleUrls: ['./list-club.component.css']
})
export class ListClubComponent implements OnInit {
  clubs!:Club[];


  constructor(public clubService:ClubService, private router:Router) { }

  ngOnInit(): void {
   this.getClubs();
}
private getClubs():Club[]{
  this.clubService.getClubList().subscribe(data=>{
    this.clubs=data;
    console.log(this.clubs);
  }
    )
return this.clubs;
}


updateClub(id:number){
  this.router.navigate(['update-club',id]);

}

deleteClub(id:number){
 
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
      this.clubService.deleteClub(id).subscribe(data=>{
        console.log(data);
        this.getClubs();
      })
    }
  })      

}










}
