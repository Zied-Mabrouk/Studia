import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Enseignant } from 'src/app/model/enseignant';
import { EnseignantService } from 'src/app/Service/enseignant.service';

@Component({
  selector: 'app-ajouter-enseignant',
  templateUrl: './ajouter-enseignant.component.html',
  styleUrls: ['./ajouter-enseignant.component.css']
})
export class AjouterEnseignantComponent implements OnInit {

  id!:number;
  myForm !: FormGroup;
  Form1 !: FormGroup;
  url !: any;
  enseignant: Enseignant= new Enseignant();
  constructor(private enseignantservice:EnseignantService,private router:Router,private ac:ActivatedRoute) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      Form1:new FormGroup({
        nomE:new FormControl('',[Validators.required, Validators.minLength(5)]),
        prenomE:new FormControl('',[Validators.required, Validators.minLength(4)]),
        email:new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z0-9._-]+@esprit.tn")]),
      }),
      date:new FormControl('',[Validators.required]),
      image:new FormControl('',[Validators.required]),
      grade:new FormControl('',[Validators.required])

    });

  }

  get nomE()
{
  return this.myForm.controls['Form1'].get('nomE');
}

get prenomE()
{
  return this.myForm.controls['Form1'].get('prenomE');
}

get email()
{
  return this.myForm.controls['Form1'].get('email');
}

get date()
{
  return this.myForm.controls['Form1'].get('date');
}

get image()
{
  return this.myForm.get('image');
}

get grade()
{
  return this.myForm.get('grade');
}

AddEnseignant()
{
    this.enseignantservice.AddEnseignant(this.enseignant).subscribe(data=>{
    console.log(data);
    this.backToEnseignantList();
  },error=>console.log(error));

}

backToEnseignantList(){
  this.router.navigate(['/ListEnseignant']);
}

Ajouter()
{
  console.log(this.enseignant);
  this.AddEnseignant();
}

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
