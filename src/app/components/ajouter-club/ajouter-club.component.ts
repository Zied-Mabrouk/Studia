import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Club } from 'src/app/model/club';
import { ClubService } from 'src/app/Service/club.service';

@Component({
  selector: 'app-ajouter-club',
  templateUrl: './ajouter-club.component.html',
  styleUrls: ['./ajouter-club.component.css']
})
export class AjouterClubComponent implements OnInit {

  club :Club = new Club();
  constructor(private clubService:ClubService ,private router:Router) { }

  ngOnInit(): void {
  }

saveClub(){ 
  this.clubService.ajouterClub(this.club).subscribe(data=>{
    console.log(data);
    this.goToClubList();
  }) 
}
goToClubList(){
  this.router.navigate(['/ListClub']);
}



  onSub(){
    this.saveClub();
  }
}
