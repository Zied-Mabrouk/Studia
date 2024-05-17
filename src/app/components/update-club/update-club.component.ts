import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Club } from 'src/app/model/club';
import { ClubService } from 'src/app/Service/club.service';

@Component({
  selector: 'app-update-club',
  templateUrl: './update-club.component.html',
  styleUrls: ['./update-club.component.css']
})
export class UpdateClubComponent implements OnInit {
  id!: number;
  club:Club=new Club();

  constructor(private clubService:ClubService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.clubService.getClubById(this.id).subscribe(data=>this.club=data
      );
    (      error: any)=>console.log(error);
  }
  onSubmit(){
    this.clubService.updateClub(this.club).subscribe(data=>{
      this.goToClubList();

    })
  }
  goToClubList(){
    this.router.navigate(['/ListClub']);
  }

}
