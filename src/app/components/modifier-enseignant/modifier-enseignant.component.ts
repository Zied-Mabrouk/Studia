import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Enseignant } from 'src/app/model/enseignant';
import { EnseignantService } from 'src/app/Service/enseignant.service';

@Component({
  selector: 'app-modifier-enseignant',
  templateUrl: './modifier-enseignant.component.html',
  styleUrls: ['./modifier-enseignant.component.css']
})
export class ModifierEnseignantComponent implements OnInit {

  id!:number;
  enseignant !: Enseignant;
  constructor(private enseignantservice:EnseignantService,private ac:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.enseignant= new Enseignant();
    this.id = this.ac.snapshot.params['idEnseignant'];
    this.enseignantservice.getEnseignantById(this.id).subscribe(data=>{
      console.log(data);
        this.enseignant=data;
    });
  }

  Modifier()
  {
    this.enseignantservice.ModifierEnseignant(this.id,this.enseignant).subscribe(data=>{
        this.backToEnseignantList();
    });
  }

  backToEnseignantList(){
    this.router.navigate(['/ListEnseignant']);
  }

  url !: any;
  readUrl(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
  
      reader.onload = (event: ProgressEvent) => {
        this.url = (<FileReader>event.target).result;
      }
    
      reader.readAsDataURL(event.target.files[0]);
      this.enseignant.image=event.target.files[0].name;
    }
  }




}
