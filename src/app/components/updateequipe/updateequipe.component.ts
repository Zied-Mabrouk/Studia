import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EquipeService } from 'src/app/Service/equipe.service';
import { Equipe } from 'src/app/model/equipe';

@Component({
  selector: 'updateequipe',
  templateUrl: './updateequipe.component.html',
  styleUrls: ['./updateequipe.component.css']
})
export class UpdateequipeComponent implements OnInit {

  id!:number;
  Niveau: any = ['JUNIOR','SENIOR' ,'EXPERT'];
  equipe:Equipe=new Equipe;
  constructor(private route:ActivatedRoute,private equipeservice:EquipeService,private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['idEquipe'];

    this.equipeservice.getEquipe(this.id).subscribe(data=>{
      this.equipe=data;
      
      const index: number = this.Niveau.indexOf(this.equipe.niveau);
    if (index !== -1) {
        this.Niveau.splice(index, 1);
    }      
     console.log(this.Niveau);

    })
  }

  onSubmit(){
   
    
   const select= (<HTMLInputElement>document.getElementById("select")).value;
   this.equipe.niveau=select;
   
   console.log(this.equipe.detailEquipe);
   this.equipeservice.updateEquipe(this.equipe).subscribe(data=>{

   })

   
   this.router.navigate(['/equipe']);
   

   

  }

}
