import { Enseignant } from "./enseignant";

export class Module {
    idModule!:number;
    nomModule!:string;
    chargeHoraire!:number;
    nbEtcs!:number; 
    enseignants!:Set<Enseignant>;
    
    
constructor() 
{
   
   
}
}
