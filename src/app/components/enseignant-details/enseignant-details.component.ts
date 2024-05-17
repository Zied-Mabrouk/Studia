import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Enseignant } from 'src/app/model/enseignant';
import { EnseignantService } from 'src/app/Service/enseignant.service';

@Component({
  selector: 'app-enseignant-details',
  templateUrl: './enseignant-details.component.html',
  styleUrls: ['./enseignant-details.component.css']
})
export class EnseignantDetailsComponent implements OnInit {
 
  id!:any;
  enseignant !: any;
  
  constructor(private ac : ActivatedRoute,private myservice:EnseignantService) {
    
   }

  ngOnInit(): void {
    // this.id = this.ac.snapshot.params['idEnseignant'];
    // this.enseignant = new Enseignant();
    // this.myservice.getEnseignantById(this.id).subscribe(data=>{
    //   this.enseignant = data;
    //   console.log(this.enseignant);
 
    // });
    this.ac.paramMap.subscribe((params) => {
      this.id = params.get('idEnseignant');
      //console.log(this.activatedroute.snapshot.params['id']);
      //console.log(params.get('id'));
    
      this.enseignant=this.myservice.enseignants.find(item => item.idEnseignant === Number(this.id));
      
  });
  }
}
